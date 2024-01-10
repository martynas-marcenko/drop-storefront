export type ProductGid =
  | 'gid://shopify/Product/5116743876746'
  | 'gid://shopify/Product/6543863578762'
  | 'gid://shopify/Product/6543871737994'
  | 'gid://shopify/Product/6544243622026'
  | 'gid://shopify/Product/6875942289546'
  | 'gid://shopify/Product/6635015962762';

export type ProductDetails = {
  id: string;
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
  shortDescription?: string;
  body?: string;
};

export type Ingredient = {
  title?: string;
  scientificName?: string;
  imgSrc?: string;
  description?: string;
};

export type ProductIngredients = {
  mainIngredients: Ingredient[];
  ingredients: Ingredient[];
  allergens: Ingredient[];
};

export type ProductFeature = {
  title: string;
  body: string;
};

export type HowTo = {
  body?: string;
};

export type WhyDrop = {
  text: string;
  imgSrc: string;
};

export type Faq = {
  question: string;
  answer: string;
};
