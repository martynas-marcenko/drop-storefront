import type {Storefront} from '~/lib/type';
import type {ReviewsData} from '~/lib/product-types';

export async function getProductReviews(
  storefront: Storefront,
  productId: string,
) {
  const {reviews} = await storefront.query<ReviewsData>(REVIEWS_QUERY, {
    variables: {productId, first: 50},
  });

  const st = reviews.edges || [];

  if (!reviews) {
    throw new Response('Not found', {status: 404});
  }

  const productReviews = st.filter(
    (review) => review.node.product.value === productId,
  );

  return productReviews;
}

export async function getAllReviews(storefront: Storefront) {
  const {reviews} = await storefront.query<ReviewsData>(REVIEWS_QUERY, {
    variables: {first: 50},
  });

  if (!reviews) {
    throw new Response('Not found', {status: 404});
  }

  return reviews.edges || [];
}

export const REVIEWS_QUERY = `#graphql
  query getReviewsContent($language: LanguageCode, $first: Int = 50) @inContext(language: $language) {
    reviews: metaobjects(first: $first, type: "reviews") {
      edges {
        node {
          id
          type
          handle
          text: field(key: "text") {
            value
          }
          rating: field(key: "rating") {
            value
          }
          isVerified: field(key: "is_verified") {
            value
          }
          isFeatured: field(key: "is_featured") {
            value
          }
          product: field(key: "product") {
            value
          }
          name: field(key: "name") {
            value
          }
          date: field(key: "date") {
            value
          }
          image: field(key: "image") {
            type
            value
            reference {
                ... on MediaImage {
                image {
                  url
                  altText
                  height
                  width
                  id
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
