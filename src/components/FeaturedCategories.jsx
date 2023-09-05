/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import FeaturedCategoriesCard from './ui/FeaturedCategoriesCard';
import Header from './ui/Header';

const FeatureCategories = () => {
  const categories = useSelector((state) => state?.categories?.categories);

  return (
    <div className="container py-5 md:p-[100px] flex flex-col justify-center">
      <Header
        mainTitle="Featured"
        title="Categories"
        subTitle="Each category should have a corresponding route. (SSG implementation)"
      ></Header>
      <div
        className="flex  flex-col md:flex-row justify-center
       flex-wrap items-center my-5"
      >
        {categories?.map((category) => {
          return (
            <div className="md:w-1/4 p-2">
              <FeaturedCategoriesCard
                key={category._id}
                category={category}
              ></FeaturedCategoriesCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCategories;
