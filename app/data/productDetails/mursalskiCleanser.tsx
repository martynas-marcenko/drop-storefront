import {ingredients} from '~/data/productDetails/ingredients';
import {whyDrop} from '~/data/productDetails/whyDrop';
import {faq} from '~/data/productDetails/faq';

import type {
  ProductIngredients,
  ProductDetails,
  ProductFeature,
  WhyDrop,
  Faq,
} from '~/lib/product-types';

const productIngredients: ProductIngredients = {
  mainIngredients: [
    ingredients.extracts.mursalskiTea['en-US'],
    ingredients.oils.oliveOil['en-US'],
    ingredients.oils.almondOil['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.essential.vetiver['en-US'],
    ingredients.essential.citrus['en-US'],
  ],
  ingredients: [
    ingredients.oils.jojobaOil['en-US'],
    ingredients.oils.oliveOil['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.oils.almondOil['en-US'],
    ingredients.oils.coconutOil['en-US'],
    ingredients.other.vitaminE['en-US'],
    ingredients.extracts.mursalskiTea['en-US'],
    ingredients.other.parfum['en-US'],
    ingredients.extracts.rosemary['en-US'],
  ],
  allergens: [
    ingredients.allergens.geraniol['en-US'],
    ingredients.allergens.farnesol['en-US'],
    ingredients.allergens.linalool['en-US'],
    ingredients.allergens.citral['en-US'],
    ingredients.allergens.benzylBenzoate['en-US'],
    ingredients.allergens.benzylAlcohol['en-US'],
    ingredients.allergens.isoeugenol['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'Clean slate, clear skin.',
    body: 'Set your pores free with this antioxidant-rich cleanser! It removes makeup-up, dirt and oil for clearer-looking skin.',
  },
  {
    title: 'Superhero of moisturizing.',
    body: 'effectively while moisturizing is Mursalski cleanser&apos;s secret superpower. This cleanser balances, nourishes, and keeps your moisture barrier strong.',
  },
  {
    title: 'Oh, and it smells good!',
    body: 'Mountain-grown Moursalski tea and raspberry extracts brings the skin to life while the citrus aroma adds the joy for the nose',
  },
];

const whyDropList: WhyDrop[] = [
  whyDrop.organicIngredients['en-US'],
  whyDrop.specificConcern['en-US'],
  whyDrop.highConcentrations['en-US'],
  whyDrop.scents['en-US'],
];

const faqlist: Faq[] = [
  faq[7]['en-US'],
  faq[1]['en-US'],
  faq[2]['en-US'],
  faq[3]['en-US'],
  faq[8]['en-US'],
  faq[10]['en-US'],
  faq[11]['en-US'],
];

export const mursalskiCleanser: ProductDetails = {
  id: 'gid://shopify/Product/5116743876746',
  subtitle: 'For youthful glow',
  introHeading:
    'Our most sensual serum of youthful glow and silky touch – for true romantics.',
  description: {
    body: 'Unclogs pores, visibly brightens skin, and boosts it with antioxidants. This 2 in 1 cleanser and moisturizer leaves your skin smooth, fresh and glowy.',
  },
  ingredients: productIngredients,
  features: features,
  howTo: {
    body: `
    01. Apply to a dry face and neck.\n\n02. Massage into skin in circular motion, then wet finger and continue massaging until oil gets creamy texture.\n\n03. Rinse thoroughly.
    `,
  },
  skinTypes: 'It is perfect for all skin types.',
  whyDrop: whyDropList,
  faq: faqlist,
};
