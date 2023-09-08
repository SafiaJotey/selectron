import RootLayout from '@/components/Layout/RootLayout';
import ChooseCategorycard from '@/components/ui/ChooseCategorycard';
import Header from '@/components/ui/Header';
import Modal from '@/components/ui/Modal';
import { getSSRCategories } from '@/redux/features/categories/categoriesSlice';
import { resetSelected } from '@/redux/features/products/productSlice';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PcBuild = ({ ssrCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(resetSelected());
    setIsModalOpen(false);
    router.push('/');
  };

  dispatch(getSSRCategories(ssrCategory));
  const complete = useSelector((state) => state?.categories?.complete);

  return (
    <div className="container px-3 py-5 md:px-[100px] flex flex-col justify-center">
      <Header
        mainTitle="Desktops"
        title="Products"
        subTitle="Each category should have a corresponding route. (SSG implementation)"
      ></Header>
      <div>
        {ssrCategory?.map((category) => (
          <ChooseCategorycard
            key={category._id}
            category={category}
          ></ChooseCategorycard>
        ))}
        {!complete ? (
          <button className="bg-white border border-baseColor  py-2 px-5 text-baseColor  cursor-not-allowed rounded-sm">
            Complete Build
          </button>
        ) : (
          <button
            onClick={openModal}
            className="bg-primary py-2 px-5 text-white rounded-sm border border-primary cursor-pointer"
          >
            Complete Build
          </button>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Modal Content */}
          <div className="py-10 px-10">
            <div className="border border-baseColor p-5">
              {' '}
              <div className="flex justify-start items-center">
                {' '}
                <h1 className="text-xl font-semibold  mr-2">
                  PC Build Completed
                </h1>
                {/* <FaThumbsUp className="text-review text-2xl mb-2"></FaThumbsUp> */}
              </div>
              <p>Your PC build has been successfully completed! </p>
            </div>
            <button
              onClick={closeModal}
              className="border my-5  border-red py-2 px-3 cursor-pointer text-white rounded-sm bg-red"
            >
              {' '}
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.URL}/api/v1/category`);

  const data = await res.json();

  return {
    props: {
      ssrCategory: data?.data,
    },
  };
}
