<template>
  <div class="group cursor-default">
    <dt>
      <div
        :class="[
          'group-hover:shadow-md group-hover:shadow-blue-500/50',
          mode === 'dark' ? 'group-hover:bg-blue-800' : 'group-hover:text-blue-800',
          iconBg,
          `text-${iconColor}`,
          'transition-all flex items-center justify-center h-14 w-14 rounded-md p-4 mb-4',
        ]"
      >
        <component :is="icon" :size="32" />
      </div>
      <p v-if="title" :class="['text-base font-medium', `text-${titleColor}`]">{{ title }}</p>
    </dt>
    <dd :class="['mt-2 text-sm', `text-${textColor}`]">
      {{ description }}
    </dd>
  </div>
</template>
<script>
export default {
  name: 'BaseItem',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
    mode: { type: String, default: 'dark', validator: (value) => ['light', 'dark'].includes(value) },
  },
  data() {
    const { iconBg, iconColor, titleColor, textColor } = modes[this.mode]
    return {
      iconBg,
      iconColor,
      titleColor,
      textColor,
    }
  },
}
const modes = {
  light: {
    iconBg: 'bg-white',
    iconColor: 'blue',
    titleColor: 'white',
    textColor: 'gray-200',
  },
  dark: {
    iconBg: 'bg-blue',
    iconColor: 'white',
    titleColor: 'blue',
    textColor: 'gray-600',
  },
}
</script>
