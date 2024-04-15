import type {ReviewItem} from '~/lib/product-types';
import {Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';
import {Drawer, useDrawer, Button, Grid} from '~/components';
import {Star, Verified} from '~/components/icons';
import {formatDate} from '~/lib/utils';

export function ReviewsDialog({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: {node: ReviewItem}[];
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} heading="Reviews" openFrom="right">
      {data?.map((item) => {
        const review = item.node;
        return (
          <div
            key={review.id}
            className="flex flex-col space-y-s border-b p-sm"
          >
            <div className="flex flex-col justify-between">
              <div className="mb-sm">
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
                  <Text
                    size="text-sm"
                    className="font-medium"
                    color="text-gray-700"
                  >
                    {review.date.value}
                  </Text>
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <Text size="text-lg">{review.text.value}</Text>
                  </div>
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
      })}
    </Drawer>
  );
}

export const Reviews = ({data}: {data: {node: ReviewItem}[]}) => {
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
          return (
            <div
              key={review.id}
              className="flex flex-col space-y-sm rounded-2xl border bg-white p-sm drop-shadow-xl"
            >
              <div className="flex flex-col min-h-48 justify-between">
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
                    <Text
                      size="text-sm"
                      className="font-medium"
                      color="text-gray-700"
                    >
                      {formatDate(review.date.value)}
                    </Text>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <Text size="text-lg">{review.text.value}</Text>
                    </div>
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
        })}
      </Grid>
      <div className="mt-sm w-full flex justify-center">
        <Button onClick={openDialog}>More Reviews</Button>
      </div>
      <ReviewsDialog isOpen={isDialogOpen} onClose={closeDialog} data={data} />
    </>
  );
};
