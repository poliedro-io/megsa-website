<template>
  <BaseSection no-padding-x id="solutions" class="bg-gray-800" separatorTop separatorBottom>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <BaseHeader alt color="yellow" center title="Nuestros servicios" />
      </div>

      <div class="flex lg:justify-center">
        <p class="section-paragraph white max-w-2xl lg:text-center">
          Nuestra empresa colabora en las diferentes áreas productivas: Desde aseo industrial hasta el mantenimiento y
          certificación de equipos y Aero-plantas en los diferentes aeropuertos de nuestro país. También estamos en
          mercados de centro América: Guatemala, Salvador y Honduras, por medio de nuestra filial Praind-Consultores.
        </p>
      </div>
    </div>

    <div class="my-12">
      <div class="px-8 pb-6 snap-x flex overflow-x-auto w-full gap-4 md:snap-none md:grid md:grid-cols-3 md:gap-16">
        <div
          v-for="(item, index) in items || []"
          :key="index"
          class="group scroll-ml-4 snap-start shrink-0 w-[80%] md:w-[100%] cursor-default"
        >
          <div class="flex justify-center align-center shadow-xl bg-white rounded-lg overflow-hidden">
            <nuxt-img
              loading="lazy"
              width="500"
              height="333"
              class="relative shrink-0 group-hover:opacity-80 w-[100%]"
              :src="'/img/solutions/' + item.image"
              :alt="item.title"
            />
          </div>
          <p class="mt-8 mb-4 text-xl text-white font-medium">{{ item.title }}</p>
          <p class="text-md text-gray-200 group-hover:text-white">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 sm:px-6 lg:px-16">
      <ContactButton centered />
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
