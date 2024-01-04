import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import {PageHeader, Section} from '~/components';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import {getBlog} from '~/data/blog/blog.server';
import styles from '../styles/custom-font.css';
import type {Article} from '~/data/blog/blog.server';
import ChoosingFaceOilDrySkin from '~/data/blog/choosing-face-oil-dry-skin.mdx';

export const headers = routeHeaders;

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

type BlogPostComponents = {
  [key: string]: React.ComponentType<any>;
};

const blogPostComponents: BlogPostComponents = {
  'choosing-face-oil-dry-skin': ChoosingFaceOilDrySkin,
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
  const {title, image, author} = article;
  const BlogPostComponent = getBlogPostComponentByHandle(article.handle);

  return (
    <>
      <PageHeader heading={title} variant="blogPost">
        <span>
          {formattedDate} &middot; {author?.name}
        </span>
      </PageHeader>
      <Section as="article" padding="x">
        {image && (
          <Image
            data={image}
            className="w-full mx-auto mt-8 md:mt-16 max-w-7xl"
            sizes="90vw"
            loading="eager"
          />
        )}
        <BlogPostComponent />
      </Section>
    </>
  );
}
