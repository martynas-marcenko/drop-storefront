import {Section, Heading, Text} from '~/components/ui';
import {Image} from '@shopify/hydrogen';
import {Link} from '~/components';

const skinStructure = {
  altText: 'Skin Structure',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/skin-structure.gif?v=1707753175',
  width: 400,
  height: 300,
};

const corneocyte = {
  altText: 'Corneocytes, Intercellular Lipids and Natural Moisturizing Factor',
  url: 'https://cdn.shopify.com/s/files/1/0315/6043/3802/files/corneocyte.jpg?v=1707390142',
  width: 160,
  height: 90,
};

const drySkinGuide = {
  understandingDrySkin: {
    title: {
      text: 'Understanding Dry Skin',
      href: 'understanding-dry-skin',
    },
    content: [
      {
        text: 'Unlocking the Secrets of Skin Structure and Moisture Regulation',
        href: 'unlocking-the-secrets-of-skin-structure-and-moisture-regulation',
      },
      {
        text: 'Moisture Regulation',
        href: 'moisture-regulation',
      },
      {
        text: 'Dry Skin vs. Dehydrated Skin: Understanding the Difference',
        href: 'dry-skin-vs-dehydrated-skin-understanding-the-difference',
      },
    ],
  },
  whyFaceOilsRockForDrySkin: {
    title: {
      text: 'Why Face Oils Rock for Dry Skin',
      href: 'why-face-oils-rock-for-dry-skin',
    },
    content: [
      {
        text: 'Busting the Myth: Oil Clog Pores!',
        href: 'busting-the-myth-oil-clog-pores',
      },
      {
        text: 'Busting Myth 2: "Oils Will Make My Skin Greasy!',
        href: 'busting-the-myth-oil-will-make-my-skin-greasy',
      },
    ],
  },
  howToChooseTheRightFaceOilForDrySkin: {
    title: {
      text: 'How to Choose the Right Face Oil for Dry Skin',
      href: 'how-to-choose-the-right-face-oil-for-dry-skin',
    },
    content: [
      {
        text: 'The Oil Spectrum: Not All Are Created Equal',
        href: 'the-oil-spectrum-not-all-are-created-equal',
      },
      {
        text: 'Finding the One: Your Perfect Oil Match',
        href: 'finding-the-one-your-perfect-oil-match',
      },
    ],
  },
  howToUseFaceOilsInYourSkincareRoutine: {
    title: {
      text: 'How to Use Face Oils in Your Skincare Routine',
      href: 'how-to-use-face-oils-in-your-skincare-routine',
    },
    content: [
      {
        text: 'How to Choose the Right Oil',
        href: 'how-to-choose-the-right-oil',
      },
      {
        text: 'How to Use Oils in Your Skincare Routine for Dry Skin',
        href: 'how-to-use-oils-in-your-skincare-routine-for-dry-skin',
      },
    ],
  },
};

