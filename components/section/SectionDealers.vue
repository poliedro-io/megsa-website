<template>
  <BaseSection :id="'dealers'">
    <div>
      <div class="lg:text-center">
        <BaseHeader color="blue" center title="Capacitaciones y certificaciones" />
        Proveemos capacitaciones y certificaciones de nivel internacional. Somos dealers oficiales de:
      </div>

      <div data-aos="fade-up" class="my-16 flex justify-center gap-10">
        <div class="flex flex-col gap-4 md:gap-12 max-w-3xl">
          <div
            v-for="(item, index) in items || []"
            :key="index"
            class="group grid md:grid-cols-3 gap-8 md:py-6 md:px-8 md:rounded-md md:hover:shadow-md"
          >
            <nuxt-img
              loading="lazy"
              class="rounded-md w-full my-auto"
              :src="'/img/dealers/' + item.image"
              :alt="item.title"
            />
            <div class="col-span-2">
              <p class="mb-4 text-xl font-medium">{{ item.title }}</p>
              <p class="text-sm text-gray-600 group-hover:text-gray-800">
                {{ item.description }}
              </p>
              <div class="flex justify-end mt-5">
                <a class="hover:underline" :href="item.link">Ver sitio web</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.brand > img {
  filter: grayscale(1) opacity(0.6);
  mix-blend-mode: multiply;
  transition: all ease-in-out 150ms;
  max-height: 80%;
}

@media (min-width: 768px) {
  .brand > img {
    max-width: 200px;
  }
}

.brand:hover > img {
  filter: grayscale(0) opacity(1);
}
</style>
