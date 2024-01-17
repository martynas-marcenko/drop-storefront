import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        notice: 'rgb(var(--color-accent) / <alpha-value>)',
        shopPay: 'rgb(var(--color-shop-pay) / <alpha-value>)',
      },
      screens: {
        sm: '32em', // 512px
        md: '48em', // 768px
        lg: '64em', // 1024px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
        'sm-max': {max: '48em'}, // 768px
        'sm-only': {min: '32em', max: '48em'}, // 512px - 768px
        'md-only': {min: '48em', max: '64em'}, // 768px - 1024px
        'lg-only': {min: '64em', max: '80em'}, // 1024px - 1280px
        'xl-only': {min: '80em', max: '96em'}, // 1280px - 1536px
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        xxs: '0.5rem',
        xs: '1rem',
        base: '1.5rem',
        sm: '2rem',
        md: '3rem',
        lg: '5rem',
        xl: '7rem',
        xxl: '9rem',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
