<template>
  <div class="cursor-default">
    <dt>
      <div :class="[bgColor, shadow,  'transition-all flex items-center justify-center h-14 w-14 rounded-md p-4 text-white bg-lue']">
        <component :is="icon" :size="28" />
      </div>
      <p :class="['mt-4 text-base font-medium', textColor]">{{ title }}</p>
    </dt>
    <dd class="mt-2 text-sm text-gray-500">
      {{ description }}
    </dd>
  </div>
</template>
<script>
export default {
  name: 'BaseItem',
  props: {
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    icon: {type: String, default: ''},
    color: {type: String, default: 'blue'}
  },
  data(){
    // const color = ['blue', 'yellow', 'green', 'violet'][this.index % 4] 
    return {
      bgColor: 'bg-' + this.color,
      textColor: 'text-' + this.color,
      shadow: 'shadow-md shadow-' + this.color + '-500/50'
    }
  }
}
</script>
