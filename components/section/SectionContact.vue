<template>
  <BaseSection id="contact" class="dark-bg" separatorTop separatorBottom>
    <div class="lg:grid lg:grid-cols-2 lg:gap-16">
      <div class="bg-white my-16 self-center justify-start max-w-lg overflow-hidden rounded-full hidden lg:flex">
        <nuxt-img placeholder loading="lazy" sizes="sm:100vw lg:512px" src="/img/message.svg" />
      </div>
      <div class="max-w-xl mx-auto">
        <BaseHeader color="yellow" alt supertitle="Contáctanos" title="Respondemos al instante." />
        <p class="section-paragraph white">
          No dudes en contactarnos si quieres conocer nuestra forma de trabajo, las tecnologías que usamos o concertar
          una reunión para contarnos tu problema. <br />
          <a class="text-yellow hover:underline font-semibold" href="https://wa.me/56964033243">Hablemos por Whatsapp</a
          >, o envíanos un mensaje con el siguiente formulario:
        </p>
        <br />
        <ContactForm />
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
