import {Text} from '~/components/ui';
import {Star} from '~/components/icons';
import type {ReviewItem} from '~/lib/product-types';
import {useDrawer} from '~/components';
import {useRating} from '~/hooks/useRating';
import {ReviewsDialog} from './product/Reviews';

export const ReviewsBadge = ({data}: {data: {node: ReviewItem}[]}) => {
  const rating = useRating({data});

  const {
    isOpen: isDialogOpen,
    openDrawer: openDialog,
    closeDrawer: closeDialog,
  } = useDrawer();

  return (
    <>
      <div className="flex items-center">
        <Star filled width="16px" height="16px" />
        <div className="ml-1 flex">
          <Text size="text-base" className="font-medium">
            {rating}{' '}
            <span className="cursor-pointer text-gray" onClick={openDialog}>
              · show reviews
            </span>
          </Text>
        </div>
      </div>
      <ReviewsDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        data={data}
        isLanding={false}
      />
    </>
  );
};
