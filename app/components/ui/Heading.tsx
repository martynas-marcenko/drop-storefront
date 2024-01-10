import {Text} from '~/components/ui';
import clsx from 'clsx';
import {paddings} from '~/lib/layoutConstants';

export function Heading({
  heading,
  className,
  padding,
  as = 'h3',
}: {
  heading?: string;
  className?: string;
  as?: React.ElementType;
  padding?: 'x' | 'y' | 'swimlane' | 'all';
}) {
  const styles = clsx(padding ? paddings[padding] : '', className);

  return (
    <>
      <div className="md:hidden">
        <Text as={as} size="text-2xl" className={styles}>
          {heading}
        </Text>
      </div>
      <div className="hidden md:block">
        <Text as={as} size="text-3xl" className={styles}>
          {heading}
        </Text>
      </div>
    </>
  );
}
