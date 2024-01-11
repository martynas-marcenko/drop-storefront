import {Text} from '~/components/ui';
import {Section, Grid} from '~/components/';
import {Image} from '@shopify/hydrogen';

const imgSrcJolanta =
  'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/jolanta.jpg?v=1679490413';
const imgSrcBloomInterior =
  'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/bloom_interior.jpg?v=1679490412';

const imgSrcBloomStore =
  'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/bloom_store.jpg?v=1679490413';

export const Origins = () => {
  return (
    <>
      <Section width="narrow" className="">
        <Grid items={2}>
          <Text size="text-4xl">The Origins</Text>
          <Text size="text-2xl">
            Our story began when a natural beauty enthusiast Jolanta, now the
            product manager at Drop By Drop, convinced her family to start an
            organic cosmetics business. A family-owned shop soon opened at the
            very heart of Copenhagen. The shop was a curated space for crafted
            natural beauty products from around the world.
          </Text>
        </Grid>
      </Section>
      <Section>
        <div className="grid gap-sm w-full md:grid-cols-[1fr_2fr]">
          <Image
            alt="Bloom and bloom store"
            data={{
              url: imgSrcBloomStore,
              id: imgSrcBloomStore,
              width: 1250,
              height: 400,
            }}
            width={1250}
            height={400}
            className="object-cover object-center w-full h-full"
            sizes="(max-width: 32em) 100vw, 33vw"
          />
          <Image
            alt="Bloom and bloom store interior"
            data={{
              url: imgSrcBloomInterior,
              id: imgSrcBloomInterior,
              width: 1265,
              height: 944,
            }}
            className="object-cover object-center w-full h-full"
            height={944}
            width={1265}
            sizes="(max-width: 32em) 100vw, 33vw"
          />
          <Text className="self-end col-span-2">
            Former Bloom & Bloom store
          </Text>
        </div>
      </Section>
      <Section width="narrow">
        <Grid items={2}>
          <div className="grid gap-y-sm content-start">
            <Text size="text-xl" className="font-medium">
              Our consumers inspired us to keep looking for even more precisely
              selected ingredients, easier beauty routines and simpler
              approaches to skincare. This is how the idea to create our own
              products, instead of a shop, began.
            </Text>
            <Text size="text-xl" className="font-medium">
              Today, Drop by Drop brand represents everything we’ve learnt
              during the years in the organic skincare business, spiced up with
              our own take on it. We celebrate the art of craft, inclusivity and
              simplicity in everything we do.
            </Text>
          </div>
          <div className="grid gap-xs">
            <Image
              alt="Jolanta, founder of Drop by Drop"
              data={{
                url: imgSrcJolanta,
                id: imgSrcJolanta,
              }}
              className="object-cover object-center w-full h-full"
              height={944}
              width={1265}
              sizes="(max-width: 32em) 100vw, 33vw"
            />
            <Text>Jolanta, founder of Drop by Drop</Text>
          </div>
        </Grid>
      </Section>
    </>
  );
};
