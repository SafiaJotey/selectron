import Image from 'next/image';
import Link from 'next/link';
const FeaturedCategoriesCard = ({ category }) => {
  return (
    <div className=" shadow-sm shadow-base p-5 ">
      <Link href={`category/${category?.category}`}>
        {' '}
        <div className="h-200 my-2 relative">
          {' '}
          <Image
            src={category?.image}
            width={400}
            height={300}
            className="h-[200px]"
            alt=""
          ></Image>
          <span className="absolute z-10 top-0 left-0 rounded-full border-2 border-primary text-white bg-primary shadow-sm px-3  text-sm ">
            {' '}
            {category?.category}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCategoriesCard;
