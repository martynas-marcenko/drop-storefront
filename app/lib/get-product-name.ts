import type {ProductGid} from '~/lib/product-types';

interface ProductProps {
  camelCase: string;
  title: string;
  type: string;
  urlHandle: string;
}

const productMap: Record<ProductGid, ProductProps> = {
  'gid://shopify/Product/6635015962762': {
    camelCase: 'rockRose',
    title: 'Rock Rose',
    type: 'Serum',
    urlHandle: 'rock-rose-serum',
  },
  'gid://shopify/Product/5116743876746': {
    camelCase: 'mursalski',
    title: 'Mursalski',
    type: 'Oil Cleanser',
    urlHandle: 'oil-cleanser-with-mursalski-tea-extract',
  },
  'gid://shopify/Product/6543863578762': {
    camelCase: 'hemp',
    title: 'Hemp',
    type: 'Oil Cleanser',
    urlHandle: 'oil-cleanser-with-mursalski-tea-extract',
  },
  'gid://shopify/Product/6543871737994': {
    camelCase: 'rose',
    title: 'Rose',
    type: 'Serum',
    urlHandle: 'rose-serum',
  },
  'gid://shopify/Product/6544243622026': {
    camelCase: 'carrot',
    title: 'Wild Carrot',
    type: 'Serum',
    urlHandle: 'wild-carrot-serum',
  },
  'gid://shopify/Product/6875942289546': {
    camelCase: 'blemishEmulsion',
    title: 'Blemish',
    type: 'Emulsion',
    urlHandle: 'blemish-control-emultion',
  },
};

const getProductName = (
  productGid: ProductGid,
  property: keyof ProductProps = 'camelCase',
): string => {
  const product = productMap[productGid];
  if (!product) {
    throw new Error(`Product with GID ${productGid} not found.`);
  }
  return product[property];
};

export default getProductName;
