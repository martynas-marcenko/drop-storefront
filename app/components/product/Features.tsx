import {useRef} from 'react';
import {Text, Heading} from '~/components/ui';
import {motion, useScroll, useTransform, easeIn} from 'framer-motion';
import type {ProductFeature} from '~/lib/product-types';

interface Props {
  numberOfReasonsTitle: string;
  features: ProductFeature[];
}

const Title = ({title}: {title: string}) => {
  const containerRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });
  const xOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1], {
    ease: easeIn,
  });

  const xPosition = useTransform(scrollYProgress, [0.2, 0.3], ['15px', '0px'], {
    ease: easeIn,
  });

  return (
    <motion.div
      ref={containerRef}
      style={{translateX: xPosition, opacity: xOpacity}}
      className="mb-xs"
    >
      <Text size="text-xl" className="font-medium">
        {title}
      </Text>
    </motion.div>
  );
};

const Body = ({body}: {body: string}) => {
  const containerRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });
  const xOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1], {
    ease: easeIn,
  });

  const xPosition = useTransform(scrollYProgress, [0.2, 0.3], ['15px', '0px'], {
    ease: easeIn,
  });
  return (
    <motion.div
      ref={containerRef}
      style={{translateX: xPosition, opacity: xOpacity}}
    >
      <Text>{body}</Text>
    </motion.div>
  );
};

export const Features = ({features, numberOfReasonsTitle}: Props) => {
  const containerRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const xOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1], {
    ease: easeIn,
  });

  return (
    <>
      <div>
        <motion.div
          ref={containerRef}
          style={{opacity: xOpacity}}
          className="sticky top-40 sm-max:mb-sm"
        >
          <Heading heading={numberOfReasonsTitle} />
        </motion.div>
      </div>
      <div className="grid gap-y-md md:gap-y-lg">
        {features.map((feature) => (
          <div key={feature.title}>
            <Title title={feature.title} />
            <Body body={feature.body} />
          </div>
        ))}
      </div>
    </>
  );
};
