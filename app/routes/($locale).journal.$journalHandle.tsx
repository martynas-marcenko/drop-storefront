import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import {PageHeader} from '~/components';
import {Text} from '~/components/ui';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import {getBlog} from '~/data/blog/blog.server';
import type {Article} from '~/data/blog/blog.server';
import styles from '../styles/custom-font.css';
import {UsingUnrefinedOilDrySkin} from '~/data/blog/UsingFaceOilDrySkin';
import {NaturalMoisturizingFactor} from '~/data/blog/NaturalMoisturizingFactor';
import Markdown from 'react-markdown';

export const headers = routeHeaders;

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

type BlogPostComponents = {
  [key: string]: React.ComponentType<any>;
};

export const blogPostComponents: BlogPostComponents = {
  'using-face-oils-dry-skin': UsingUnrefinedOilDrySkin,
  //'nmf-ageless-hydration': NaturalMoisturizingFactor,
  // Add other blog posts here
};

function getBlogPostComponentByHandle(handle: string) {
  return blogPostComponents[handle] || null;
}

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;

  invariant(params.journalHandle, 'Missing journal handle');

  const blog = await getBlog();

  const article = blog.articles.find(
    (article) => article.handle === params.journalHandle,
  );

  if (!article) {
    throw new Response(null, {status: 404});
  }

  const formattedDate = new Intl.DateTimeFormat(`${language}-${country}`, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article?.publishedAt!));

  const seoArticle = {
    ...article,
    publishedAt: formattedDate,
  };

  const seo = seoPayload.article({article: seoArticle, url: request.url});

  return json({article, formattedDate, seo});
}

export default function Article() {
  const {article, formattedDate} = useLoaderData<typeof loader>();
  const {title, image, mobileImage, introText, author} = article;
  const BlogPostComponent = getBlogPostComponentByHandle(article.handle);

  return (
    <>
      <PageHeader className="relative" heading={title} variant="blogPost">
        <div className="flex flex-col w-full items-center">
          <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
            <Image data={mobileImage} loading="eager" />
          </div>
          <time dateTime={article?.publishedAt}>
            Last updated {formattedDate}
          </time>
          {introText && (
            <div className="text-left mb-sm [&>p]:mb-sm max-w-prose	border-t border-gray-900/10 mt-sm pt-sm">
              <Text size="text-lg" className="font-serif">
                <Markdown>{introText}</Markdown>
              </Text>
            </div>
          )}
          <div className="w-full max-w-prose flex justify-start">
            <div className="flex justify-start items-center gap-xxs">
              {image && (
                <div className="w-[32px] h-[32px]">
                  <Image
                    data={author?.image}
                    className="rounded-full"
                    loading="eager"
                  />
                </div>
              )}
              <address className="text-sm">
                Written by{' '}
                <a rel="author" href="/about">
                  {author?.name}
                </a>
              </address>
            </div>
          </div>
        </div>
      </PageHeader>
      <article>
        <BlogPostComponent />
      </article>
    </>
  );
}
