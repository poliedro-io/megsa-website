<template>
  <BaseSection id="us" bg-color="blue-50">
    <div class="lg:grid lg:grid-cols-2 lg:gap-28">
      <div>
        <BaseHeader color="blue" title="Nosotros" />

        <p class="section-paragraph">
          Somos una empresa especialista en la prestación de servicios con un importante énfasis en Sostenibilidad.
          Nuestras fortalezas:
        </p>

        <ul class="space-y-6 my-8">
          <li v-for="(item, index) of data" :key="index">
            <div class="flex items-center justify-between max-w-lg">
              <div class="flex items-center">
                <CheckDecagramOutlineIcon :size="28" class="text-yellow" />
                <span class="ml-4 text-gray-500">{{ item }}</span>
              </div>
            </div>
          </li>
        </ul>

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
  data() {
    return {
      data: [
        'Empresa Pequeña con más de 25 años de experiencia e historia.',
        'Presencia directa en 5 regiones de nuestro país y cobertura parcial en 7 regiones.',
        'Prestación de servicios intensivos en mano de obra.',
        'Dotación Total: 13 Colaboradores (5 migrantes + 8 nacionales).',
      ],
    }
  },
}
</script>
