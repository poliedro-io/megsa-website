<template>
  <BaseSection no-padding-x id="solutions" class="dark-bg" separatorTop separatorBottom>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <BaseHeader alt color="yellow" center title="Nuestros servicios" />
      </div>

      <div class="flex lg:justify-center">
        <p class="section-paragraph white max-w-2xl lg:text-center">
          Nuestra empresa colabora en las diferentes áreas productivas: Desde aseo industrial hasta el mantenimiento y
          certificación de equipos y Aero-plantas en los diferentes aeropuertos de nuestro país . También estamos en
          mercados de centro América: Guatemala, Salvador y Honduras, por medio de nuestra filial Praind-Consultores.
        </p>
      </div>
    </div>

    <div class="my-12">
      <div
        class="px-4 pb-6 snap-x flex overflow-x-auto w-full gap-4 md:snap-none md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-12"
      >
        <div
          v-for="(item, index) in items || []"
          :key="index"
          class="group scroll-ml-4 snap-start shrink-0 w-[80%] md:w-[100%] cursor-default"
        >
          <div
            class="max-w-[100%] h-[180px] rounded-lg overflow-hidden bg-white flex justify-center align-center shadow-xl"
          >
            <nuxt-img
              placeholder
              loading="lazy"
              width="300"
              class="relative shrink-0 w-auto group-hover:opacity-70"
              :src="'/img/solutions/' + item.image"
            />
          </div>
          <p class="mt-4 text-base font-medium text-yellow group-hover:text-yellow-400">{{ item.title }}</p>
          <p class="text-sm text-gray-200 group-hover:text-white">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-6 lg:px-8 sm:flex sm:justify-center">
      <a v-smooth-scroll href="#contact" class="btn yellow w-full sm:w-40">Contactar</a>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  props: ['items'],
}
</script>

<style>
.highlight {
  filter: brightness(2);
}
</style>
