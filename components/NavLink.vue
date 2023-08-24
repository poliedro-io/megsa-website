<template>
  <div class="w-full">
    <a
      v-smooth-scroll
      :class="[
        'py-2 text-sm bg-transparent rounded-lg focus:outline-none focus:shadow-outline',
        alt ? 'text-gray-200 hover:text-white' : 'text-[#666666] hover:text-gray-900',
      ]"
      :href="url"
    >
      {{ name }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    alt: Boolean,
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
