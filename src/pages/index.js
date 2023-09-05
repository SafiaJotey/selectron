import FeatureProducts from '@/components/FeatureProducts';
import FeatureCategories from '@/components/FeaturedCategories';
import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/ui/Banner';
import { getCategories } from '@/redux/features/categories/categoriesSlice';
import { getProducts } from '@/redux/features/products/productSlice';
import { useDispatch } from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  dispatch(getProducts(props?.products));
  dispatch(getCategories(props?.categories));
  return (
    <div>
      <Banner></Banner>
      <FeatureProducts></FeatureProducts>

      <FeatureCategories></FeatureCategories>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
  const res = await fetch(`${process.env.URL}/api/v1/product/random`);

  const data = await res.json();

  const categoryRes = await fetch(`${process.env.URL}/api/v1/category`);

  const categoryData = await categoryRes.json();

  return {
    props: {
      products: data?.data,
      categories: categoryData?.data,
    },
    revalidate: 30,
  };
}
