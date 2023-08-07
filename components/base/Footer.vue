<template>
  <footer class="max-w-screen-xl mx-auto">
    <div class="w-full">
      <div class="w-full md:py-20 divide-y lg:divide-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:divide-x">
        <div class="flex justify-center items-center md:items-start min-h-[300px]" v-smooth-scroll href="#hero">
          <nuxt-img
            placeholder
            loading="lazy"
            src="/img/logo-lg.svg"
            class="invert opacity-70 hover:opacity-100 h-16"
            alt="Logo Poliedro"
            width="300"
            height="300"
          />
        </div>

        <div class="pl-4 py-6">
          <p class="text-lg text-semibold text-gray-800 mb-6">Contacto</p>
          <ul class="space-y-4">
            <div v-for="(item, index) of contact" :key="index" class="flex space-x-4">
              <component v-bind:is="item.icon"></component>
              <NavLink :name="item.text" :url="item.url" />
            </div>
          </ul>
        </div>

        <div class="pl-4 py-6">
          <p class="text-lg text-semibold text-gray-800 mb-6">Mapa del sitio</p>
          <ul class="space-y-4">
            <div v-for="(item, index) of sections" :key="index" class="flex space-x-4 items-center">
              <circle-small-icon />
              <NavLink :name="item.text" :url="item.url" />
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900 border-t sm:border-t-0">
      &reg; Poliedro ltda. 2022. <br />
      Todos los derechos reservados
    </div>
  </footer>
</template>
<script>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import PhoneOutlineIcon from 'vue-material-design-icons/PhoneOutline.vue'
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue'
import WhatsappIcon from 'vue-material-design-icons/Whatsapp.vue'
export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    PhoneOutlineIcon,
    EmailOutlineIcon,
    WhatsappIcon,
  },
  name: 'BaseFooter',
  data() {
    return {
      contact: [
        {
          text: '+569 64033243',
          icon: WhatsappIcon,
          url: 'https://wa.me/56964033243',
        },
        {
          text: '+569 64033243',
          icon: PhoneOutlineIcon,
          url: 'tel:56964033243',
        },
        {
          text: 'contacto@poliedro.io',
          icon: EmailOutlineIcon,
          url: 'mailto: contacto@poliedro.io',
        },
        {
          text: '@poliedro.io',
          icon: InstagramIcon,
          url: 'https://www.instagram.com/poliedro.io/',
        },
      ],
      sections: [
        { text: 'Servicios', url: '#services', icon: '' },
        { text: 'Funcionalidades', url: '#features', icon: '' },
        { text: 'Partner digital', url: '#partner', icon: '' },
        { text: 'Digitalización', url: '#digitalization', icon: '' },
        { text: 'Brochure', url: '#brochure', icon: '' },
        { text: 'Clientes', url: '#customers', icon: '' },
        { text: 'Contacto', url: '#contact', icon: '' },
      ],
    }
  },
}
</script>

<style scoped>
.invert {
  filter: invert(1);
}
</style>
