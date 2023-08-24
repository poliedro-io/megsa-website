<template>
  <BaseSection id="us" bg-color="blue-50">
    <div class="lg:grid lg:grid-cols-2 lg:gap-28">
      <div>
        <BaseHeader color="blue" title="Sobre Nosotros" />

        <p class="section-paragraph">
          Somos una empresa especialista en la prestación de servicios de
          <b>aseo industrial, mantenimiento y certificación de equipos</b>, con énfasis en la sostenibilidad.
        </p>

        <ul class="space-y-6 my-8">
          <li v-for="(item, index) of data" :key="index">
            <div class="flex items-center justify-between max-w-lg">
              <div class="flex items-center">
                <CheckDecagramOutlineIcon :size="28" class="text-blue" />
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
        <p class="text-gray-600 text-2xl leading-tight">Nuestras fortalezas:</p>
        <dl class="my-8 space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
          <BaseItem
            v-for="(item, index) in items || []"
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
  data() {
    return {
      data: [
        'Tenemos más de 25 años de experiencia e historia.',
        'Tenemos presencia directa en 5 regiones de nuestro país y cobertura parcial en 7 regiones.',
        'Prestamos servicios intensivos en mano de obra.',
        'Tenemos una dotación total de 13 colaboradores (5 migrantes + 8 nacionales).',
      ],
    }
  },
}
</script>
