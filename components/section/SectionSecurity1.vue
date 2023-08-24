<template>
  <BaseSection id="security">
    <div class="lg:grid lg:grid-cols-2 lg:gap-16">
      <div>
        <BaseHeader title="Seguridad como primer valor" color="blue" />

        <p class="section-paragraph">
          Todas las actividades que realizamos traen consigo un determinado riesgo, el cual puede aumentar o disminuir
          en función de nuestras acciones.
        </p>
        <p class="section-paragraph">
          Con el fin de evitar cualquier daño tanto a nosotros, los equipos o el medio ambiente, son necesarios diversos
          controles, los cuales varían de acuerdo a cada labor a realizar.
        </p>

        <div class="my-8 lg:flex lg:justify-center max-w-lg">
          <nuxt-img placeholder loading="lazy" sizes="sm:100vw lg:512px" src="/img/digitalization.svg" />
        </div>
      </div>
      <div>
        <p class="text-gray-600 text-2xl leading-tight">Cómo controlamos el sistema de gestión de SST:</p>
        <dl class="my-8 space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-16">
          <BaseItem
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          />
        </dl>

        <ContactButton />
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
