import {useState} from 'react';
import type {ProductIngredients, Ingredient} from '~/lib/product-types';
import {Text, Heading} from '~/components/ui';
import {Image} from '@shopify/hydrogen';
import {Drawer, useDrawer, Button} from '~/components';
import {InformationCircleIcon} from '@heroicons/react/24/outline';

function IngredientsDialog({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: Ingredient;
}) {
  const {imgSrc, title, scientificName, description} = data;

  return (
    <Drawer open={isOpen} onClose={onClose} heading={title} openFrom="right">
      <div className="grid">
        <div className="flex flex-col">
          <div className="px-6 sm:px-8 md:px-12 mb-sm">
            <div className="mb-xs">
              <Text>INCI: {scientificName}</Text>
            </div>
            {description && <Text>{description}</Text>}
          </div>
          <div className="flex-shrink-0">
            {data.imgSrc ? (
              <Image
                alt={title}
                data={{
                  url: imgSrc,
                  id: imgSrc,
                }}
                className="object-cover object-center w-full h-full"
                height={400}
                width={400}
                sizes="(max-width: 400px)"
              />
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
}

const Ingredient = ({data}: {data: Ingredient}) => {
  const {
    isOpen: isDialogOpen,
    openDrawer: openDialog,
    closeDrawer: closeDialog,
  } = useDrawer();
  const {imgSrc, title, scientificName} = data;
  return (
    <>
      <li className="py-3 sm:py-4 first:pt-0 last:pb-0">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {imgSrc ? (
              <Image
                alt="Bloom and bloom store interior"
                data={{
                  url: imgSrc,
                  id: imgSrc,
                }}
                className="object-cover object-center w-full h-full"
                height={32}
                width={32}
                sizes="(max-width: 32px)"
              />
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
          <div className="flex-1 flex-col min-w-0 ms-4">
            <Text as="div" size="text-base" className="font-medium">
              {title}
            </Text>
            <Text as="div" size="text-sm" className="text-gray-600">
              {scientificName}
            </Text>
          </div>
          <button
            type="submit"
            onClick={openDialog}
            className="relative flex items-center justify-center h-12 focus:ring-primary/5"
          >
            <Text size="text-sm" className="font-medium mr-1 text-gray-600">
              Details
            </Text>
            <InformationCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <IngredientsDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          data={data}
        />
      </li>
    </>
  );
};

export const Ingredients = ({data}: {data: ProductIngredients}) => {
  const [displayIngredients, setDisplayIngredients] = useState(
    data.mainIngredients,
  );

  const toggleIngredients = () => {
    setDisplayIngredients((current) =>
      current === data.mainIngredients
        ? data.ingredients
        : data.mainIngredients,
    );
  };
  const title =
    displayIngredients === data.mainIngredients
      ? 'Key Ingredients'
      : 'All Ingredients';
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="sm-max:mb-xs mb-md">
          <Heading heading={title} />
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {displayIngredients.map((ingredient) => (
            <Ingredient key={ingredient.title} data={ingredient} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-sm">
        <Button variant="secondary" onClick={toggleIngredients}>
          {' '}
          {displayIngredients === data.ingredients
            ? 'Show Key Ingredients'
            : 'Show All Ingredients'}
        </Button>
      </div>
    </>
  );
};
