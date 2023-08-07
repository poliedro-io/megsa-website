<template>
  <BaseSection noPaddingY class="min-h-[70vh] mt-[64px] mb-20 flex items-center" id="hero">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 items-center">
      <nuxt-img placeholder loading="lazy"
        sizes="sm:100vw lg:576px"
        class="py-8 lg:my-0 lg:order-last"
        data-aos="fade-up"
        data-aos-once="true"
        src="/img/hero.svg"
      />
      <div>
        <span
          data-aos="fade-right"
          data-aos-once="true"
          class="text-base text-blue font-semibold uppercase tracking-wide"
          >digitaliza tu empresa</span
        >
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
          class="text-gray-800 text-4xl sm:text-5xl xl:text-6xl font-extrabold"
        >
          Desarrollamos <br />
          <span class="text-blue">la solución</span> que necesites<span class="text-blue">.</span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="200"
          class="mt-4 text-gray-600 text-lg sm:text-xl"
        >
          Cada empresa es única. Por eso digitalizamos a la medida de las <b class="font-bold">necesidades únicas</b> de
          tu empresa.
        </p>

        <div class="md:flex md:space-x-4" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <button v-smooth-scroll href="#contact" outlined class="w-full md:w-40 btn blue mt-4">Contactar</button>
          <button v-smooth-scroll href="#brochure" outlined class="w-full md:w-40 btn yellow mt-4">Saber más</button>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  methods: {
    downloadBrochure() {
      const a = document.createElement('a')
      a.setAttribute('href', 'https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing')
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'brochure-poliedro.pdf')
      a.click()
    },
  },
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* .bg-gradient { */
/* background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  -webkit-text-fill-color: transparent; */
/* } */
</style>
