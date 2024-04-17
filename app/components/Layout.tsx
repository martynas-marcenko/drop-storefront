import {useParams, Form, Await} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Suspense, useEffect, useMemo} from 'react';
import {CartForm} from '@shopify/hydrogen';
import clsx from 'clsx';
import {type LayoutQuery} from 'storefrontapi.generated';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconSearch,
  IconMenu,
  Section,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {
  type EnhancedMenu,
  type CustomMenu,
  useIsHomePath,
  obfuscateEmail,
} from '~/lib/utils';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {useRootLoaderData} from '~/root';
import {Facebook, Instagram, LovePin, Logo} from '~/components/icons';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

type LayoutProps = {
  children: React.ReactNode;
  layout?: LayoutQuery & {
    headerMenu?: EnhancedMenu | null;
  };
};

const extraHeaderMenu = [
  {
    id: 'aboutus_8ece0c3d-7875-4c93-948a-bf5b3a888e61',
    isExternal: false,
    title: 'Our Story',
    target: '_self',
    to: '/about',
    type: 'PAGE',
  },
  {
    id: 'blog_a5d8950a-e640-4d9d-86ae-1fb0024a8444',
    isExternal: false,
    title: 'Blog',
    target: '_self',
    to: '/blog',
    type: 'PAGE',
  },
  // {
  //   id: 'contact_0851ec8b-d11d-478c-a811-8e0c23638be1',
  //   isExternal: false,
  //   title: 'Contact Us',
  //   target: '_self',
  //   to: '/contact',
  //   type: 'PAGE',
  // },
];

const footerMenu = [
  {
    id: 'aboutus_0f7beffc-4d5e-495e-bd3c-c4935525a810',
    isExternal: false,
    title: 'Our Story',
    target: '_self',
    to: '/about',
    type: 'PAGE',
  },
  {
    id: 'homepage_792d8a6e-b373-45de-a436-edfad3e3a7e5',
    isExternal: false,
    title: 'Home',
    target: '_self',
    to: '/',
    type: 'HOMEPAGE',
  },
  {
    id: 'shop_f8edddb3-f59c-4a09-8b4d-6a761ef386a5',
    isExternal: false,
    title: 'Shop All',
    target: '_self',
    to: '/products',
    type: 'CATALOG',
  },
  {
    id: 'contact_6775617e-31d8-475e-812f-3dd3b9567eee',
    isExternal: false,
    title: 'Contact Us',
    target: '_self',
    to: '/contact',
    type: 'PAGE',
  },
];

const secondaryFooterMenu = [
  {
    id: 'policies_f40478c7-dbaf-47e8-85e2-d8889dfe27b7',
    isExternal: false,
    title: 'Terms & Privacy',
    target: '_self',
    to: '/policies',
    type: 'PAGE',
  },
];

export function Layout({children, layout}: LayoutProps) {
  const {headerMenu} = layout || {};

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && layout?.shop.name && (
          <Header title={layout.shop.name} menu={headerMenu} />
        )}
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Footer menu={footerMenu} />
    </>
  );
}

