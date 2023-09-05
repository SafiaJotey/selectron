import { setCompleteCategory } from '@/redux/features/categories/categoriesSlice';
import { removeSelected } from '@/redux/features/products/productSlice';
import Image from 'next/image';
import Link from 'next/link';
import { MdRemoveCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';

const ChooseCategorycard = ({ category }) => {
  const selectedProducts = useSelector((state) => state?.products?.selected);
  let builder = [];

  const dispatch = useDispatch();
  const requiredCategories = [
    'Processor',
    'RAM',
    'Power Supply Unit',
    'Storage Device',
    'Motherboard',
  ];

  const filterProducts = selectedProducts.filter(
    (product) => product?.Category === category?.category
  );
  const newProduct = { ...filterProducts[0] };
  for (let product of selectedProducts) {
    builder = [...builder, product?.Category];
  }

  const hasAllElems = requiredCategories.every((elem) =>
    builder.includes(elem)
  );
  if (hasAllElems) {
    dispatch(setCompleteCategory(true));
  } else {
    dispatch(setCompleteCategory(false));
  }

  // if(
  //   requiredCategories.every(category=>category===)
  // )
  return (
    <div className="shadow-sm p-2 rounded-sm my-2 ">
      <div className=" rounded-sm p-2 flex justify-between items-center">
        <div>
          <Image src={category?.image} width={100} height={100} alt=""></Image>
        </div>
        <p>{category?.category}</p>

        <Link href={`category/${category?.category}`}>
          {' '}
          <Button>Choose </Button>
        </Link>
      </div>
      {filterProducts.length ? (
        <div className="flex justify-between items-center">
          <div className="flex justify-around bg-basebackground rounded-md shadow-md border border-baseColor items-center w-full">
            {' '}
            <div className="rounded-sm p-2 flex justify-between items-center">
              <Image
                src={newProduct?.Image}
                width={50}
                height={50}
                alt=""
              ></Image>
            </div>
            <div>
              {' '}
              <p className="mx-2"> {newProduct['Product Name']}</p>
            </div>
            <div>
              {' '}
              <p> {category?.category}</p>
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() =>
                  dispatch(removeSelected({ id: newProduct?._id }))
                }
                className="flex cursor-pointer text-red shadow-md px-2 border border-red rounded-full p"
              >
                Remove <MdRemoveCircle className="text-2xl"></MdRemoveCircle>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChooseCategorycard;
