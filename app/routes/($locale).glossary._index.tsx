import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {seoPayload} from '~/lib/seo.server';
import {Grid, PageHeader, Link} from '~/components';
import {Section} from '~/components/ui';

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

const GLOSSARY_HANDLE = 'glossary';

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
    title: 'Glossary',
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
      <Section padding="none" width="narrow">
        <PageHeader heading={GLOSSARY_HANDLE} />
      </Section>
      <Section width="narrow">
        <Grid as="ol" layout="blog">
          {titles.map(({title, handle, id}) => (
            <div key={id}>
              <Link to={`${handle}`}> {title}</Link>
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
