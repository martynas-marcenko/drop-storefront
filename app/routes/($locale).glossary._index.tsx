import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {seoPayload} from '~/lib/seo.server';
import {Grid, PageHeader, Link} from '~/components';
import {Section, Text} from '~/components/ui';

interface GlossaryItem {
  id: string;
  handle: string;
  title: {value: string};
}

interface GlossaryData {
  glossary: {
    edges: Array<{
      node: GlossaryItem;
    }>;
  };
}

const GLOSSARY_HANDLE = 'Glossary';

export const loader = async ({
  request,
  context: {storefront},
}: LoaderFunctionArgs) => {
  const {language, country} = storefront.i18n;

  const {glossary} = await storefront.query<GlossaryData>(
    GLOSSARY_TITLES_QUERY,
    {
      variables: {
        language,
      },
    },
  );

  if (!glossary) {
    throw new Response('Not found', {status: 404});
  }

  const titles = glossary.edges.map(({node}) => ({
    id: node.id,
    handle: node.handle,
    title: node.title.value,
  }));

  const seo = seoPayload.glossary({
    title: 'Explore Definitions',
    description:
      'Explore our glossary for insights on face and body oils, aromatherapy, and organic cosmetics, enhancing your natural beauty with expert knowledge.',
    url: request.url,
  });
  return json({titles, seo});
};

export default function Glossary() {
  const {titles} = useLoaderData<typeof loader>();
  return (
    <>
      <Section width="narrow">
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
              </div>
            </li>
          </ol>
        </nav>
        <PageHeader padding="none" heading={GLOSSARY_HANDLE} />
      </Section>
      <Section width="narrow">
        <Grid as="ol" layout="blog">
          {titles.map(({title, handle, id}) => (
            <div key={id}>
              <Link to={handle}> {title}</Link>
            </div>
          ))}
        </Grid>
      </Section>
    </>
  );
}

export const GLOSSARY_TITLES_QUERY = `#graphql
  query getGlossaryContent($language: LanguageCode, $first: Int = 50) @inContext(language: $language) {
    glossary: metaobjects(first: $first, type: "glossary") {
      edges {
        node {
          id
          type
          handle
          title: field(key: "title") {
            value
          }
          text: field(key: "text") {
            value
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
