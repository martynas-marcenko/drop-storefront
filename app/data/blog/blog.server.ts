type Blog = {
  articles: Article[];
  title: string;
  description?: string;
};

export type Article = {
  publishedAt: Date;
  author: {name: string; url?: string};
  title: string;
  handle: string;
  contentHtml: any;
  id: string;
  image?: {
    altText: string;
    url: string;
    id: string;
    width: number;
    height: number;
  };
};

export async function getBlog(): Promise<Blog> {
  const blog: Blog = {
    title: 'Drop By Drop Journal',
    articles: [
      {
        publishedAt: new Date('2023-01-11T00:00:00Z'),
        author: {name: 'Jolanta Castiglioni'},
        title:
          'The Ultimate Guide to Choosing Face Oil for Dry Skin: What You Need to Know',
        handle: 'choosing-face-oil-dry-skin',
        contentHtml: 'placeholder',
        id: '1',
        image: {
          altText: 'Bloom Store',
          url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/bloom_store.jpg?v=1679490413',
          id: '1',
          width: 1000,
          height: 1000,
        },
      },
    ],
  };

  return blog;
}
