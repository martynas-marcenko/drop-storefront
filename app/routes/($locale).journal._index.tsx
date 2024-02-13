import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {getBlog} from '~/data/blog/blog.server';
import {useLoaderData} from '@remix-run/react';
import {seoPayload} from '~/lib/seo.server';
import {Grid, PageHeader, Section, Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {getImageLoadingPriority, PAGINATION_SIZE} from '~/lib/const';
import type {Article} from '~/data/blog/blog.server';

type ArticleAmended = Omit<Article, 'publishedAt' | 'contentHtml'> & {
  publishedAt: string;
};

const BLOG_HANDLE = 'Journal';

export const loader = async ({
  request,
  context: {storefront},
}: LoaderFunctionArgs) => {
  const {language, country} = storefront.i18n;
  const blog = await getBlog();

  if (!blog?.articles) {
    throw new Response('Not found', {status: 404});
  }

  const articles = blog.articles.map((article) => {
    const {publishedAt} = article;
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat(`${language}-${country}`, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(publishedAt)),
    };
  });
  const seo = seoPayload.blog({blog, url: request.url});
  return json({articles, seo});
};

export default function Blog() {
  const {articles} = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader heading={BLOG_HANDLE} />
      <Section>
        <Grid as="ol" layout="blog">
          {articles.map((article, i) => (
            <ArticleCard
              blogHandle={BLOG_HANDLE.toLowerCase()}
              article={article}
              key={article.id}
              loading={getImageLoadingPriority(i, 2)}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}

function ArticleCard({
  blogHandle,
  article,
  loading,
}: {
  blogHandle: string;
  article: ArticleAmended;
  loading?: HTMLImageElement['loading'];
}) {
  return (
    <li key={article.id}>
      <Link to={`/${blogHandle}/${article.handle}`}>
        {article.image && (
          <div className="card-image aspect-[3/2]">
            <Image
              alt={article.image.altText || article.title}
              className="object-cover w-full"
              data={article.image}
              aspectRatio="3/2"
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
        <h2 className="mt-4 font-medium">{article.title}</h2>
        <span className="block mt-1">{article.publishedAt}</span>
      </Link>
    </li>
  );
}
