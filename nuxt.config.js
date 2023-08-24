export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'MEGSA',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/mdi.js'],
  components: {
    dirs: ['~/components', '~/components/sections'],
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8', '@nuxt/image', '@nuxt/content'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
