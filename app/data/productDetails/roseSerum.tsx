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
    ingredients.essential.damaskRose['en-US'],
    ingredients.extracts.amaranth['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.oils.grapeOil['en-US'],
    ingredients.extracts.rosehip['en-US'],
    ingredients.oils.arganOil['en-US'],
  ],
  ingredients: [
    ingredients.oils.jojobaOil['en-US'],
    ingredients.oils.arganOil['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.oils.oliveOil['en-US'],
    ingredients.oils.grapeOil['en-US'],
    ingredients.extracts.amaranth['en-US'],
    ingredients.extracts.rosehip['en-US'],
    ingredients.extracts.rosemary['en-US'],
    ingredients.essential.damaskRose['en-US'],
    ingredients.other.parfum['en-US'],
  ],
  allergens: [
    ingredients.allergens.citronellol['en-US'],
    ingredients.allergens.geraniol['en-US'],
    ingredients.allergens.linalool['en-US'],
    ingredients.allergens.citral['en-US'],
    ingredients.allergens.benzylBenzoate['en-US'],
    ingredients.allergens.farnesol['en-US'],
    ingredients.allergens.benzylSalicylate['en-US'],
    ingredients.allergens.limonene['en-US'],
    ingredients.allergens.eugenol['en-US'],
    ingredients.allergens.isoeugenol['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'First love of your skin.',
    body: ' This antioxidant-infused serum nourishes and moisturizes your skin day and night.',
  },
  {
    title: 'Protected skin, happy skin.',
    body: 'A powerful combo of Raspberry and Rosehip extracts calms and boosts skin’s protective abilities so it handles stress and impurities like a pro.',
  },
  {
    title: 'Unlock brighter skin!',
    body: 'Enriched with skin-revitalizing Rose Essential Oil, this serum wakes up dull, flaky, and dry skin - so you’re free to glow.',
  },
  {
    title: 'Touches like silk, smells like heaven.',
    body: 'Embrace the new level of softness – this serum leaves your skin irresistibly tender and pleases your nose with incredible rose scent.',
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

export const roseSerum: ProductDetails = {
  id: 'gid://shopify/Product/6543871737994',
  subtitle: 'For youthful glow',
  introHeading:
    'Our most sensual serum of youthful glow and silky touch – for true romantics.',
  description: {
    body: 'Moistures. Nourishes. Protects. This serum leaves skin feeling silky soft – for a maximum glow you&apos;ll love.',
  },
  ingredients: productIngredients,
  features: features,
  howTo: {
    body: 'Every morning and evening, take a few drops of the serum and apply on a moist face and neck. We recommend to use a hydrolate of your choice to moist the skin first. Same recommendation stands for all skin types.',
  },
  skinTypes:
    'It is perfect for all skin types, especially, for a dry, flaky, sensitive and tired skin.',
  whyDrop: whyDropList,
  faq: faqlist,
};
