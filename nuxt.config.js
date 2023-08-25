export default {
  target: 'static',
  head: {
    title: 'MEGSA',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'aseo industrial, mantención y reparación de equipos industriales, limpieza general, terminación y acabado de edificios',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8', '@nuxt/image', '@nuxt/content', '@nuxtjs/google-fonts'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleFonts: {
    families: {
      Lora: {
        wght: [400, 500, 600, 700],
      },
      Poppins: {
        wght: [400, 500, 700, 800],
      },
    },
    download: true,
  },
}
