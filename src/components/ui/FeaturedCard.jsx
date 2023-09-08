import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { selectedProducts } from '@/redux/features/products/productSlice';
import { useDispatch } from 'react-redux';
const FeaturedCard = ({ product, children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSelect = (product) => {
    dispatch(selectedProducts(product));
    router.push('/build');
  };

  return (
    <div className=" shadow-sm shadow-base p-5">
      <Link
        href={`${
          router?.pathname === '/category/[category]'
            ? `product/${product?._id}`
            : `category/product/${product?._id}`
        }`}
      >
        <Image
          src={product?.Image}
          width={400}
          height={300}
          className="h-[300px]"
          alt=""
        ></Image>
        <div className="h-12 my-2">
          {' '}
          <p className="text-xl font-semibold ">
            Product Name: {product['Product Name']}
          </p>
        </div>
        <div className="  h-6">
          <p>Category: {product?.Category}</p>
        </div>

        <div className="flex justify-between items-center my-2 h-6">
          <p className="text-primary text-3xl font-semibold">
            Price: ${product?.Price}
          </p>
          {product?.Status == 'In Stock' ? (
            <p className="rounded-full border-2 border-green text-green shadow-sm px-3  text-sm ">
              {' '}
              {product?.Status}
            </p>
          ) : (
            <p className="rounded-full border-2 border-red text-red shadow-sm px-1 text-sm ">
              {' '}
              {product?.Status}
            </p>
          )}
        </div>
      </Link>
      {product?.Status == 'In Stock' ? (
        <div className="flex justify-center">
          {' '}
          <button
            className="bg-primary py-2 border border-primary cursor-pointer px-5 w-full my-4 text-white rounded-sm"
            onClick={() => handleSelect(product)}
          >
            Add To Builder
          </button>
        </div>
      ) : (
        <button
          className="bg-white py-2 px-5 w-full my-4 text-baseColor border border-baseColor cursor-not-allowed rounded-sm"
          onClick={() => handleSelect(product)}
        >
          Out of Stock
        </button>
      )}

      {/* <div className="flex justify-start items-center">
        <Review key={product?._id} product={product} />
      </div> */}
    </div>
  );
};

export default FeaturedCard;
