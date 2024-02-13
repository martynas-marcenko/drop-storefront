import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {getBlog} from '~/data/blog/blog.server';
import {useLoaderData} from '@remix-run/react';
import {seoPayload} from '~/lib/seo.server';
import {Grid, PageHeader, Link} from '~/components';
import {Section, Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';
import {getImageLoadingPriority, PAGINATION_SIZE} from '~/lib/const';
import type {Article} from '~/data/blog/blog.server';

type ArticleAmended = Omit<Article, 'publishedAt' | 'contentHtml'> & {
  publishedAt: string;
};

const BLOG_HANDLE = 'blog';

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
      <Section padding="none" width="narrow">
        <PageHeader heading={BLOG_HANDLE} />
      </Section>
      <Section width="narrow">
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
        <div className="flex justify-start items-center gap-xxs mb-1">
          {article.author?.image && (
            <div className="w-[20px] h-[20px]">
              <Image
                data={article.author?.image}
                className="rounded-full"
                loading="eager"
              />
            </div>
          )}
          <address className="text-sm not-italic">
            Written by{' '}
            <a rel="author" href="/about">
              {article.author.name}
            </a>
          </address>
          <span>·</span>
          <span className="block text-sm">{article.publishedAt}</span>
        </div>
        <div className="grid grid-cols-4 gap-xs">
          <div className="col-span-3">
            <div className="hidden md:block">
              <Text as="h2" size="text-xl" className="font-bold">
                {article.title}
              </Text>
            </div>
            <div className="block md:hidden">
              <Text as="h2" size="text-base" className="font-bold">
                {article.title}
              </Text>
            </div>
            <div className="mt-2 md:mt-xs">
              <Text as="p" className="line-clamp-1 md:line-clamp-2">
                {article.introText}
              </Text>
            </div>
          </div>
          {article.image && (
            <div className="basis-1/4 card-image aspect-[1/1]">
              <Image
                alt={article.image.altText || article.title}
                className="object-cover w-full"
                data={article.image}
                aspectRatio="1/1"
                loading={loading}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
