<template>
  <footer class="mx-auto bg-gray-900">
    <div class="w-full">
      <div class="w-full py-20 grid md:grid-cols-2 gap-8 px-6">
        <a class="flex justify-center items-center" v-smooth-scroll href="#home">
          <nuxt-img
            placeholder
            loading="lazy"
            src="/img/logo-lg-invert.png"
            class="hover:opacity-100 h-20"
            alt="Logo Megsa"
          />
        </a>
        <div>
          <p class="text-lg text-semibold text-gray-200 mb-6">Contacto</p>
          <ul class="space-y-4">
            <li v-for="(item, index) of contact" :key="index" class="flex space-x-4">
              <component :is="item.icon" class="text-white"></component>
              <NavLink alt :name="item.text" :url="item.url" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center">
      <a href="https://www.poliedro.io" target="_blank" class="text-xs text-white">&reg; Poliedro 2023 <br /></a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
  data() {
    return {
      contact: [
        {
          text: 'Bellavista Parc.15, La Serena, IV Región',
          icon: 'map-marker-outline-icon',
          url: 'https://www.google.com/maps/search/BELLAVISTA+PC15,+LA+SERENA,+IV+REGION+COQUIMBO,+CHILE/@-29.9290483,-71.1856772,17.17z?entry=ttu',
        },
        {
          text: 'contacto@megsa.cl',
          icon: 'email-icon',
          url: 'mailto: contacto@megsa.cl',
        },
        {
          text: 'Megsa SpA',
          icon: 'linkedin-icon',
          url: 'https://www.linkedin.com/in/megsa-spa-52b814170',
        },
        {
          text: 'contacto@megsa.cl',
          icon: 'email-icon',
          url: 'mailto: contacto@megsa.cl',
        },
        {
          text: '+56973306950',
          icon: 'whatsapp-icon',
          url: 'https://wa.me/56973306950',
        },
        {
          text: '+56973306950',
          icon: 'phone-icon',
          url: 'tel:56973306950',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
