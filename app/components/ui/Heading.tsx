import {Text} from '~/components/ui';
import clsx from 'clsx';

export function Heading({
  heading,
  className,
  as = 'h2',
}: {
  heading?: string;
  className?: string;
  as?: React.ElementType;
}) {
  const smallStyles = clsx('md:hidden font-semibold', className);
  const mediumStyles = clsx('hidden md:block', className);

  return (
    <>
      <Text as={as} size="text-2xl" className={smallStyles}>
        {heading}
      </Text>
      <Text as={as} size="text-3xl" className={mediumStyles}>
        {heading}
      </Text>
    </>
  );
}
