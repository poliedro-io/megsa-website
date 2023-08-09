<template>
  <div :class="['mt-16 flex', centered ? 'justify-center' : 'justify-start']">
    <a v-smooth-scroll href="#contact" class="btn blue w-full sm:w-40">Contactar</a>
  </div>
</template>

<script>
export default {
  props: {
    centered: Boolean,
  },
}
</script>
