const colors = require('tailwindcss/colors')

module.exports = {
  tailwindcss: {
    exposeConfig: true,
  },
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  safelist: ['bg-gray', 'bg-blue', 'bg-yellow', 'text-blue', 'text-yellow', 'shadow-blue-500/50', 'filter', 'invert'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      blue: {
        50: '#e4f0f6',
        100: '#bcd8e8',
        200: '#90bfd8',
        300: '#63a5c8',
        400: '#4191bd',
        500: '#207eb1',
        600: '#1c76aa',
        700: '#186ba1',
        800: '#136198',
        900: '#0b4e88',
        light: '#e4f0f6',
        DEFAULT: '#4191bd',
        dark: '#0b4e88',
      },
      yellow: {
        50: '#e4f6e7',
        100: '#bce8c3',
        200: '#90d89b',
        300: '#63c873',
        400: '#41bd55',
        500: '#20b137',
        600: '#1caa31',
        700: '#18a12a',
        800: '#139823',
        900: '#0b8816',
        light: '#e4f6e7',
        DEFAULT: '#41bd55',
        dark: '#0b8816',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
