<template>
  <section :id="id" v-bind="$attrs" :class="['relative', { 'pt-24': separatorTop }, { 'pb-24': separatorBottom }]">
    <div v-if="separatorTop" class="separator top">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style="fill: #fff; height: 115px"
        class="lg:w-[100%]"
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>

    <div
      data-aos="fade-up"
      data-aos-once="true"
      :class="['max-w-7xl mx-auto py-8 md:py-20', noPaddingX ? 'px-0' : 'px-4 sm:px-6 lg:px-16']"
    >
      <slot></slot>
    </div>

    <div v-if="separatorBottom" class="separator bottom">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style="fill: #fff; height: 115px; transform: rotate(180deg) scaleX(-1)"
        class="lg:w-[100%]"
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>
  </section>
</template>
<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  name: 'BaseSection',
  props: {
    id: {
      type: String,
      default: '',
    },
    noPaddingY: Boolean,
    noPaddingX: Boolean,
    separatorTop: Boolean,
    separatorBottom: Boolean,
  },
}
</script>

<style scoped>
.separator {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
}
.separator.top {
  top: -2px;
}
.separator.bottom {
  bottom: -2px;
}
</style>
