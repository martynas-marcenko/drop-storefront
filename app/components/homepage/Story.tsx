import {Image} from '@shopify/hydrogen';
import {Section, Link, Grid} from '~/components/';
import {Heading, Text} from '~/components/ui';

export const Story = () => {
  const imgSrc =
    'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/bloom_store.jpg?v=1679490413';
  return (
    <>
      <Section>
        <Grid items={2}>
          <Image
            alt="Drop By Drop Story"
            data={{
              url: imgSrc,
              id: imgSrc,
            }}
            className="object-cover object-center"
            width={1265}
            sizes="(max-width: 32em) 100vw, 33vw"
          />
          <div className="flex flex-col">
            <div className="mb-base">
              <Heading heading="Our Story" />
            </div>
            <div className="flex flex-col">
              <Text size="text-base">
                Our story began when a natural beauty enthusiast Jolanta, now
                the product manager at Drop By Drop, convinced her family to
                start an organic cosmetics business. The shop was a curated
                space for natural beauty products from around the world.
                <br />
                <br />
                But as the classic story goes – Jolanta and her family have
                noticed that some products are just not good enough. Consumers
                kept asking for even more precisely selected ingredients, easier
                beauty routines and simpler approach to their skincare. This is
                how the idea to create our own products began.
              </Text>
              <div className="mt-xs">
                <Link to="/about-us" variant="underline">
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Section>
    </>
  );
};
