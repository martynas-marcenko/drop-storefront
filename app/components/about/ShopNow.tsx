import {Text} from '~/components/ui';
import {Button, Section} from '~/components';

export const ShopNow = () => {
  return (
    <Section width="narrow" divider="top">
      <div className="grid gap-x-md gap-y-md justify-items-center items-center justify-center text-center max-w-4xl md:grid-cols-[1fr_auto]">
        <Text size="text-3xl">
          Start your journey of a healthy and beautiful skin.
        </Text>
        <Button to="/products">Shop Now</Button>
      </div>
    </Section>
  );
};
