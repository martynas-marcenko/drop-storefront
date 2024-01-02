import {json} from '@remix-run/node'; // or cloudflare/deno
import {Link, useLoaderData} from '@remix-run/react';
import * as postA from './posts/ultimate-guide-choosing-face-oil-dry-skin.mdx';

interface MetaData {
  title?: string;
  name?: string;
  content?: string;
}

interface Post {
  slug: string;
  title: string;
  description: string;
}

interface PostModule {
  filename: string;
  attributes: {
    meta: MetaData[];
  };
}

function postFromModule(mod: PostModule) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([postFromModule(postA)]);
}

export default function Index() {
  const posts: Post[] = useLoaderData<Post[]>();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
