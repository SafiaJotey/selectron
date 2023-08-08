import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/ui/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
