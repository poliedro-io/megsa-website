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
        <path
          d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
        />
      </svg>
    </div>

    <div
      data-aos="fade-up"
      data-aos-once="true"
      :class="['max-w-7xl mx-auto py-20', noPaddingX ? 'px-0' : 'px-4 sm:px-6 lg:px-16']"
    >
      <slot></slot>
    </div>

    <div v-if="separatorBottom" class="separator bottom">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style="fill: #fff; height: 115px; transform: rotate(180deg)"
        class="lg:w-[100%]"
      >
        <path
          d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
        />
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
