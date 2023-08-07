<template>
  <div class="w-full h-[100vh] flex flex-col items-center text-left lg:text-center p-4">
    <div class="lg:opacity-80 mb-6 w-[500px] max-w-[100%]">
      <nuxt-img placeholder loading="lazy"  sizes="sm:100vw lg:512px" class="max-h-[500px]" src="/img/message-blue.svg" />
    </div>
    <div class="max-w-lg mb-6">
      <p class="text-blue text-3xl sm:text-4xl leading-tight font-semibold mb-4">¡Mensaje enviado!</p>
      <p class="text-md">
        Gracias por contactarnos. Te contestaremos muy pronto enviándote un email o llamándote directamente si
        ingresaste tu número de teléfono en el formulario.
      </p>
    </div>

    <a class="btn blue w-full sm:w-40" href="../">Volver</a>
  </div>
</template>

<script>
export default {
  name: 'FormPage',
  layout: 'empty',
}
</script>
