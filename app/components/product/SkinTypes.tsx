import {useRef} from 'react';
import {Text, Heading} from '~/components/ui';
import {motion, useScroll, useTransform, MotionValue} from 'framer-motion';
import clsx from 'clsx';
import type {ProductGid} from '~/lib/product-types';

interface Props {
  text: string;
  productGid: ProductGid;
}

function useTransformWrapper(
  value: MotionValue<number>,
  xRange: number[],
  opacityRange: number[],
) {
  return useTransform(value, xRange, opacityRange);
}

export const SkinTypes = ({text, productGid}: Props) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const xRange = [0.5, 0.6, 0.8, 0.9];
  const opacityRange = [1, 1, 0, 0];

  const textOpacity = useTransformWrapper(
    scrollYProgress,
    xRange,
    opacityRange,
  );

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
    'absolute inset-0',
  );
  return (
    <div className="relative h-28 w-full py-32">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Title />
        <motion.div
          ref={ref}
          style={{opacity: textOpacity}}
          className="absolute max-w-md px-6 text-center"
        >
          <Text size="text-xl">{text}</Text>
        </motion.div>
      </div>
      <div className={backgroundClassName} />
    </div>
  );
};

const Title = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const xRange = [0.7, 0.8];
  const opacityRange = [0, 1];

  const textOpacity = useTransformWrapper(
    scrollYProgress,
    xRange,
    opacityRange,
  );

  const transition = {
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{opacity: textOpacity}}
      transition={transition}
      className="absolute"
    >
      <Heading heading="Skin Types" />
    </motion.div>
  );
};
