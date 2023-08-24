<template>
  <BaseSection id="contact" class="bg-gray-800" separatorTop>
    <div class="grid lg:gap-x-16 grid-col lg:grid-cols-2">
      <div class="max-w-full">
        <BaseHeader alt title="Contacto" />
        <p class="section-paragraph white">
          ¿Necesitas alguno de nuestros servicios, o quieres saber mas sobre nosotros? Estaremos encantados de conversar
          y responder cualquier consulta que tengas. Contáctanos por calquiera de estos medios:
        </p>
        <br />

        <div class="grid xl:grid-cols-3 gap-6 lg:my-8">
          <a
            :href="item.url"
            v-for="(item, index) of items"
            :key="index"
            class="flex align-middle flex-col gap-2 group"
          >
            <component :is="item.icon" :size="60" class="text-gray-200 group-hover:text-white flex justify-center" />
            <p class="text-center text-gray-200 group-hover:text-white">{{ item.text }}</p>
          </a>
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <ContactForm />
      </div>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      items: [
        {
          text: 'contacto@megsa.cl',
          icon: 'email-icon',
          url: 'mailto:contacto@megsa.cl',
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
