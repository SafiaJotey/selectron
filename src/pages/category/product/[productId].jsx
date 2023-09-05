import RootLayout from '@/components/Layout/RootLayout';
import Review from '@/components/ui/Review';
import Image from 'next/image';

const ProductDetails = ({ product }) => {
  return (
    <div className="container flex justify-center items-center ">
      <div className="flex flex-col md:flex-row  justify-between items-start my-5 w-[80%] shadow-md">
        <div className="md:w-[40%]">
          {' '}
          <Image
            src={product?.Image}
            width={400}
            height={400}
            className="border border-baseColor rounded-md"
            alt=""
          ></Image>
        </div>
        <div className="md:w-[60%] p-5">
          <h4 className="text-5xl font-semibold">{product['Product Name']}</h4>
          <div className="flex justify-between items-center">
            <p className=" text-primary font-extrabold text-xl my-3">
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
          <div className="my-5">
            <h6 className="text-xl font-semibold">Key Features</h6>
            <ul>
              {Object.keys(product['Key Features'])?.map((item) => {
                return (
                  <li key={item}>
                    <span className="text-md font-semibold">{item}:</span>{' '}
                    {product['Key Features'][item]}
                  </li>
                );
              })}
            </ul>
          </div>
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
