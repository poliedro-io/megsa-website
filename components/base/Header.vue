<template>
  <div class="mb-8">
    <p
      v-bind:class="[
        { 'text-left md:text-center md:mx-auto': center },
        alt ? 'text-white' : 'text-gray-800',
        'text-4xl sm:text-5xl  leading-tight font-serif font-bold max-w-xl',
      ]"
    >
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: {
    title: String,
    center: Boolean,
    alt: Boolean,
    color: {
      type: String,
      default: 'blue',
    },
  },
  data() {
    return {
      textColor: 'text-' + this.color,
    }
  },
}
</script>
