import type {ProductDetails} from '~/lib/product-types';
import {roseSerum} from './roseSerum';
import {mursalskiCleanser} from './mursalskiCleanser';
import {hempCleanser} from './hempCleanser';
import {wildCarrotSerum} from './wildCarrotSerum';
import {rockRoseSerum} from './rockRoseSerum';
import {blemishControlEmulsion} from './blemishControlEmulsion';
export async function getProductDetails(id: string): Promise<ProductDetails> {
  const allProducts: ProductDetails[] = [
    roseSerum,
    rockRoseSerum,
    mursalskiCleanser,
    hempCleanser,
    wildCarrotSerum,
    blemishControlEmulsion,
  ];
  const product = allProducts.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}
