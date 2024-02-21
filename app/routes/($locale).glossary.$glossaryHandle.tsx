import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';
import {PageHeader, Link} from '~/components';
import {Section, Text} from '~/components/ui';
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
          <nav
            className="flex w-full justify-start mb-xs md:mb-sm"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link className="inline-flex items-center" to="/">
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  <Text as="span" size="text-sm" className="font-medium">
                    Home
                  </Text>
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>

                  <Link to="/glossary">
                    <Text size="text-sm" className="font-medium">
                      Glossary
                    </Text>
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Text size="text-sm" className="font-medium">
                    {title?.value as string}
                  </Text>
                </div>
              </li>
            </ol>
          </nav>
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
