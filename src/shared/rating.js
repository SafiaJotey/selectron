export default function ratingCount(product) {
  let totalRating = 0;
  let finalRating = 0;

  product?.Reviews?.forEach((review) => {
    totalRating = totalRating + (review?.rating ? review?.rating : 0);
  });

  if (product?.Reviews?.length) {
    finalRating = totalRating / product?.Reviews?.length;
  }
  return finalRating;
}
