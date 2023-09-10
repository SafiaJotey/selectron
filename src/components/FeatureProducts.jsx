/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { useSelector } from 'react-redux';
import FeaturedCard from './ui/FeaturedCard';
import Header from './ui/Header';

const FeatureProducts = () => {
  const products = useSelector((state) => state?.products?.products);

  return (
    <div className="container py-5 md:p-[50px] flex flex-col justify-center">
      <Header
        mainTitle="Featured"
        title="Products"
        subTitle="Explore Our Exclusive Collection of Featured Products - Uncover the Latest Trends and Must-Have Items!"
      ></Header>
      <div
        className="flex flex-col md:flex-row justify-center
       flex-wrap items-center my-5"
      >
        {products?.map((product) => {
          return (
            <div className="md:w-1/3 p-5" key={product?._id}>
              <FeaturedCard product={product}></FeaturedCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
