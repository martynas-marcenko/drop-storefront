import type {ProductGid} from '~/lib/product-types';

const productMap = {
  'gid://shopify/Product/6635015962762': 'rockRose',
  'gid://shopify/Product/5116743876746': 'mursalski',
  'gid://shopify/Product/6543863578762': 'hemp',
  'gid://shopify/Product/6543871737994': 'rose',
  'gid://shopify/Product/6544243622026': 'carrot',
  'gid://shopify/Product/6875942289546': 'blemishEmulsion',
};

const getProductName = (productGid: ProductGid) => {
  return productMap[productGid] || 'rose';
};

export default getProductName;
