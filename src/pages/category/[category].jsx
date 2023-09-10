/* eslint-disable react/jsx-key */
import RootLayout from '@/components/Layout/RootLayout';
import FeaturedCard from '@/components/ui/FeaturedCard';
import Header from '@/components/ui/Header';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Category = () => {
  const router = useRouter();
  const categories = useSelector((state) => state?.categories?.categories);

  const filterCategories = categories.filter(
    (category) => category?.category === router?.query?.category
  );

  return (
    <div className="container  md:p-[100px] flex flex-col justify-center">
      <Header
        mainTitle="Category:"
        title={router?.query?.category}
        subTitle="Explore Our Exclusive Collection of Featured Products - Uncover the Latest Trends and Must-Have Items!"
      ></Header>
      <div
        className="flex flex-col md:flex-row justify-center
       flex-wrap items-center my-5"
      >
        {filterCategories[0]?.products?.map((product) => (
          <div className="md:w-1/3 p-2">
            <FeaturedCard key={product?._id} product={product}>
              Choose Product
            </FeaturedCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
