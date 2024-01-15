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
    ingredients.oils.cannabisSativaOil['en-US'],
    ingredients.oils.almondOil['en-US'],
    ingredients.extracts.marigold['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.essential.coriander['en-US'],
    ingredients.essential.ylang['en-US'],
  ],
  ingredients: [
    ingredients.oils.jojobaOil['en-US'],
    ingredients.oils.almondOil['en-US'],
    ingredients.oils.oliveOil['en-US'],
    ingredients.oils.cannabisSativaOil['en-US'],
    ingredients.extracts.raspberry['en-US'],
    ingredients.oils.coconutOil['en-US'],
    ingredients.other.vitaminE['en-US'],
    ingredients.extracts.marigold['en-US'],
    ingredients.other.parfum['en-US'],
  ],
  allergens: [
    ingredients.allergens.linalool['en-US'],
    ingredients.allergens.limonene['en-US'],
    ingredients.allergens.benzylBenzoate['en-US'],
    ingredients.allergens.geraniol['en-US'],
    ingredients.allergens.farnesol['en-US'],
    ingredients.allergens.benzylSalicylate['en-US'],
  ],
};

const features: ProductFeature[] = [
  {
    title: 'Breath in the calmness!',
    body: 'A powerful combo of Hemp Oil and Calendula Extract instantly soothes and calms sensitive skin.',
  },
  {
    title: 'The master of softness.',
    body: 'Removes make-up and dirt flawlessly and leaves skin feeling velvety soft.',
  },
  {
    title: 'Oh, and it smells good!',
    body: 'Coriander and Ylang Ylang Essential Oils - known as tonners and antioxidants – also smell warm and pleasing – without irritating the skin.',
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

export const hempCleanser: ProductDetails = {
  id: 'gid://shopify/Product/6543863578762',
  subtitle: 'For soothing & calming',
  introHeading:
    'Drop of calmness for the stressed ones – sooth and calm your skin with our most unwinding cleanser.',
  description: {
    body: 'A pro at removing oil, dirt, and calming your skin. Our Hemp oil cleanser gives your face a refreshing boost it needs.',
  },
  ingredients: productIngredients,
  features: features,
  howTo: {
    body: '1. Apply to a dry face and neck.\n\n2. Massage into skin in circular motion, then wet finger and continue massaging until oil gets creamy texture.\n\n3. Rinse thoroughly.',
  },
  skinTypes: 'It is perfect for all skin types.',
  whyDrop: whyDropList,
  faq: faqlist,
};
