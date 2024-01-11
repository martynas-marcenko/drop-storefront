import {Text, Heading} from '~/components/ui';
import {Section, Grid} from '~/components/';
import clsx from 'clsx';

interface Props {
  number?: number;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({number, title, className, children}: Props) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-md bg-gray-200 p-sm md:gap-lg',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="md:hidden">
          <span className="text-5xl">{title}</span>
        </div>
        <div className="hidden md:block">
          <span className="text-7xl">{title}</span>
        </div>
        <div className="rounded bg-black px-xs py-1">
          <Text size="text-sm" className="font-demibold text-white">
            {number}
          </Text>
        </div>
      </div>
      <Grid items={2}>{children}</Grid>
    </div>
  );
};

export const Believes = () => {
  return (
    <>
      <Section width="narrow">
        <Heading heading="Our Believes" />
        <Card title="No Ageism" number={1}>
          <div>
            <div className="mb-sm">
              <Text size="text-xl">
                <span className="font-semibold">We believe</span> that beauty
                care is not defined by the dates in your passport. Our products
                are about making women feel comfortable in their own skin no
                matter the age.
              </Text>
            </div>
            <Text size="text-xl">
              We proudly celebrate women of all generations.
            </Text>
          </div>
          <blockquote>
            <div className="mb-xxs border-l border-gray-400 pl-sm">
              <Text>
                &quot;I&apos;ve started this business when I was well over my
                60-ties and I went into the industry, which is very
                youth-obsessed. And it was not easy as people are not used to
                seeing older entrepreneurs, especially in the beauty sphere. But
                I hope that my example can inspire ladies like me to take back
                the power taken from them by out-dated stereotypes.&quot;
              </Text>
            </div>
            <div className="pl-sm before:content-['\2014 \0020']">
              <Text as="figcaption">Jolanta</Text>
            </div>
          </blockquote>
        </Card>
        <Card title="Slow beauty" number={2}>
          <div className="mb-sm">
            <Text size="text-xl">
              <span className="font-semibold">We believe</span> that in the
              world of stress, constant change and rush, where “youth” is
              considered the most desirable prize and time is the currency, we
              need to slow down, relax, rewind. And appreciate the beauty of the
              age you are in, without the anxiety of constant need to turn back
              the time and look forever 23.
            </Text>
          </div>
          <div className="mb-sm">
            <Text size="text-xl">
              We call this belief a{' '}
              <span className="font-semibold">slow beauty</span>. And this is
              how we treat skincare. We make your skin happier one drop at a
              time. We find joy in everyday skincare routines that eventually
              add up to healthy, rested and glowing skin. Constant, patient care
              of the skin brings results and we hope you enjoy the journey every
              drop along the way.
            </Text>
          </div>
        </Card>
      </Section>
    </>
  );
};
