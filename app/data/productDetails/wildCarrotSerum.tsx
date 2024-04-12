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
    ingredients.extracts.carrot['en-US'],
    ingredients.oils.grapeOil['en-US'],
    ingredients.extracts.amaranth['en-US'],
    ingredients.oils.avocado['en-US'],
    ingredients.extracts.primrose['en-US'],
    ingredients.extracts.wheat['en-US'],
  ],
  ingredients: [
    ingredients.oils.almondOil['en-US'],
    ingredients.oils.grapeOil['en-US'],
    ingredients.oils.avocado['en-US'],
    ingredients.extracts.wheat['en-US'],
    ingredients.extracts.amaranth['en-US'],
    ingredients.oils.jojobaOil['en-US'],
    ingredients.extracts.carrot['en-US'],
    ingredients.extracts.primrose['en-US'],
    ingredients.extracts.rosemary['en-US'],
    ingredients.other.parfum['en-US'],
  ],
  allergens: [
    ingredients.allergens.limonene['en-US'],
    ingredients.allergens.geraniol['en-US'],
    ingredients.allergens.linalool['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'A shield from all the bad stuff.',
    body: "Sun, bacteria, pollution – the outside world can damage your skin. Enriched with antioxidants Carrot serum keeps your skin's microbiome strong.",
  },
  {
    title: 'Gain your power back!',
    body: 'Loaded with beta-carotenoids Wild Carrot Serum gives your skin the elasticity and smoothness it deserves.',
  },
  {
    title: 'A yummy scent.',
    body: 'A pleasant texture meets delicious balsamic and fruity scent to awaken all the senses.',
  },
];

const whyDropList: WhyDrop[] = [
  whyDrop.organicIngredients['en-US'],
  whyDrop.specificConcern['en-US'],
  whyDrop.highConcentrations['en-US'],
  whyDrop.scents['en-US'],
];

const faqlist: Faq[] = [
  faq[4]['en-US'],
  faq[5]['en-US'],
  faq[6]['en-US'],
  faq[9]['en-US'],
  faq[11]['en-US'],
];

export const wildCarrotSerum: ProductDetails = {
  id: 'gid://shopify/Product/6544243622026',
  subtitle: 'For youthful glow',
  introHeading:
    'Our most sensual serum of youthful glow and silky touch – for true romantics.',
  description: {
    body: 'Ultra-protective serum to keep skin bouncy, glowy, and ready for almost anything.',
  },
  featuredTestimonial: {
    customerName: 'Joana',
    text: 'I can’t go without the Trio. Makeup without feeling like you are wearing makeup, who doesn’t love that? I get so many compliments.',
  },
  ingredients: productIngredients,
  features: features,
  howTo: {
    body: 'Every morning and evening, take a few drops of the serum and apply on a moist face and neck. We recommend to use a hydrolate of your choice to moist the skin first. Same recommendation stands for all skin types.',
  },
  skinTypes:
    'It is perfect for all skin types, especially, for a dry, matured, tired, flaky and sensitive skin.',
  whyDrop: whyDropList,
  faq: faqlist,
};
