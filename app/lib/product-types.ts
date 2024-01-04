export type ProductGid =
  | 'gid://shopify/Product/5116743876746'
  | 'gid://shopify/Product/6543863578762'
  | 'gid://shopify/Product/6543871737994'
  | 'gid://shopify/Product/6544243622026'
  | 'gid://shopify/Product/6875942289546'
  | 'gid://shopify/Product/6635015962762';

export type ProductDetails = {
  id: ProductGid;
  description: Description;
  subtitle: string;
  introHeading: string;
  ingredients: ProductIngredients;
  features: ProductFeature[];
  howTo: HowTo;
  skinTypes: string;
  whyDrop: WhyDrop[];
  faq: Faq[];
};

export type Description = {
  shortDescription?: string | JSX.Element;
  body?: string | JSX.Element;
};

export type ProductIngredients = {
  mainIngredients: {
    title?: string;
    scientificName?: string;
    imgSrc?: string;
    description?: JSX.Element | string;
  }[];
  ingredients: {
    title?: string;
    scientificName?: string;
    imgSrc?: string;
    description?: JSX.Element | string;
  }[];
  allergens: {
    title?: string;
    scientificName?: string;
    imgSrc?: string;
    description?: JSX.Element | string;
  }[];
};

export type ProductFeature = {
  title: string;
  body?: string | JSX.Element;
};

export type HowTo = {
  body?: JSX.Element;
};

export type WhyDrop = {
  text: string | JSX.Element;
  imgSrc: string;
};

export type Faq = {
  question: string;
  answer: string | JSX.Element;
};
