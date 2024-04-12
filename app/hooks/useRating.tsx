import type {ReviewItem} from '~/lib/product-types';

export function useRating({data}: {data: {node: ReviewItem}[]}) {
  // Check if data is not null or undefined and has at least one item
  if (!data || data.length === 0) {
    return null; // or return a default value or handle this case as you see fit
  }

  // Map over the data to extract the ratings and convert them to numbers
  const ratings = data.map((item) => {
    const rating = item.node.rating.value;
    return rating;
  });

  // Calculate the sum of all ratings
  const sumOfRatings = ratings
    .map(Number)
    .reduce((acc, current) => acc + current, 0);

  // Calculate the average rating. Avoid division by zero by checking data.length.
  const averageRating = sumOfRatings / data.length;

  // Return the average rating, rounded to two decimal places (or as per your requirement)
  return averageRating;
}
