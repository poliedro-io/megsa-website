<template>
  <BaseSection id="features" bg-color="blue-50">
    <div class="lg:grid lg:grid-cols-2 lg:gap-28">
      <div>
        <BaseHeader color="blue" supertitle="soluciones modernas" title="Integramos las últimas tecnologías web." />

        <p class="section-paragraph">
          En Poliedro nos apasiona la tecnología, y procuramos estar siempre al día con las últimas herramientas
          digitales. De esta forma nos aseguramos de entregar siempre soluciones potentes, eficientes e intuitivas.
        </p>

        <div class="lg:flex lg:justify-center max-w-lg my-8">
          <nuxt-img placeholder loading="lazy" sizes="sm:100vw lg:512px" src="/img/rocket.svg" />
        </div>
      </div>

      <div class="mt-10">
        <dl class="space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
          <BaseItem
            v-for="(item, index) in items || []"
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            color="blue"
          />
        </dl>

        <button v-smooth-scroll href="#contact" class="mt-16 w-full sm:w-40 btn blue">Contactar</button>
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
