<template>
  <div class="w-full">
    <SectionHero />

    <SectionUs :items="strenghts" />

    <SectionSolutions :items="solutions" />

    <SectionSecurity1 :items="security1" />

    <SectionSecurity2 :items="security2" />

    <SectionDealers :items="dealers" />

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
    const security1 = await $content('security-1', params.slug).sortBy('id', 'asc').fetch()
    const security2 = await $content('security-2', params.slug).sortBy('id', 'asc').fetch()
    const customers = await $content('customers', params.slug).sortBy('id', 'asc').fetch()
    const dealers = await $content('dealers', params.slug).sortBy('id', 'asc').fetch()
    return {
      solutions,
      strenghts,
      security1,
      security2,
      customers,
      dealers,
    }
  },
}
</script>
