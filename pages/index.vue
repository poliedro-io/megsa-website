<template>
  <div class="w-full">
    <SectionHero />

    <SectionUs :items="strenghts" />

    <SectionSolutions :items="solutions" />

    <SectionSecurity :items="security" />

    <SectionCustomers :items="customers" />

    <SectionContact />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const solutions = await $content('solutions', params.slug).sortBy('id', 'asc').fetch()
    const strenghts = await $content('strenghts', params.slug).sortBy('id', 'asc').fetch()
    const security = await $content('security', params.slug).sortBy('id', 'asc').fetch()
    const customers = await $content('customers', params.slug).sortBy('id', 'asc').fetch()
    return {
      solutions,
      strenghts,
      security,
      customers,
    }
  },
}
</script>
