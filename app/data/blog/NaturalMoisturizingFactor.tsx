import React from 'react';
import {TableOfContent} from '~/components';
import {Section, Heading, Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';

export const NaturalMoisturizingFactor: React.FC = () => {
  return (
    <div id="top">
      <h1>
        The Complete Guide to Choosing Face Oil for Dry Skin What You Need to
        Know
      </h1>
      <p>This is a simple component.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="my-[600px]">hello</div>
          <span id="go-here" />
          <div>I am here</div>
        </div>
        <TableOfContent />
      </div>
    </div>
  );
};

//Make extended blog post about Moisturizing factor and intercellular lipids
const UnderstadingDrySkinImage = {
  altText: 'Understanding Dry Skin',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/martynas9051_woman_in_her_50s_close_to_her_eyes_close_up_photor_5b4ac7ce-d193-4449-987c-3ee3ee6e7fd7.png?v=1707130289',
  width: 250,
  height: 250,
};

const skinStructure = {
  altText: 'Skin Structure',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/skin-structure.jpg?v=1707390148',
  width: 400,
  height: 300,
};

const corneocyte = {
  altText: 'Corneocytes, Intercellular Lipids and Natural Moisturizing Factor',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/corneocyte.jpg?v=1707390142',
  width: 160,
  height: 90,
};
const WhatIsDrySkin = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-left max-w-prose">
        <div className="text-pretty mb-sm">
          <Heading heading="Understanding Dry Skin" />
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          What if understanding your skin structure could be the first step in
          transforming it?
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          This chapter isn't just about dry skin — it's about digging into why
          your skin acts as it does and how you can change it.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Unlocking the Secrets of Skin Structure and Moisture Regulation
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          If your skin often feels tight, looks flaky, or gets itchy, that's dry
          skin for you. It can also get rough, and in more serious cases, you
          might see redness or cracks.
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-bold">
          Moisture Regulation
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          But have you ever wondered what makes your skin feel dry or stay
          moisturized? (Let's figure it out!)
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          The skin is like a friendly gatekeeper that's not super strict. It
          lets a bit of water sneak out from our body into the air, a process
          called Transepidermal Water Loss (TEWL).
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          This little bit of water loss is like a sneak peek into how well our
          skin is working as a barrier. If there's too much water sneaking out,
          it's a sign that our skin might need a bit more care and attention to
          keep it happy and healthy.
        </Text>
        <div className="flex items-start overflow-clip">
          <Image data={skinStructure} loading="eager" />
        </div>
        <Text as="p" size="text-sm" className="mb-sm mt-1">
          Detailed Skin Structure Illustration: Showcasing the Epidermis Divided
          into Stratum Corneum, Stratum Granulosum, Stratum Spinosum, and
          Stratum Basale, Followed by the Dermis Layer.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Now, Transepidermal Water Loss (TEWL) depends a lot on two superhero
          components:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-decimal list-inside">
            <li>NMF (Natural Moisturizing Factor)</li>
            <li>Intercellular lipids within the stratum corneum.</li>
          </ul>
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          But first, let's understand basic skin structure, which is crucial
          before diving into the specifics of components like these.
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-bold">
          Skin structure
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Picture your skin as a team of three layers working together. At the
          forefront is the epidermis, followed by the supportive dermis, and
          then the nurturing hypodermis.
        </Text>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          The topmost layer of your skin, the epidermis, has a very thin outer
          layer called the stratum corneum. Think of it like a brick wall:
        </Text>
        <ul className="list-decimal list-inside [&>li]:mb-xs">
          <Text size="text-lg" as="p" className="mb-sm font-serif">
            <li>
              The 'bricks' are dead skin cells, known as corneocytes. These are
              the cells you actually see when you look at your skin.
            </li>
          </Text>
          <Text size="text-lg" as="p" className="mb-sm font-serif">
            <li>
              The 'mortar' is made up of Intercellular lipids, or fats, which
              hold these dead cells (bricks) together.
            </li>
          </Text>
        </ul>
        <div className="flex items-start overflow-clip">
          <Image data={corneocyte} loading="eager" />
        </div>
        <Text as="p" size="text-sm" className="mb-sm mt-1">
          Close-Up Illustration of Skin's Hydration Elements: Intercellular
          Lipids, and Natural Moisturizing Factor (NMF)
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          When you touch your skin, you're mostly feeling these dead skin cells
          and lipids.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Now, as you understand basic skin structure, let's dive into the NMF
          and Intercellular Lipids.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            What is NMF?
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          NMF (Natural Moisturizing Factor) works like a hydration magnet,
          focusing on attracting and retaining water directly in the skin's
          stratum corneum, the outermost layer of the skin.
        </Text>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          It's packed with goodies like amino acids and urea. All these
          molecules have a high water binding capacity, even at a low relative
          humidity, and thus maintain adequate skin hydration, even in a dry
          environment, ensuring your skin stays moisturized from the inside out.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Why NMF Matters?
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          This action helps to maintain hydration within the stratum corneum,
          the skin's outermost layer, by ensuring water is effectively absorbed
          and kept within the skin cells (corneocytes) to support overall
          moisture levels.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Intercellular Lipids: The Unsung Heroes
          </Text>
        </div>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Think of intercellular lipids as the invisible guardians in your skin.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          These special types of fats are nestled between the dead skin cells
          (corneocytes) in your topmost skin layer, the stratum corneum. Their
          role is super important, yet often goes unnoticed:
        </Text>
        <ul className="list-decimal list-inside">
          <Text size="text-lg" as="p" className="mb-sm font-serif">
            <li>
              <span className="font-bold">Locking in Moisture:</span> Imagine
              each dead skin cell (corneocytes) is like a sponge full of water.
              Intercellular lipids act like a sealant that keeps this water from
              evaporating. They trap the moisture and keep your skin hydrated.
            </li>
          </Text>
          <Text size="text-lg" as="p" className="mb-sm font-serif">
            <li>
              <span className="font-bold">Forming a Protective Barrier: </span>{' '}
              Besides holding in moisture, these lipids are like a shield. They
              create a barrier that stops harmful substances from the
              environment (like pollutants or irritants) from getting into your
              skin.
            </li>
          </Text>
        </ul>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Unlike NMF, which ensures that moisture is effectively absorbed and
          kept, intercellular lipids form a protective barrier on the skin's
          surface to prevent moisture loss.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            NMF and Intercellular Lipids: A Perfect Duo
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          NMF and intercellular lipids are its perfect partner. While NMF grabs
          and holds onto water inside the dead skin cells, intercellular lipids
          make sure this moisture stays put. They work together to keep your
          skin hydrated and healthy.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Several factors can diminish NMF and Intercellular Lipids, such as:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-decimal list-inside [&>li]:mb-xs">
            <li>
              <span className="font-bold">Your Skin's Type:</span> Some of us
              just have naturally dry skin.
            </li>

            <li>
              <span className="font-bold">Exfoliation Enthusiasm:</span> Love
              scrubbing your skin? Be careful, overdoing it can actually
              backfire and lead to dryness.
            </li>

            <li>
              <span className="font-bold">Shower Habits:</span> Those long, hot
              showers might be relaxing, but they can also strip your skin of
              moisture.
            </li>

            <li>
              <span className="font-bold">Skin's Challenges:</span> Dealing with
              conditions like eczema or psoriasis often means having to manage
              dry skin more frequently.
            </li>

            <li>
              <span className="font-bold">Weather Woes:</span> Extreme
              temperatures, whether hot or cold, can be harsh on your skin. And
              don't forget, indoor heating and air conditioning aren't doing
              your skin any favors in the hydration department.
            </li>

            <li>
              <span className="font-bold"> Aging and NMF:</span> As we age, our
              skin's NMF levels can drop. This means we need to pay more
              attention to hydrating and nourishing our skin as we get older.
            </li>
          </ul>
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          When these factors come together, they reduce NMF and Intercellular
          Lipids, resulting in skin that needs additional moisture. You might
          notice it looking flaky, feeling a bit rough, or even seeing tiny
          cracks. It's your skin's gentle way of asking for a little more
          hydration and love.
        </Text>

        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Dry Skin vs. Dehydrated Skin: Understanding the Difference
          </Text>
        </div>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Let’s break it down, because knowing the difference is important for
          taking care of your skin the right way.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <span className="font-bold">Dry Skin: </span>Think of dry skin as your
          skin asking for more oil. This is more about your skin type, which can
          be down to genetics or changes as you get older. Dry skin often feels
          rough and might look a bit flaky or have small pores. It soaks up
          moisturizers like a sponge, without leaving any greasy signs.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Signs to Spot:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-disc list-inside [&>li]:mb-xs">
            <li>Tends to crack or have rough patches.</li>
            <li>
              Moisturizer is absorbed rapidly. Lacks a shiny oil layer, even
              after a long day.
            </li>
            <li>Small, less noticeable pores.</li>
            <li>
              Make-up might settle into fine lines or clump around dry areas.
            </li>
          </ul>
        </Text>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <span className="font-bold">Dehydrated Skin: </span>Here’s the twist –
          dehydrated skin is crying out for water, not oil, and yes, even oily
          skin types can experience this. It’s often a temporary visitor,
          triggered by environmental factors like the weather, or skincare
          habits such as over-washing or too much exfoliating. Dehydrated skin
          feels tight and less elastic, almost like it’s not as plump as it
          should be.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Signs to Spot:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-disc list-inside  [&>li]:mb-xs">
            <li>Feels tight, yet you may still see oiliness.</li>
            <li>Appears dull and lacks a healthy glow.</li>
            <li>Experiences increased sensitivity or itchiness. .</li>
            <li>
              Might show more pronounced lines or wrinkles when dehydrated.
            </li>
          </ul>
        </Text>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Both conditions can lead to flakiness, itchiness, a feeling of
          tightness, and a dull appearance.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Here's a handy tip to figure out if your skin is dehydrated: give the
          pinch test a go. Just gently pinch a small area of your cheek. If your
          skin snaps back promptly, you're likely well-hydrated. But if it
          slowly returns to its normal state, it might be a sign that your skin
          is craving some hydration. This simple test can be quite telling!
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          This distinction is important for selecting the right skincare
          products. It's all about finding what best satisfies your skin's
          specific needs, and we'll delve deeper into this in the upcoming
          section.
        </Text>
      </div>
    </Section>
  );
};