function Header({title, menu}: {title: string; menu?: EnhancedMenu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers(CartForm.ACTIONS.LinesAdd);

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  const rootData = useRootLoaderData();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={rootData?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
      {(extraHeaderMenu || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({
  title,
  isHome,
  openCart,
  openMenu,
}: {
  title: string;
  isHome: boolean;
  openCart: () => void;
  openMenu: () => void;
}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.locale ? `/${params.locale}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>
      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Logo className="h-8" />
      </Link>
      <div className="flex items-center justify-end w-full gap-4">
        <AccountLink className="relative flex items-center justify-center w-8 h-8" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function DesktopHeader({
  isHome,
  menu,
  openCart,
  title,
}: {
  isHome: boolean;
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const params = useParams();
  const {y} = useWindowScroll();

  const headerClassName = clsx(
    'hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8',
    {
      'bg-transparent backdrop-blur-none shadow-none': isHome && y < 50,
      'bg-transparent shadow-darkHeader': isHome,
      'bg-white/80': !isHome,
      'shadow-lightHeader': !isHome && y > 50,
    },
  );

  return (
    <header role="banner" className={headerClassName}>
      <div className="flex gap-12">
        <Link to="/">
          <Logo className="h-8 md:h-10" />
        </Link>
        <nav className="flex gap-8 items-center">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                isActive
                  ? 'relative uppercase text-sm font-semibold after:bg-gray-900 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:right-0'
                  : 'uppercase text-sm font-semibold'
              }
            >
              {item.title}
            </Link>
          ))}
          {(extraHeaderMenu || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                isActive
                  ? 'relative uppercase text-sm font-semibold after:bg-gray-900 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:right-0'
                  : 'uppercase text-sm font-semibold'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1">
        <Form
          method="get"
          action={params.locale ? `/${params.locale}/search` : '/search'}
          className="flex items-center gap-2"
        >
          <Input
            className={
              isHome
                ? 'focus:border-contrast/40 dark:focus:border-primary/20'
                : 'focus:border-primary/40'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </Form>
        <AccountLink className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function AccountLink({className}: {className?: string}) {
  const rootData = useRootLoaderData();
  const isLoggedIn = rootData?.isLoggedIn;

  return isLoggedIn ? (
    <Link to="/account" className={className}>
      <UserCircleIcon className="h-6 w-6" />
    </Link>
  ) : (
    <Link to="/account/login" className={className}>
      <UserCircleIcon className="h-6 w-6" />
    </Link>
  );
}

function CartCount({
  isHome,
  openCart,
}: {
  isHome: boolean;
  openCart: () => void;
}) {
  const rootData = useRootLoaderData();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={rootData?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({
  openCart,
  dark,
  count,
}: {
  count: number;
  dark: boolean;
  openCart: () => void;
}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <ShoppingBagIcon className="h-6 w-6" />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function Footer({menu}: CustomMenu) {
  const date = new Date().getFullYear();
  return (
    <Section divider="top" as="footer" role="contentinfo">
      <div className="grid grid-cols-1 gap-8 py-6 max-md:mb-12 md:grid-cols-12">
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <Link to="/" prefetch="intent">
            <Logo className="h-8 md:h-12" />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* col1 */}
            <div className="flex flex-col gap-y-2 items-start justify-start">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  prefetch="intent"
                  className="p-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {/* col2 */}
            <div className="flex flex-col items-start justify-start">
              <div className="grid gap-2">
                <Text size="lead">Follow us</Text>
                <div className="max-w-sm">
                  <Text>
                    Don’t be a stranger and say hi to us on social! Get your
                    daily drops of skincare inspiration here:{' '}
                  </Text>
                </div>
                <div className="flex items-center space-x-6 pt-xs">
                  <a
                    href="https://instagram.com/dropbydropskincare"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram account"
                  >
                    <Instagram width="56px" height="56px" />
                  </a>

                  <a
                    href="https://www.facebook.com/dropbydropskincare"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook account"
                  >
                    <Facebook width="56px" height="56px" />{' '}
                  </a>
                </div>
              </div>
            </div>
            {/* col3 */}
            <div className="flex flex-col justify-start max-w-md">
              <div className="grid gap-2">
                <Text size="lead">Drop us a line</Text>
                <div className="flex flex-col max-w-sm">
                  <Text>
                    <span className="font-medium">
                      Address <br />
                    </span>
                    Dorphs Alle 10D
                  </Text>
                  <Text>2630 Taastrup, Denmark</Text>
                </div>
                <div className="flex flex-col max-w-sm">
                  <Text>
                    <span className="font-medium">
                      Email
                      <br />
                    </span>
                    <span
                      dangerouslySetInnerHTML={{__html: obfuscateEmail()}}
                    ></span>
                  </Text>
                </div>
                <div className="flex flex-col max-w-sm">
                  <Text>
                    <span className="font-medium">
                      Phone Number
                      <br />{' '}
                    </span>
                    +45 60 61 72 19
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t grid grid-cols-1 items-start pt-6 pb-10 md:grid-cols-3 gap-y-3">
        <div className="flex items-center justify-center space-x-2">
          <LovePin width={18} height={18} />
          <div className="text-sm text-primary">With love, from Copenhagen</div>
        </div>
        <div className="grid justify-center gap-1">
          <span className="text-sm text-primary">
            &copy; {date} Drop By Drop. All rights reserved.
          </span>
          <div className="flex justify-center space-x-xs text-sm underline">
            {secondaryFooterMenu.map((item) => (
              <Link key={item.id} to={item.to} prefetch="intent">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