const Contents = () => {
  return (
    <Section
      width="full"
      display="flex"
      className="relative flex-col justify-center items-center"
    >
      <div className="w-full max-w-prose p-xs border rounded-md">
        <div className="flex text-pretty my-2">
          <Text size="text-xl" as="p" className="font-bold">
            Table Of Contents
          </Text>
        </div>
        {Object.entries(drySkinGuide).map(([key, section]) => (
          <div key={key}>
            <Link
              to={`#${section.title.href}`}
              className="block pt-xs pb-2 font-medium"
            >
              {section.title.text}
            </Link>
            <ul>
              {section.content.map((contentItem, index) => (
                <li className="flex ml-4" key={index}>
                  <Link
                    to={`#${contentItem.href}`}
                    className="group text-slate-700 hover:text-slate-900 flex items-start py-1"
                  >
                    <svg
                      width="3"
                      height="24"
                      viewBox="0 -9 3 24"
                      className="mr-2 group-hover:text-slate-900 text-slate-400 overflow-visible"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    {contentItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

const WhyFaceOils = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-left max-w-prose">
        <div className="text-pretty mb-sm" id="why-face-oils-rock-for-dry-skin">
          <Heading heading="Why Face Oils Rock for Dry Skin" />
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Face oils are not just a trend; they're a game-changer for anyone
          looking to deeply nourish and rejuvenate their dry skin. Let's dive
          into why these natural oils are a must-have in your skincare routine.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Hydration Hero{' '}
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          First off, these natural oils are amazing at keeping your skin
          hydrated. They work by locking in moisture with a protective layer
          that stops water from saying goodbye to your skin. This means your
          skin stays more hydrated and happy.
        </Text>

        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Your Skin’s Shield{' '}
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          On top of trapping moisture, plant oils also protect your skin from
          the not-so-nice things out there like pollution and germs. Super
          helpful if your skin is on the sensitive side or needs a little extra
          care.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Nourishing Skin with Essential Nutrients
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Plant oils bring back all the good stuff your skin loves, fats
          (triglycerides), special acids (essential fatty acids), ceramides,
          cholesterol, and squalene, helping to repair and strengthen your
          skin's barrier.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Boosting with Skin-Like Ingredients
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          What’s even cooler is that many of these oils have ingredients that
          are just like what’s naturally in your skin. Ingredients like
          phytosterols and lecithin fit right in, giving your skin’s natural
          barrier a big high-five.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            No Unnecessary Additives
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Dry skin can be sensitive and reactive to chemicals commonly found in
          skincare products. Since unrefined oils are free from preservatives
          and other additives, they are less likely to cause irritation or
          exacerbate dryness, making them a gentle and safe option for dry skin
          care.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Softness and Flexibility
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          By mimicking your skin's own fats, these plant-based wonders make your
          skin feel softer and smoother. They're especially good if your skin
          feels rough, flaky, or tight because they help ease that dryness away.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          So, if dry skin’s got you down, turning to plant oils could be just
          the pick-me-up your skin needs. They’re like the ultimate care package
          for your skin, keeping it hydrated, protected, nourished, and
          oh-so-smooth. Give them a try and your skin might just thank you with
          its best glow yet!
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="busting-the-myth-oil-clog-pores"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            Busting the Myth: Oil Clog Pores!
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          The fact is, that unrefined, natural vegetable oils have natural get
          along really well with the sebum (your skin's natural oil). When they
          mix, they create this harmonious blend that effortlessly breaks down
          and sweeps away dirt and impurities from your pores. Cool, right? This
          is actually the magic behind the well-loved oil cleansing method.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Plus, these natural oils don't hang around on your skin. They get
          absorbed and break down quickly, ensuring your skin keeps on renewing
          itself just as it should.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <span className="font-bold">The Not-So-Great Oils: </span>Now, let's
          flip the coin. Mineral oils, paraffin, and processed, refined
          vegetable fats - these tend to coat your skin, forming a barrier that
          can trap unwanted elements you don't want, like dirt and old skin
          cells. These are the usual suspects in clogged pores, and you'll often
          find them in products that are easy on the wallet but tough on your
          skin.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="busting-the-myth-oil-will-make-my-skin-greasy"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            Busting Myth 2: "Oils Will Make My Skin Greasy!"
          </Text>
        </div>
        <Text size="text-lg" as="p" className="font-serif">
          Think oils will leave your skin looking like a shiny disco ball? Not
          necessarily! Sometimes, if your skin's looking shiny after oil
          application, it might be down to using a not-so-great product or maybe
          just using a bit too much. And hey, if one oil's not doing it for you,
          another might be your skin's soulmate.
        </Text>
      </div>
    </Section>
  );
};

const HowChooseFaceOilForDrySkin = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-left max-w-prose">
        <div
          id="how-to-choose-the-right-face-oil-for-dry-skin"
          className="text-pretty mb-sm"
        >
          <Heading heading="How to Choose the Right Face Oil for Dry Skin" />
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          It's crucial to pick the right oil. High-quality, unrefined oils are
          packed with vitamins A and E, fatty acids, and ceramides, squalene,
          antioxidants that not only nourish your skin but also help it heal and
          glow. It's like feeding your skin all the best stuff!
        </Text>

        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="the-oil-spectrum-not-all-are-created-equal"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            The Oil Spectrum: Not All Are Created Equal
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Just like wines, oils come in a vast array. But beware, not all oils
          are beneficial. Steer clear of mineral oils, fractionated,
          hydrogenated fats, synthetic fats like silicones, and refined oils.
          These are the fast food of skincare – tempting but not so good for
          you.
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-serif font-bold">
          Top Unrefined Oils for Dry Skin:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-disc list-inside">
            <li>Hemp Seed Oil</li>

            <li>Jojoba Oil</li>
            <li>Sesame Oil</li>
            <li>Moringa Oil</li>
            <li>Almond Oil</li>
          </ul>
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          These oils are the nourishing 'whole foods' for your skin, offering
          deep hydration and a range of benefits.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          If you're after a robust occlusive effect to really seal in moisture,
          think about these rich butters and wax:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-disc list-inside">
            <li>
              Butters: Mango, Shea, Cocoa, Coconut, Cupuacu, Babassu – all are
              fantastic for forming a protective barrier on your skin.
            </li>

            <li> Wax: Beeswax is a great choice as well.</li>
          </ul>
        </Text>

        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Each of these oils and butters has unique benefits, so don't hesitate
          to try a few and see which one suits your skin the best!
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <span className="font-bold">The Not-So-Great Oils: </span>Now, let's
          flip the coin. Mineral oils, paraffin, and processed, refined
          vegetable fats - these tend to coat your skin, forming a barrier that
          can trap unwanted elements you don't want, like dirt and old skin
          cells. These are the usual suspects in clogged pores, and you'll often
          find them in products that are easy on the wallet but tough on your
          skin.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="finding-the-one-your-perfect-oil-match"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            Finding the One: Your Perfect Oil Match
          </Text>
        </div>
        <Text size="text-lg" as="p" className="font-serif">
          The journey to finding the right oil for your skin can be a bit like
          matchmaking. If you notice that even a high-quality oil isn't quite
          getting along with your skin, it's a sign to keep looking. It’s about
          experimenting and discovering the oil that clicks with your skin’s
          unique character and needs. Remember, skincare is a personal journey,
          and finding the right products is part of the adventure!
        </Text>
      </div>
    </Section>
  );
};

const Routine = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-left max-w-prose">
        <div
          id="how-to-use-face-oils-in-your-skincare-routine"
          className="text-pretty mb-sm"
        >
          <Heading heading="How to Use Face Oils in Your Skincare Routine" />
        </div>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="how-to-choose-the-right-oil"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            Choose the Right Oil
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-decimal list-inside">
            <li>
              <span className="font-bold">Pick Your Hero: </span> For dry skin,
              look for oils that are rich in hydration and nourishment. Like I
              mentioned before, some top-notch picks include:
              <ul className="my-3 list-disc list-inside">
                <li>Hemp Seed Oil</li>
                <li>Jojoba Oil</li>
                <li>Sesame Oil</li>
                <li>Moringa Oil</li>
                <li>Almond Oil</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Quality Matters: </span> For dry skin,
              choose high-quality, cold-pressed, unrefined oils to get the
              greatest benefits!
            </li>
          </ul>
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text
            id="how-to-use-oils-in-your-skincare-routine-for-dry-skin"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            How to Use Oils in Your Skincare Routine for Dry Skin
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          First up, begin with cleansing your face. You can use the oil
          cleansing method, which is fantastic for many, but if that's not your
          thing, any gentle cleanser will do the job. The key is to start with a
          clean, fresh base.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Next, if you're a fan of toners, mists, essences, or hydrolats, go
          ahead and apply them. If not, no problem – just leave your face a bit
          damp after cleansing. This step is great because it helps your skin
          absorb the oil more effectively and ensures even distribution.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Now, for the main event: apply your chosen oil. Take about 2-5 drops
          and gently massage it into your skin. The warmth of your hands
          actually helps the oil penetrate deeper into your skin, maximizing
          hydration and nourishment. Give extra attention to any drier areas.
        </Text>
        <div className="flex text-pretty mb-xs mt-sm">
          <Text size="text-xl" as="p" className="font-bold">
            Skin Care Hack: The Ultimate Trick for Using Face Oil
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          There's a little secret that'll take your face oil game to the next
          level. After cleansing, keep your skin slightly moist.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Got some hydrolat, like that calming lavender water? Perfect! If not,
          no stress, you can totally skip this. But if you do, give your face a
          light spritz. It's like adding a cherry on top of your skincare
          routine.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Next, grab your beloved face oil. We're talking just a few drops here.
          Gently massage it over your still-damp skin. Feels nice, right?
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Here’s where the cool part comes in: Your own skin sebum (fancy word
          for the oil your skin naturally makes) kicks in like a mini skincare
          chemist. It blends with the face oil and the water on your skin,
          creating a personalized, instant cream. This isn't just any cream –
          it's tailor-made by you, for you, right there on your face.
        </Text>
        <Text size="text-lg" as="p" className="font-serif">
          The best part? It sinks into your skin just as easily as your go-to
          cream, brings a little hydration boost and all the soothing vibes from
          your oil and hydrolat combo. It's like a mini spa moment every time
          you use it!{' '}
        </Text>
      </div>
    </Section>
  );
};

const WhatIsDrySkin = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center pt-0"
    >
      <div className="text-left max-w-prose">
        <div className="text-pretty mb-sm" id="understanding-dry-skin">
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
          <Text
            id="unlocking-the-secrets-of-skin-structure-and-moisture-regulation"
            size="text-xl"
            as="p"
            className="font-bold"
          >
            Unlocking the Secrets of Skin Structure and Moisture Regulation
          </Text>
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          If your skin often feels tight, looks flaky, or gets itchy, that's dry
          skin for you. It can also get rough, and in more serious cases, you
          might see redness or cracks.
        </Text>
        <Text
          id="moisture-regulation"
          size="text-lg"
          as="p"
          className="mb-xs font-bold"
        >
          Moisture Regulation
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          But have you ever wondered what makes your skin this way? (feel dry or
          stay moisturized)? (Let's figure it out!)
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
          Skin Structure Illustration: Displays the Epidermis layers (Stratum
          Corneum to Stratum Basale) and the Dermis, showing moisture travel
          from deep layers to the skin surface.
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-serif">
          Now, Transepidermal Water Loss (TEWL) depends a lot on two superhero
          components:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-decimal list-inside [&>li]:mb-xs">
            <li>
              <span className="font-bold">
                Natural Moisturising Factor (NMF):
              </span>{' '}
              These are like the skin's own hydrating crew, made up of stuff
              that pulls in and holds onto water to keep the skin soft and
              flexible.
            </li>
            <li>
              <span className="font-bold">Intercellular Lipids:</span> Think of
              these as the skin's sealing wax. They lock moisture in and keep
              the water loss in check, making sure our skin doesn't get too dry.
            </li>
          </ul>
        </Text>
        <div className="flex items-start overflow-clip">
          <Image data={corneocyte} loading="eager" />
        </div>
        <Text as="p" size="text-sm" className="mb-sm mt-1">
          Close-Up Illustration of Skin's Hydration Elements: Intercellular
          Lipids and Natural Moisturizing Factor (NMF)
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Both these heroes work together to make sure our skin stays just the
          right amount of hydrated, keeping it healthy and preventing it from
          losing too much water.
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
          skin hydrated and healthy. (Kartojasi?)
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-serif">
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
          Lipids, resulting in skin that needs additional moisture.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          You might notice it looking flaky, feeling a bit rough, or even seeing
          tiny cracks. It's your skin's gentle way of asking for a little more
          hydration and love.
        </Text>

        <div
          className="flex text-pretty mb-xs mt-sm"
          id="dry-skin-vs-dehydrated-skin-understanding-the-difference"
        >
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
        <Text size="text-lg" as="p" className="italic mb-xs font-serif">
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
        <Text size="text-lg" as="p" className="italic mb-xs font-serif">
          Signs to Spot:
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          <ul className="list-disc list-inside [&>li]:mb-xs">
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
        <Text size="text-lg" as="p" className="font-serif">
          This distinction is important for selecting the right skincare
          products. It's all about finding what best satisfies your skin's
          specific needs, and we'll delve deeper into this in the upcoming
          section.
        </Text>
      </div>
    </Section>
  );
};

const End = () => {
  return (
    <Section
      width="full"
      className="flex flex-col items-center justify-center text-center pt-0"
    >
      <div className="text-left max-w-prose">
        <div className="text-pretty mb-sm" id="understanding-dry-skin">
          <Heading heading="Conclusion" />
        </div>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          And there you have it, your complete guide to embracing the natural
          benefits of face oils for dry skin.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Remember, the journey to hydrated, happy skin is all about finding
          what works best for you. Whether it’s hemp seed, jojoba, or almond
          oil, each drop of these unrefined oils holds the promise of nourished,
          revitalized skin.
        </Text>
        <Text size="text-lg" as="p" className="mb-sm font-serif">
          Don’t be afraid to experiment and listen to your skin’s needs. With
          the right face oil in your skincare arsenal, you’re not just
          moisturizing; you’re investing in your skin’s long-term health and
          glow.
        </Text>
        <Text size="text-lg" as="p" className="mb-xs font-serif">
          So go ahead, give your skin the love and care it deserves with these
          nature’s gifts. Your radiant, hydrated skin will thank you!
        </Text>
      </div>
    </Section>
  );
};

export const UsingUnrefinedOilDrySkin = () => {
  return (
    <div className="relative">
      <Contents />
      <WhatIsDrySkin />
      <WhyFaceOils />
      <HowChooseFaceOilForDrySkin />
      <Routine />
      <End />
    </div>
  );
};
