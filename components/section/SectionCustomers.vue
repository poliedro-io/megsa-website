<template>
  <BaseSection :id="'customers'">
    <div class="my-20">
      <div class="lg:text-center">
        <BaseHeader color="blue" center title="Nuestros principales clientes" />
      </div>

      <div data-aos="fade-up" class="my-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <a
          v-for="(item, index) of items"
          :key="index"
          target="_blank"
          :href="item.url"
          class="cursor-pointer brand px-4 h-[100px] flex items-center justify-center bg-gray-100 rounded-md"
        >
          <nuxt-img
            placeholder
            loading="lazy"
            width="300px"
            :src="'/img/customers/' + item.name + '.webp'"
            :alt="item.name"
          />
        </a>
      </div>
    </div>
  </BaseSection>
</template>

<script>
export default {
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
