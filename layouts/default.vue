<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <BaseNavbar />

      <WhatsappButton />
      <main class="text-neutral-800">
        <Nuxt />
      </main>

      <BaseFooter />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
