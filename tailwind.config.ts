import type {Config} from 'tailwindcss'
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
    colors: {
      background: {
        DEFAULT: 'var(--background)',
        alt: 'var(--background-alt)',
      },
      foreground: 'var(--foreground)',
      card: 'var(--card)',
      red: 'var(--red)',
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
