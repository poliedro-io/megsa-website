<template>
  <div class="fixed top-0 left-0 right-0 z-10 shadow-md">
    <nav id="navbar" class="transition duration-150 relative bg-white">
      <div class="max-w-7xl mx-auto px-2 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 right-0 flex items-center xl:hidden">
            <button
              id="menu-button"
              type="button"
              :class="[
                isNavbarActive || isMenuActive ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-800 hover:text-white',
                'inline-flex items-center justify-center active:bg-none p-2 rounded-full  focus:outline-none',
              ]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleMenu"
            >
              <span class="sr-only">Abrir Menu</span>
              <MenuIcon v-if="!isMenuActive" />
              <CloseIcon v-else />
            </button>
          </div>

          <div class="flex-1 flex items-center lg:justify-between">
            <a href="#home" class="flex-shrink-0 flex items-center cursor-pointer" v-smooth-scroll>
              <nuxt-img
                placeholder
                loading="lazy"
                :class="[{ invert: !isNavbarActive && !isMenuActive }, 'h-8 w-auto']"
                src="/img/logo-lg.png"
                width="auto"
                height="100"
                alt="megsa"
              />
            </a>
            <div class="hidden xl:block">
              <div class="flex align-center space-x-4">
                <a
                  v-for="(item, index) of sections"
                  :key="index"
                  :href="item.id"
                  v-smooth-scroll
                  v-bind:class="[{ selected: isSelected(item.id) }, { alt: !isNavbarActive }, 'navbar-item']"
                  aria-current="page"
                  >{{ item.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" :class="['bg-gray-800 xl:hidden shadow-xl', isMenuActive ? 'active' : '']">
        <div class="py-4 space-y-2">
          <a
            v-for="(item, index) of sections"
            :key="index"
            v-smooth-scroll
            :href="item.id"
            v-bind:class="[{ selected: isSelected(item.id) }, 'navbar-item']"
            aria-current="page"
            @click="isMenuActive = false"
            >{{ item.title }}</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    const sections = [
      { title: 'Inicio', id: '#home' },
      { title: 'Nosotros', id: '#us' },
      { title: 'Servicios', id: '#solutions' },
      { title: 'Seguridad', id: '#security' },
      { title: 'Clientes', id: '#customers' },
      { title: 'Contacto', id: '#contact' },
    ]
    return {
      open: false,
      dropdownNavbar: false,
      sections,
      currentId: null,
      isMenuActive: false,
      isNavbarActive: true,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', (event) => {
      if (this.isMenuActive) {
        const navbar = document.getElementById('navbar')
        const menu = document.getElementById('mobile-menu')
        const isClickOnNavbar = navbar.contains(event.target)
        const isClickOnMenu = menu.contains(event.target)
        if (!isClickOnNavbar && !isClickOnMenu) {
          this.isMenuActive = false
        }
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.isMenuActive = false
      const h = window.innerHeight
      const current = this.sections.find(({ id }) => {
        const { top, bottom } = document.querySelector(id).getBoundingClientRect()
        return top <= h / 3 && bottom > h / 3
      })
      if (current) {
        this.currentId = current.id
      } else {
        this.currentId = null
      }
    },
    isSelected(id) {
      return id === this.currentId
    },
    toggleMenu() {
      setTimeout(() => {
        this.isMenuActive = !this.isMenuActive
      }, 5)
    },
    downloadBrochure() {
      const a = document.createElement('a')
      a.setAttribute('href', 'https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing')
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'brochure-poliedro.pdf')
      a.click()
    },
  },
}
</script>

<style scoped>
#mobile-menu {
  position: absolute;
  opacity: 0;
  top: -356px;
  left: 0;
  right: 0;
  z-index: -1;
  transition: all 150ms ease-in-out;
}
.active {
  transform: translateY(calc(356px + 64px));
  opacity: 1 !important;
}
.invert {
  filter: invert(1);
}
</style>
