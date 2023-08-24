<template>
  <div class="cursor-default">
    <dt>
      <div
        :class="[
          iconBg,
          shadow,
          `text-${iconColor}`,
          'transition-all flex items-center justify-center h-14 w-14 rounded-md p-4 mb-4',
        ]"
      >
        <component :is="icon" :size="28" />
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
    const { iconBg, iconColor, titleColor, textColor, shadow } = modes[this.mode]
    return {
      iconBg,
      iconColor,
      titleColor,
      textColor,
      shadow,
    }
  },
}
const modes = {
  light: {
    iconBg: 'bg-white',
    iconColor: 'blue',
    titleColor: 'white',
    textColor: 'gray-200',
    shadow: 'shadow-md shadow-white' + '-500/50',
  },
  dark: {
    iconBg: 'bg-blue',
    iconColor: 'white',
    titleColor: 'blue',
    textColor: 'gray-600',
    shadow: 'shadow-md shadow-blue' + '-500/50',
  },
}
</script>
