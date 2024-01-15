import clsx from 'clsx';
import {MediaFile} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';

import type {GetAboutContentQuery} from 'storefrontapi.generated';
import {Button} from '~/components';
import {Text, Heading} from '~/components/ui';

type HeroProps = {
  data: GetAboutContentQuery;
  loading?: HTMLImageElement['loading'];
};

export function Story({data: {metaobject}, loading}: HeroProps) {
  const data = {
    id: metaobject?.id,
    handle: metaobject?.handle,
    title: metaobject?.title?.value,
    body: metaobject?.body?.value,
    cta: metaobject?.cta?.value,
    imageMobile: metaobject?.imageMobile?.reference,
    imageDesktop: metaobject?.imageDesktop?.reference,
    loading: loading,
  };
  return (
    <section
      className={clsx(
        'relative justify-start flex flex-col w-full aspect-[2/3]',
      )}
    >
      <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
        <div className="md:hidden">
          <SpreadMedia
            sizes="100vw"
            data={data.imageMobile as Media}
            loading={data.loading}
          />
        </div>
        <div className="hidden md:block">
          <SpreadMedia
            sizes="100vw"
            data={data.imageDesktop as Media}
            loading={loading}
          />
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-between gap-4 mt-nav px-6 py-8 sm:px-8 md:px-12 from-primary/60 text-contrast">
        {data.title && <Heading className="max-w-md" heading={data.title} />}

        {data?.body && (
          <Text format width="narrow" as="p" size="text-xl">
            {data.body}
          </Text>
        )}
        {data?.cta && (
          <Button variant="primary" to={`/${data.handle}`}>
            {data.cta}
          </Button>
        )}
      </div>
    </section>
  );
}

type SpreadMediaProps = {
  data: Media | MediaImage | MediaVideo;
  loading?: HTMLImageElement['loading'];
  sizes: string;
};

function SpreadMedia({data, loading, sizes}: SpreadMediaProps) {
  return (
    <MediaFile
      data={data}
      className="block object-cover w-full h-full"
      mediaOptions={{
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          previewImageOptions: {src: data.previewImage?.url ?? ''},
        },
        image: {
          loading,
          crop: 'center',
          sizes,
          alt: data.alt || '',
        },
      }}
    />
  );
}
