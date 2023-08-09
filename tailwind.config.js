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
        DEFAULT: '#207eb1',
        dark: '#0b4e88',
      },
      yellow: colors.yellow,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
