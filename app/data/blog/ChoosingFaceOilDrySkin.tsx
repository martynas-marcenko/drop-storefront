import React from 'react';
import {TableOfContent} from '~/components';
import {Section, Heading, Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';

const UnderstadingDrySkinImage = {
  altText: 'Understanding Dry Skin',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/martynas9051_woman_in_her_50s_close_to_her_eyes_close_up_photor_5b4ac7ce-d193-4449-987c-3ee3ee6e7fd7.png?v=1707130289',
  width: 250,
  height: 250,
};

export const ChoosingFaceOilDrySkin: React.FC = () => {
  return (
    <div id="top">
      <Section padding="y">
        <div className="flex justify-center text-pretty sm-max:mb-xs mb-md">
          <Heading heading="Contents" />
        </div>
        <p>This is a simple component.</p>
      </Section>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <Section
            width="full"
            className="flex flex-col items-center justify-center text-center bg-[#d6e3d4]"
          >
            <div className="mb-xs">
              <Text className="uppercase font-medium">Chapter 1:</Text>
            </div>
            <div className="flex justify-center text-pretty mb-sm">
              <Heading heading="Understanding Dry Skin" />
            </div>
            <div className="aspect-[16/9] flex items-start overflow-clip">
              <Image data={UnderstadingDrySkinImage} loading="eager" />
            </div>
            <div className="text-left max-w-screen-sm	mt-sm">
              <Text size="text-lg" as="p" className="mb-xs font-serif">
                Ready to tackle dry skin head-on?
              </Text>
              <Text size="text-lg" as="p" className="mb-xs font-serif">
                In this chapter, we'll uncover why skin gets dry, zoom in on the
                heroes like NMF and Intercellular Lipids, and learn how to spot
                the difference between dry and dehydrated skin.
              </Text>
              <Text size="text-lg" as="p" className="font-serif">
                Let's jump in and give your skin the hydration lowdown it
                deserves! 🌊 🤗
              </Text>
            </div>
          </Section>
          <Section width="narrow" className="flex flex-col">
            <div className="flex text-pretty mb-xs">
              <Text size="text-xl" className="font-bold">
                The Look and Feel of Dry Skin
              </Text>
            </div>
            <Text as="div" className="mb-xs">
              If your skin often feels tight, looks flaky, or gets itchy, that's
              dry skin for you. It can also get rough, and in more serious
              cases, you might see redness or cracks.
            </Text>
            <Text as="div" className="mb-xs">
              If your skin often feels tight, looks flaky, or gets itchy, that's
              dry skin for you. It can also get rough, and in more serious
              cases, you might see redness or cracks.
            </Text>
            <Text as="div" className="mb-xs">
              In this chapter, we'll uncover why skin gets dry, zoom in on the
              heroes like NMF and Intercellular Lipids, and learn how to spot
              the difference between dry and dehydrated skin
            </Text>
            <Text as="div">
              Let's jump in and give your skin the hydration lowdown it
              deserves! 🌊 🤗
            </Text>
          </Section>
          <div className="my-[600px]">hello</div>
          <span id="go-here" />
          <div>I am here</div>
        </div>
        <TableOfContent />
      </div>
    </div>
  );
};
