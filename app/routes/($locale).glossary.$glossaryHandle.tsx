import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';
import {PageHeader} from '~/components';
import {Section} from '~/components/ui';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import type {Article} from '~/data/blog/blog.server';
import styles from '../styles/custom-font.css';
import mstyles from '../styles/markdown-styles.css';
import Markdown from 'react-markdown';

export const headers = routeHeaders;

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {rel: 'stylesheet', href: mstyles},
  ];
};

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {language} = context.storefront.i18n;
  invariant(params.glossaryHandle, 'Missing glossary handle');

  const {glossary} = await context.storefront.query(GLOSSARY_QUERY, {
    variables: {
      handle: params.glossaryHandle,
      language,
    },
  });

  if (!glossary) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.glossary({
    title: glossary?.title?.value ?? '',
    description: glossary?.text?.value ?? '',
    url: request.url,
  });

  return json({seo, glossary});
}

export default function Article() {
  const {glossary} = useLoaderData<typeof loader>();
  const {title, text} = glossary;
  return (
    <>
      <Section
        display="flex"
        width="full"
        className="flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center w-full max-w-prose">
          <PageHeader
            className="justify-start pb-6 md:pb-8 lg:pb-12"
            heading={title?.value as string}
            variant="blogPost"
            padding="none"
          />
          <article className="markdown-body">
            <Markdown>{text?.value}</Markdown>
          </article>
        </div>
      </Section>
    </>
  );
}

export const GLOSSARY_QUERY = `#graphql
  query getGlossaryContent(
    $language: LanguageCode
    $handle: String!
    ) @inContext(language: $language) {
    glossary: metaobject(handle: {type: "glossary", handle: $handle}) {
      type
      id
      title: field(key: "title") {
        key
        value
      }
      text: field(key: "text") {
        key
        value
      }
    }
  }
`;
