import {useRef} from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  easeIn,
} from 'framer-motion';

import {ProductGid} from '~/lib/product-types';
import getProductName from '~/lib/get-product-name';

const colorMap: Record<string, string> = {
  rockRose: '#FC5C7D',
  mursalski: '#F2BE49',
  hemp: '#2C7744',
  rose: '#D66D75',
  carrot: '#799F0C',
  blemishEmulsion: '#6190E8',
};

export const getColor = (productGid: ProductGid): string => {
  const productName = getProductName(productGid);
  return colorMap[productName] || 'rgb(0, 0, 0)';
};

interface Props {
  productGid: ProductGid;
  text: string;
}

export const IntroHeading = ({text, productGid}: Props) => {
  const ref = useRef(null);
  const reff = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1], {
    ease: easeIn,
  });

  const texGradientRangeTop = [
    0.25,
    // black to white
    0.3,
    //black to black
    0.4, // 0.4
    //color to black
    0.5, // 0.5 Peak red
    //black to color
    0.65,
    //black to black
    0.8,
    //white to black
    1,
  ];

  const texGradientRangeBottom = [
    0.1,
    // black to white
    0.2,
    //black to black
    0.35, //0
    //color to black
    0.45, // Peak red
    //black to color
    0.55,
    //black to black
    0.7,
    //white to black
    0.9,
  ];

  const TopGradientColors = [
    //6
    'rgb(0, 0, 0)',
    //5
    'rgb(0, 0, 0)',
    //5a
    'rgb(0, 0, 0)',
    //4
    getColor(productGid),
    //3
    'rgb(0, 0, 0)',
    //2
    'rgb(0, 0, 0)',
    //1
    'rgb(0, 0, 0)',
  ];

  const BottomGradientColors = [
    //6
    'rgb(0, 0, 0)',
    //5
    'rgb(0, 0, 0)',
    //5a
    'rgb(0, 0, 0)',
    //4
    getColor(productGid),
    //3
    'rgb(0, 0, 0)',
    //2
    'rgb(0, 0, 0)',
    //1
    'rgb(0, 0, 0)',
  ];

  const STOP_1 = useTransform(
    scrollYProgress,
    texGradientRangeTop,
    TopGradientColors,
  );

  const STOP_2 = useTransform(
    scrollYProgress,
    texGradientRangeBottom,
    BottomGradientColors,
  );

  const textGradient = useMotionTemplate`linear-gradient(180deg, ${STOP_1} 10%, ${STOP_2} 90%)`;

  return (
    <div className="mb-sm md:my-[20px]">
      <motion.div
        ref={ref}
        style={{opacity: textOpacity}}
        className="flex w-full justify-center"
      >
        <h2 className="max-w-3xl px-6 text-center text-4xl font-semibold leading-tight text-black md:text-5xl">
          <motion.div
            className="bg-black box-decoration-clone bg-clip-text text-transparent"
            style={{
              backgroundImage: textGradient,
            }}
          >
            {text}
          </motion.div>
        </h2>
      </motion.div>
    </div>
  );
};
