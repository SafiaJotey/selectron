/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import RootLayout from '@/components/Layout/RootLayout';
import FeaturedCard from '@/components/ui/FeaturedCard';
import Header from '@/components/ui/Header';

const AllProducts = ({ allProducts }) => {
  return (
    <div className="container py-5 md:p-[50px] flex flex-col justify-center">
      <Header
        mainTitle="All"
        title="Products"
        subTitle="Explore Our Exclusive Collection of  Products - Uncover the Latest Trends and Must-Have Items!"
      ></Header>
      <div
        className="flex flex-col md:flex-row justify-center
       flex-wrap items-center my-5"
      >
        {allProducts?.map((product) => {
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

export default AllProducts;
AllProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getServerSideProps() {
  const res = await fetch(`${process.env.URL}/api/v1/product/`);

  const data = await res.json();

  return {
    props: {
      allProducts: data?.data,
    },
  };
}
