type Blog = {
  articles: Article[];
  title: string;
  description?: string;
};

export type Article = {
  publishedAt: Date;
  author: {
    name: string;
    url?: string;
    image?: {
      altText: string;
      url: string;
      id: string;
      width: number;
      height: number;
    };
  };
  title?: string;
  handle: string;
  contentHtml: any;
  id: string;
  introText?: string;
  mobileImage?: {
    altText: string;
    url: string;
    id: string;
    width: number;
    height: number;
  };
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
        publishedAt: new Date('2024-02-12T00:00:00Z'),
        handle: 'using-face-oils-dry-skin',
        title: 'The Complete Guide to Using Face Oils for Dry Skin',
        contentHtml: 'placeholder',
        id: '1',
        introText: `In this guide, we're going to delve deep into the world of face oils, specifically tailored for those battling with dry skin.\n\nOur first step will involve a thorough understanding of dry skin—its causes, characteristics, and how it behaves.\n\nNext up, we'll explore why face oils are a game-changer for dry skin, unveiling their unique benefits and how they can transform your skin's health.\n\nThen, I'll show you how to pick the best face oil that'll make your skin go \"ahh\" and not \"argh\".\n\nAnd finally, we'll cover how to incorporate face oils into your skincare routine, maximizing their benefits for radiant, hydrated skin.\n\nExcited to transform your skincare routine? Let's dive right in..`,
        author: {
          name: 'Jolanta Castiglioni',
          image: {
            altText: 'Author Jolanta Castiglioni',
            url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/jolanta.jpg?v=1629910000',
            id: '1',
            width: 250,
            height: 250,
          },
        },
        mobileImage: {
          altText: 'Using face oil for dry skin',
          url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/mobile.jpg?v=1706699762',
          id: '1',
          width: 936,
          height: 1404,
        },
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
