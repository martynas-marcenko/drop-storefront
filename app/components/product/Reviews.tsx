import type {ProductGid, ReviewItem} from '~/lib/product-types';
import {Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';
import {Drawer, useDrawer, Button, Grid, Link} from '~/components';
import {Star, Verified} from '~/components/icons';
import {formatDate} from '~/lib/utils';
import cn from 'clsx';
import getProductName from '~/lib/get-product-name';
import {Section} from '~/components/ui';

export function ReviewsDialog({
  isOpen,
  onClose,
  data,
  isLanding,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: {node: ReviewItem}[];
  isLanding: boolean;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} heading="Reviews" openFrom="right">
      {data?.map((item) => {
        const review = item.node;
        const isImage = review?.image?.reference?.image?.url ? true : false;

        return (
          <Review
            review={review}
            isImage={isImage}
            isDialog={true}
            isLanding={isLanding}
          />
        );
      })}
    </Drawer>
  );
}

interface ReviewsProps {
  data: {node: ReviewItem}[];
  isLanding: boolean;
}

export const Reviews = ({data, isLanding}: ReviewsProps) => {
  const {
    isOpen: isDialogOpen,
    openDrawer: openDialog,
    closeDrawer: closeDialog,
  } = useDrawer();
  const filteredReviews = data?.filter((item) => {
    return (item.node.isFeatured.value = true);
  });
  return (
    <>
      <Grid gap="blog" items={2}>
        {filteredReviews?.map((item) => {
          const review = item.node;
          const isImage = review?.image?.reference?.image?.url ? true : false;
          return (
            <Review
              review={review}
              isImage={isImage}
              isDialog={false}
              isLanding={isLanding}
            />
          );
        })}
      </Grid>
      <div className="mt-sm w-full flex justify-center">
        <Button onClick={openDialog}>More Reviews</Button>
      </div>
      <ReviewsDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        data={data}
        isLanding={isLanding}
      />
    </>
  );
};

export const ReviewsSwimlane = ({data, isLanding}: ReviewsProps) => {
  const {
    isOpen: isDialogOpen,
    openDrawer: openDialog,
    closeDrawer: closeDialog,
  } = useDrawer();
  const filteredReviews = data?.filter((item) => {
    return (item.node.isFeatured.value = true);
  });
  return (
    <>
      <Section heading="Shop Reviews" padding="y">
        <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
          {filteredReviews?.map((item) => {
            const review = item.node;
            const isImage = review?.image?.reference?.image?.url ? true : false;
            return (
              <div className="w-96 h-full">
                <Review
                  review={review}
                  isImage={isImage}
                  isDialog={false}
                  isLanding={isLanding}
                />
              </div>
            );
          })}
        </div>
      </Section>

      <div className="w-full flex justify-center">
        <Button onClick={openDialog}>More Reviews</Button>
      </div>
      <ReviewsDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        data={data}
        isLanding={isLanding}
      />
    </>
  );
};

interface ReviewProps {
  review: ReviewItem;
  isDialog: boolean;
  isImage: boolean;
  isLanding: boolean;
}

const Review = ({review, isImage, isDialog, isLanding}: ReviewProps) => {
  const wrapperClassName = cn(
    'flex flex-col space-y-sm p-sm',
    !isDialog && 'drop-shadow-xl border rounded-2xl bg-white',
    isDialog && 'border-b',
    isLanding && !isDialog && 'h-full',
  );
  return (
    <div key={review.id} className={wrapperClassName}>
      <div className="flex flex-col h-full min-h-48 justify-between">
        <div>
          <div className="flex w-full items-center mb-xs">
            <div className="grid gap-0 grid-cols-5 justify-self-start">
              {Array.from({length: 5}, (v, i) => (
                <Star
                  width="12px"
                  height="12px"
                  key={`star_${i + 1}`}
                  filled={review.rating.value >= i}
                />
              ))}
            </div>
            <span className="mx-1">•</span>
            <Text size="text-sm" className="font-medium" color="text-gray-700">
              {formatDate(review.date.value)}
            </Text>
          </div>
          <div className="mb-xs">
            {isLanding && (
              <Link
                className="underline underline-offset-2 decoration-gray-700 hover:underline-offset-4"
                to={`/products/${getProductName(
                  review?.product?.value as ProductGid,
                  'urlHandle',
                )}`}
              >
                <Text>
                  {getProductName(
                    review?.product?.value as ProductGid,
                    'title',
                  )}{' '}
                  {getProductName(review?.product?.value as ProductGid, 'type')}
                </Text>
              </Link>
            )}
          </div>
          <div className={isImage ? 'grid grid-cols-3' : 'grid grid-cols-2'}>
            <div className="col-span-2">
              <Text size="text-lg">{review.text.value}</Text>
            </div>
            {isImage && (
              <Image
                alt="Review image"
                data={{
                  url: review.image.reference.image.url,
                  id: review.image.reference.image.id,
                  width: 400,
                  height: 400,
                }}
                sizes="(max-width: 32em) 100vw, 33vw"
                aspectRatio="1/1"
              />
            )}
          </div>
        </div>
        <div className="mt-xs">
          <Text>{review.name.value}</Text>
          <div className="flex items-center">
            <div className="h-5 w-5">
              <Verified className="fill-orange-600" />
            </div>
            <Text size="text-sm" className="pl-1 font-medium">
              Verified purchase
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
