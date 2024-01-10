import type {ProductDetails} from '~/lib/product-types';
import {roseSerum} from './roseSerum';

export async function getProductDetails(id: string): Promise<ProductDetails> {
  const allProducts: ProductDetails[] = [roseSerum, roseSerum];
  const product = allProducts.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}
