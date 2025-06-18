// NOTE: https://shopify.dev/docs/api/customer/latest/queries/order
export const CUSTOMER_ORDER_QUERY = `#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineItemFull on OrderLineItem {
    title
    quantity
    originalTotalPrice {
      ...OrderMoney
    }
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    discountedTotalPrice {
      ...OrderMoney
    }
    variant {
      image {
        altText
        height
        url
        id
        width
      }
      title
    }
  }
  fragment Order on Order {
    id
    name
    statusUrl
    processedAt
    fulfillmentStatus
    totalTax {
      ...OrderMoney
    }
    totalPrice {
      ...OrderMoney
    }
    shippingAddress {
      name
      formatted(withName: true)
      formattedArea
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query CustomerOrder($orderId: String!, $customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: 1, query: $orderId) {
        nodes {
          ...Order
        }
      }
    }
  }
` as const;
