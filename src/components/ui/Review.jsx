import ratingCount from '@/shared/rating';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function Review({ product }) {
  let finalrating;
  if (typeof product === 'number') {
    finalrating = product;
  } else {
    finalrating = ratingCount(product);
  }

  const maxRating = 5;
  const stars = [];
  const roundedRating = Math.round(finalrating * 2) / 2;
 
  for (let i = 0; i < Math.floor(roundedRating); i++) {
    stars.push(<BsStarFill className="text-review text-md" key={i} />);
  }

  if (roundedRating % 1 !== 0) {
    stars.push(
      <BsStarHalf className="text-review text-md" key={stars.length} />
    );
  }

  for (let i = stars.length; i < maxRating; i++) {
    stars.push(<BsStar className="text-review text-md" key={i} />);
  }

  return (
    <div className="flex ">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}
