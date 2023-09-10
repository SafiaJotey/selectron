/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import FeaturedCategoriesCard from './ui/FeaturedCategoriesCard';
import Header from './ui/Header';

const FeatureCategories = () => {
  const categories = useSelector((state) => state?.categories?.categories);

  return (
    <div className="container py-5 md:p-[50px] flex flex-col justify-center">
      <Header
        mainTitle="Featured"
        title="Categories"
        subTitle="Discover a World of Excellence in Our Featured Categories - Explore, Shop, and Elevate Your Experience with Our Handpicked Selections!"
      ></Header>
      <div
        className="flex  flex-col md:flex-row justify-center
       flex-wrap items-center my-5"
      >
        {categories?.map((category) => {
          return (
            <div className="md:w-1/4 p-5">
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
