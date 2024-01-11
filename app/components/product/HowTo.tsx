import {FC} from 'react';
import {Text} from '~/components/ui';
import {Button} from '~/components';
import {ProductGid, HowTo as HowToProps} from '~/lib/product-types';
import {Drawer, useDrawer} from '~/components';

interface Props {
  data?: HowToProps;
  productGid: ProductGid;
}

export const HowTo: FC<Props> = ({data, productGid}) => {
  const {
    isOpen: isDialogOpen,
    openDrawer: openDialog,
    closeDrawer: closeDialog,
  } = useDrawer();
  return (
    <>
      {productGid === 'gid://shopify/Product/5116743876746' ||
      productGid === 'gid://shopify/Product/6543863578762' ? (
        <>
          <div className="grid gap-sm md:grid-cols-3">{data?.body}</div>
          <div className="flex w-full justify-center">
            <div>
              <Text as="span" className="inline-block">
                For even deeper cleansing experience, try a{' '}
                <Button
                  onClick={openDialog}
                  className="inline-block text-lg font-medium lowercase leading-normal"
                  variant="inline"
                >
                  double cleansing.
                </Button>
              </Text>
            </div>
          </div>
        </>
      ) : (
        <>
          <Text>{data?.body}</Text>
        </>
      )}
      <Drawer
        open={isDialogOpen}
        onClose={closeDialog}
        heading="Cart"
        openFrom="right"
      >
        <div className="grid">test</div>
      </Drawer>
    </>
  );
};
