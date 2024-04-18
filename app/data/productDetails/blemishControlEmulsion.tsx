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
    ingredients.extracts.schisandra['en-US'],
    ingredients.other.amla['en-US'],
    ingredients.essential.sandalwood['en-US'],
    ingredients.essential.teaTree['en-US'],
  ],
  ingredients: [
    ingredients.other.vetiverWater['en-US'],
    ingredients.oils.jojobaOil['en-US'],
    ingredients.other.amla['en-US'],
    ingredients.other.xanthanGum['en-US'],
    ingredients.essential.sandalwood['en-US'],
    ingredients.essential.teaTree['en-US'],
    ingredients.extracts.schisandra['en-US'],
    ingredients.other.parfum['en-US'],
  ],
  allergens: [
    ingredients.allergens.limonene['en-US'],
    ingredients.allergens.isoeugenol['en-US'],
    ingredients.allergens.linalool['en-US'],
    ingredients.allergens.farnesol['en-US'],
    ingredients.allergens.citral['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'Source of strength and protection.',
    body: 'Amla boosts skin with Vitamin C and a juicy pop of antioxidants to visibly restore and help your skin to take on everyday impurities.',
  },
  {
    title: 'Stay calm and wonder.',
    body: 'Schisandra extract soothes and calms stressed and irritated skin for a new tension-free life!',
  },
  {
    title: 'Powered by plants.',
    body: 'Vetiverian water and Sandal Essential Oils cool and freshen up the skin, keep bacteria in balance and boost the mood – giving you that all-over glow.',
  },
];

const whyDropList: WhyDrop[] = [
  whyDrop.organicIngredients['en-US'],
  whyDrop.specificConcern['en-US'],
  whyDrop.highConcentrations['en-US'],
  whyDrop.scents['en-US'],
];

const faqlist: Faq[] = [faq[11]['en-US']];

export const blemishControlEmulsion: ProductDetails = {
  id: 'gid://shopify/Product/6875942289546',
  subtitle: 'For youthful glow',
  introHeading:
    'Meet the Amla and Schisandra duo created for the ones who like to be in control of their beauty.',
  description: {
    body: 'This emulsion soothes inflammation and minimizes the appearance of breakouts to deliver smooth, luminous, clearer-looking skin.',
  },
  featuredTestimonial: {
    customerName: 'Serene',
    text: "I've never had clearer skin. At 36, I was still dealing with small hormonal breakouts on my chin and forehead, but not anymore.",
  },
  ingredients: productIngredients,
  features: features,
  howTo: {
    body: 'For daily use. Every morning and evening, take a few drops of the emulsion and apply directly to face, neck or other problematic areas while spreading gently.',
  },
  skinTypes:
    'It is perfect for blemished skin, clogged pores as well as oily and combination skin types.',
  whyDrop: whyDropList,
  faq: faqlist,
};
