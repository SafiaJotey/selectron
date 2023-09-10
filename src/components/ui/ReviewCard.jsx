import Review from './Review';

export default function ReviewCard({ reviewData }) {
  const rating = Number(reviewData?.rating);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">{reviewData?.reviewer}</span>
        <Review product={rating} />
      </div>
      <p className="text-gray-600">{reviewData?.comment}</p>
    </div>
  );
}
