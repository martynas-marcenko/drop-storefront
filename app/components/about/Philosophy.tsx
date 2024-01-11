import {Text, Heading} from '~/components/ui';
import {Section, Grid} from '~/components/';

interface Props {
  number?: number;
  title?: string;
  body?: string;
}

const Card = ({number, title, body}: Props) => {
  return (
    <div className="border p-sm">
      <div className="flex">
        <div className="bg-black px-xs py-1 rounded mb-xs">
          <Text size="text-sm" className="font-demibold text-white">
            {number}
          </Text>
        </div>
      </div>
      <div className="mb-xxs">
        <Text size="text-xl">{title}</Text>
      </div>
      <Text>{body}</Text>
    </div>
  );
};

export const Philosophy = () => {
  return (
    <Section>
      <Heading heading="Production philosophy" />
      <div className="max-w-xl">
        <div className="mb-sm">
          <Text size="text-xl">
            We mix timeless ingredients adding a twist of innovation with the
            wink in the eye to keep you surprised.
          </Text>
        </div>
        <Text size="text-xl">We follow these 3 core principles:</Text>
      </div>
      <Grid items={3}>
        <Card
          number={1}
          title="Clean beauty"
          body="We never use questionable, non-tested or non-approved ingredients. We precisely scan all the elements to ensure safety and peace of mind. We also carefully inspect ingredients’ effects for different skin types."
        />
        <Card
          number={2}
          title="Effectiveness"
          body="We strive for effectiveness of our ingredients so they are not just of a top-notch quality but also do the job well and deliver on the promises."
        />
        <Card
          number={3}
          title="Rare scents"
          body=" For a full experience we pay exceptional attention to the scents of our products and use unique hand-made aromas and essential oils."
        />
      </Grid>
    </Section>
  );
};
