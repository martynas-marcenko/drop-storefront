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
    ingredients.essential.cistus['en-US'],
    ingredients.essential.frankincense['en-US'],
    ingredients.essential.damaskRose['en-US'],
    ingredients.oils.avocado['en-US'],
    ingredients.extracts.primrose['en-US'],
    ingredients.extracts.rosehip['en-US'],
  ],
  ingredients: [
    ingredients.oils.jojobaOil['en-US'],
    ingredients.extracts.rosehip['en-US'],
    ingredients.oils.avocado['en-US'],
    ingredients.oils.grapeOil['en-US'],
    ingredients.extracts.amaranth['en-US'],
    ingredients.extracts.primrose['en-US'],
    ingredients.extracts.rosemary['en-US'],
    ingredients.essential.frankincense['en-US'],
    ingredients.essential.cistus['en-US'],
    ingredients.essential.damaskRose['en-US'],
    ingredients.other.parfum['en-US'],
  ],
  allergens: [
    ingredients.allergens.limonene['en-US'],
    ingredients.allergens.geraniol['en-US'],
    ingredients.allergens.citronellol['en-US'],
    ingredients.allergens.linalool['en-US'],
    ingredients.allergens.benzylBenzoate['en-US'],
    ingredients.allergens.citral['en-US'],
    ingredients.allergens.farnesol['en-US'],
    ingredients.allergens.benzylSalicylate['en-US'],
    ingredients.allergens.eugenol['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'Better together.',
    body: 'An effective duo - Cistus and Frankincense essential oils - amplifies each others powers to reduce redness, cool down the skin and leave it glowing all day long.',
  },
  {
    title: 'Soooo smooth.',
    body: 'This antioxidant-infused serum evens skin tone and gives the refresh it needs - leaving behind smooth, glowy skin.',
  },
  {
    title: 'Reborn again.',
    body: 'Backed by Rose Essential Oil, this serum helps to escape tiredness, dullness and stress.',
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

export const rockRoseSerum: ProductDetails = {
  id: 'gid://shopify/Product/6635015962762',
  subtitle: 'For youthful glow',
  introHeading:
    'Do not be mistaken by soft pedals of this rose, it has some rocky spikes, but they&apos;re here to make you glow!',
  description: {
    body: 'Serum dedicated to visibly reduce redness and make your skin vibrant all day long.',
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
    'It is perfect for a sensitive, irritated, problematic and matured skin.',
  whyDrop: whyDropList,
  faq: faqlist,
};
