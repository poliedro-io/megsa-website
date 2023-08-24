<template>
  <BaseSection noPaddingY class="min-h-[70vh] mt-[64px] mb-20 flex items-center" id="home">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 items-center">
      <nuxt-img
        placeholder
        loading="lazy"
        sizes="sm:100vw lg:576px"
        class="py-8 lg:my-0 lg:order-last"
        data-aos="fade-up"
        data-aos-once="true"
        src="/img/hero.svg"
      />
      <div>
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
          class="text-gray-800 font-serif text-4xl sm:text-5xl xl:text-6xl font-bold"
        >
          Aseo industrial, mantenimiento y certificación de equipos
        </h1>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="200"
          class="mt-4 text-gray-600 text-lg sm:text-xl"
        >
          Bajada de titulo con un mensaje complementario
        </p>

        <div class="md:flex md:space-x-4" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <a href="#contact" outlined class="w-full md:w-40 btn gray mt-4">Contactar</a>
          <a href="#us" outlined class="w-full md:w-40 btn blue mt-4">Saber más</a>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
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
