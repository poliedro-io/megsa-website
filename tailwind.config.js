const colors = require('tailwindcss/colors');

module.exports = {
  // tailwindcss: {
  //   exposeConfig: true
  // },
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [
    'bg-gray',
    'bg-blue',
    'bg-yellow',
    'text-blue',
    'text-yellow',
    'shadow-blue-500/50',
    'filter',
    'invert'
  ],
  theme: {

    fontFamily: {
    
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      'blue': {
        50: '#e3eef6',
        100: '#b8d6e8',
        200: '#89bad9',
        300: '#599eca',
        400: '#368abe',
        500: '#1275b3',
        600: '#106dac',
        700: '#0d62a3',
        800: '#0a589a',
        900: '#05458b',
        light: '#e3eef6',
        DEFAULT: '#1275b3',
        dark: '#05458b',
      },
      'yellow': {
        50: '#fff9e1',
        100: '#ffefb3',
        200: '#ffe480',
        300: '#ffd94d',
        400: '#ffd127',
        500: '#ffc901',
        600: '#ffc301',
        700: '#ffbc01',
        800: '#ffb501',
        900: '#ffa900',
        light: '#fff9e1',
        DEFAULT: '#ffc901',
        dark: 'ffa900'
      },
    },

  },
  plugins: [require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio')],
}
