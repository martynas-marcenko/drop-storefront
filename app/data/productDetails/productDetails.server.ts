import type {ProductDetails} from '~/lib/product-types';
import {roseSerum} from './roseSerum';

export async function getProductDetails(
  id: string,
): Promise<ProductDetails | undefined> {
  const allProducts: ProductDetails[] = [roseSerum];

  const product = allProducts.find((product) => product.id === id);

  return product;
}
