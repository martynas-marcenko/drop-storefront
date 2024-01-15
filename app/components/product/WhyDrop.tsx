import {Heading, Text} from '~/components/ui';
import cn from 'clsx';
import getProductName from '~/lib/get-product-name';
import type {ProductGid, WhyDrop as WhyDropProps} from '~/lib/product-types';
import {Image} from '@shopify/hydrogen';

interface Props {
  productType?: string;
  data?: WhyDropProps[];
  productGid: ProductGid;
}

type HeadingMapType = {
  [key: string]: string;
};

export const WhyDrop = ({data, productGid}: Props) => {
  const iconBackgroundColor = cn('rounded-2xl p-3 bg-gradient-to-r', {
    'from-[#F7C6CF] to-[#B1BAF5]': getProductName(productGid) === 'rockRose',
    'from-[#F2BE49] to-[#FF989B]': getProductName(productGid) === 'mursalski',
    'from-[#548464] to-[#EF8253]': getProductName(productGid) === 'hemp',
    'from-[#E9BCC1] to-[#F8E0E2]': getProductName(productGid) === 'rose',
    'from-[#D3B04D] to-[#92A54F]': getProductName(productGid) === 'carrot',
    'from-[#C1D1F2] to-[#D8E3F7]':
      getProductName(productGid) === 'blemishEmulsion',
  });

  const headingMap: HeadingMapType = {
    rockRose: 'Why Choose Our Serums',
    mursalski: 'Why Choose Our Cleansers',
    hemp: 'Why Choose Our Cleansers',
    rose: 'Why Choose Our Serums',
    carrot: 'Why Choose Our Serums',
    blemishEmulsion: 'Why Choose Our Serums',
  };

  const headingText =
    headingMap[getProductName(productGid)] || 'Why Choose Our Products';

  const gridClassName = cn('grid w-full gap-sm items-start', {
    'grid-cols-1 md:grid-cols-3': data?.length === 3,
    'grid-cols-1 md:grid-cols-2': data?.length === 4,
  });

  return (
    <div className="flex w-full flex-col">
      <div className="sm-max:mb-xs mb-md">
        <Heading heading={headingText} />
      </div>
      <div className={gridClassName}>
        {data?.map(({imgSrc, text}) => (
          <div
            key={imgSrc}
            className="flex h-full flex-col space-y-sm rounded-2xl border bg-white p-sm drop-shadow-xl"
          >
            <div className="flex">
              <div className={iconBackgroundColor}>
                <div className="relative h-[48px] w-[48px]">
                  <Image
                    alt={text}
                    data={{
                      url: imgSrc,
                      id: imgSrc,
                    }}
                    className="object-cover object-center w-full h-full"
                    height={32}
                    width={32}
                    sizes="(max-width: 32px)"
                    // loaderOptions={{
                    //   scale: 2,
                    //   crop: 'center',
                    // }}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <Text className="font-semibold">{text}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
