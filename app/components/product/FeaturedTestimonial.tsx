import {Text} from '~/components/ui';
import clsx from 'clsx';
import type {ProductGid} from '~/lib/product-types';

interface Props {
  text: string;
  productTitle: string;
  customerName: string;
  productGid: ProductGid;
}

export const FeaturedTestimonial = ({
  text,
  customerName,
  productTitle,
  productGid,
}: Props) => {
  const backgroundStyle = {
    'gid://shopify/Product/6635015962762': 'rockRose',
    'gid://shopify/Product/5116743876746': 'mursalski',
    'gid://shopify/Product/6543863578762': 'hemp',
    'gid://shopify/Product/6543871737994': 'rose',
    'gid://shopify/Product/6544243622026': 'carrot',
    'gid://shopify/Product/6875942289546': 'blemishEmulsion',
  };

  const backgroundClassName = clsx(
    backgroundStyle[productGid],
    'flex items-center justify-center rounded',
  );
  return (
    <div className={backgroundClassName}>
      <div className="max-w-md p-6 text-center flex flex-col">
        <div className="mb-xs">
          <Text size="text-2xl">"{text}"</Text>
        </div>
        <Text>{customerName},</Text>
        <Text>{productTitle} Customer</Text>
      </div>
    </div>
  );
};
