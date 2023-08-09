<template>
  <footer class="mx-auto bg-gray-900">
    <div class="w-full">
      <div class="w-full md:pt-40 pb-20 grid gap-8 px-6">
        <a class="flex justify-start items-center md:items-start" v-smooth-scroll href="#home">
          <nuxt-img placeholder loading="lazy" src="/img/logo-lg.png" class="hover:opacity-100 h-16" alt="Logo Megsa" />
        </a>
        <div>
          <p class="text-lg text-semibold text-gray-200 mb-6">Contacto</p>
          <ul class="space-y-4">
            <div v-for="(item, index) of contact" :key="index" class="flex space-x-4">
              <component v-bind:is="item.icon" class="text-white"></component>
              <NavLink alt :name="item.text" :url="item.url" />
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-white">
      &reg; Poliedro ltda. 2023. <br />
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
    }
  },
}
</script>

<style scoped></style>
