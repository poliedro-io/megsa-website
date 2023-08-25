<template>
  <BaseSection
    noPadding
    class="min-h-[70vh] mt-[64px] mb-20 flex items-center bg-[url('/img/bg.webp')] bg-cover"
    id="home"
  >
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 items-center">
      <div>
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
          class="text-white font-serif text-5xl xl:text-6xl font-bold"
        >
          Expertos en aseo, mantención y reparación industrial
        </h1>
        <p data-aos="fade-right" data-aos-once="true" data-aos-delay="200" class="my-4 text-gray-50 text-lg sm:text-xl">
          Buscamos la excelencia en cada detalle. Tu confianza es nuestra motivación.
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
