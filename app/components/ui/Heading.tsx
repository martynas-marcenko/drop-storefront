import {Text} from '~/components/ui';

export function Heading({
  heading,
  className,
  as = 'h2',
}: {
  heading?: string;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <>
      <Text as={as} size="text-3xl" className={className}>
        {heading}
      </Text>
    </>
  );
}
