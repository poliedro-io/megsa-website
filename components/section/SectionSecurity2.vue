<template>
  <BaseSection id="solutions" class="bg-gray-800" separatorTop separatorBottom>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <BaseHeader alt color="yellow" center title="Nuestras directrices en materia de seguridad laboral" />
      </div>
    </div>

    <dl class="my-20 space-y-14 md:space-y-0 md:grid md:grid-cols-3 md:gap-y-8 md:gap-x-16">
      <BaseItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        mode="light"
      />
    </dl>

    <ContactButton centered />
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
