<template>
  <BaseSection id="contact" class="bg-gray-800" separatorTop>
    <div class="flex justify-center">
      <div class="max-w-xl mx-auto">
        <BaseHeader color="yellow" alt title="Contacto" />
        <p class="section-paragraph white">
          ¿Tienes preguntas o buscas colaboración? Completa el formulario para recibir asesoramiento personalizado y
          comenzar nuestra asociación hacia un rendimiento excepcional y entornos más sostenibles.
        </p>
        <p class="section-paragraph white">
          Estaremos encantados de recibir tu mensaje y responder a cualquier consulta que tengas.
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
