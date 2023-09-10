/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import RootLayout from '@/components/Layout/RootLayout';
import AddReviewModal from '@/components/ui/AddReviewModal';
import Review from '@/components/ui/Review';

import ReviewCard from '@/components/ui/ReviewCard';
import Image from 'next/image';
import { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddReview = (data) => {
    console.log('');
  };
  return (
    <div className="container p-[50px] flex-col justify-center items-center ">
      <div className="flex flex-col md:flex-row  justify-between items-start  shadow-md p-10">
        <div className="md:w-[40%] flex justify-center items-center">
          {' '}
          <Image src={product?.Image} width={300} height={300} alt=""></Image>
        </div>
        <div className="md:w-[60%] ">
          <h4 className="text-xl font-semibold">{product['Product Name']}</h4>
          <div className="flex justify-between items-center">
            <p className=" text-primary font-extrabold text-lg ">
              {product?.Category}
            </p>
            {product?.Status == 'In Stock' ? (
              <p className="rounded-full border-2 border-green text-green shadow-sm px-3  text-sm ">
                {' '}
                {product?.Status}
              </p>
            ) : (
              <p className="rounded-full border-2 border-red text-red shadow-sm px-2  text-sm ">
                {' '}
                {product?.Status}
              </p>
            )}
          </div>
          <Review key={product?._id} product={product}></Review>
          <hr className="text-baseColor my-2" />
          <p className="">{product?.Description}</p>
          <p className="text-justify">
            Elevate your computing experience with our selection of high-quality
            PC components. Whether you building a gaming rig, a content creation
            workstation, or simply looking to boost your PC performance, we have
            the parts you need.
          </p>
          <div className="my-5">
            <h6 className="text-lg font-semibold">Key Features</h6>
            <ul className="flex flex-wrap">
              {Object.keys(product['Key Features'])?.map((item) => {
                return (
                  <li key={item} className="border-r-2  px-2 text-sm ">
                    <span className="text-sm font-semibold ">{item}:</span>{' '}
                    {product['Key Features'][item]}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="bg-primary py-1 px-5 text-white rounded-sm border border-primary "
            onClick={handleOpenModal}
          >
            Add Review
          </button>
          <AddReviewModal
            open={isModalOpen}
            onClose={handleCloseModal}
            onAddReview={handleAddReview}
          />
        </div>
      </div>
      <div>
        <h6 className="text-main font-bold mt-10 mb-3 text-2xl">Reviews</h6>
        <div className=" my-4">
          {product?.Reviews?.map((review) => {
            return (
              <div className="bg-white rounded-lg shadow-md p-4 my-1">
                <ReviewCard key={review?._id} reviewData={review}></ReviewCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/v1/product/`);
  const products = await res.json();

  const paths = products?.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.URL}/api/v1/product/${params?.productId}`
  );

  const data = await res.json();

  return {
    props: {
      product: data?.data[0],
    },
    revalidate: 30,
  };
}
