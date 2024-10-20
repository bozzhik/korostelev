import type {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      // md: {max: '1024px'},
      sm: {max: '428px'},
    },
    fontFamily: {
      sans: ['var(--font-geist)', ...fontFamily.sans],
    },
    colors: {
      background: {
        DEFAULT: '#ffffff',
        alt: '#f9f9f9',
      },
      foreground: '#171717',
      card: '#f3f3f3',
      red: '#c82a22',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    tailwindcssAnimate,
  ],
}

export default config
