<template>
  <a
    href="https://wa.me/56964033243"
    class="no-select wsp rounded-full text-white p-4 shadow-lg"
    :class="[{ invisible: !isButtonVisible }]"
  >
    <whatsapp-icon :size="32"></whatsapp-icon>
  </a>
</template>

<script>
export default {
  data() {
    return {
      isButtonVisible: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const y = window.scrollY
      this.isButtonVisible = y > 200
    },
  },
}
</script>

<style scoped>
.wsp {
  background: rgb(68, 192, 82);
  background: linear-gradient(218deg, rgba(68, 192, 82, 1) 0%, rgba(62, 175, 75, 1) 100%);
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  z-index: 10;
  opacity: 1;
  transition: all 150ms ease-in-out;
}

.wsp.invisible {
  pointer-events: none;
  opacity: 0;
  transition: all 150ms ease-in-out;
}

.wsp:hover {
  filter: brightness(1.2);
}
.wsp:after {
  content: '';
  position: absolute;
  z-index: -1;
  background: #44c052;

  border-radius: 50%;
  animation-name: expansive;
  animation-duration: 8s;
  animation-timing-function: cubic-bezier(0.01, 0.53, 0.22, 0.73);
  animation-iteration-count: infinite;
}
@keyframes expansive {
  0% {
    left: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    opacity: 0.4;
  }
  10% {
    left: -32px;
    bottom: -32px;
    width: 128px;
    height: 128px;
    opacity: 0;
  }
  11% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  100% {
    width: 0;
    height: 0;
    opacity: 0;
  }
}
</style>
