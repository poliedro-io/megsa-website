<template>
  <BaseSection id="brochure" class="dark-bg">
    <div class="py-16">
      <BaseHeader alt color="yellow" center supertitle="Conócenos" title="Revisa nuestra presentación" />
      <p class="section-paragraph white max-w-lg sm:text-center sm:mx-auto">
        Te invitamos a descargar nuestro Brochure en formato PDF para que nos conozcas mejor. Te recomendamos
        especialmente la sección <b>Historias de digitalización</b>:
      </p>
      <div class="flex justify-center mt-10 flex-col sm:flex-row gap-4">
        <a
          href="https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing"
          target="_blank"
          download="brochure-poliedro.pdf"
          class="btn yellow w-full sm:w-40"
          >Descargar</a
        >
        <a
          v-smooth-scroll
          href="#contact"
          class="btn blue w-full sm:w-40"
          >Contactar</a
        >
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
