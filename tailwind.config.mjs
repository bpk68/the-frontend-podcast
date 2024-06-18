/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const fonts = {
  spartan: 'League Spartan',
  sanchez: 'Sanchez',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // fontSize: {
    //   ...defaultTheme.fontSize,
    // },
    extend: {
      fontFamily: {
        sans: [fonts.spartan, ...defaultTheme.fontFamily.sans],
        headings: [fonts.sanchez, ...defaultTheme.fontFamily.serif],
        base: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          black: {
            900: '#2b2523',
            800: '#303030',
          },
          white: {
            900: '#f3f4f6',
          },
          yellow: {
            900: '#ffbd59',
          },
          green: {
            900: '#c9e265',
          },
          blue: {
            900: '#1e365c',
          },
          gray: {
            900: '#2f313d',
            800: '#414141',
            500: '#a1a1a7',
            400: '#d8d8d8',
            300: '#d8d8d8',
            200: '#e5e7e9',
            100: '#f9f9fb',
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand.white.900'),
            fontWeight: '400',
            h1: {
              color: theme('colors.brand.yellow.900'),
            },
            h2: {
              color: theme('colors.brand.yellow.900'),
            },
            h3: {
              color: theme('colors.brand.yellow.900'),
            },
            a: {
              color: theme('colors.brand.yellow.900'),
              '&:hover': {
                color: theme('colors.brand.green.900'),
              },
            },
            ul: {
              li: {
                color: theme('colors.brand.white.900'),
                margin: 0,
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
