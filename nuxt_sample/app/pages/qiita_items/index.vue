<template>
  <PagePresentational0001 page-heading-text="index.vue">
    <QiitaItems :identifiers="['QiitaItems']" :qiita-items="qiitaItems" />
  </PagePresentational0001>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// import components/molecules_and_atoms
import PagePresentational0001 from '~/components/molecules_and_atoms/page_presentational_0001/index.vue'

// import components/organisms
import QiitaItems from '~/components/organisms/qiita_items/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePresentational0001,
    QiitaItems,
  },
  async asyncData(context: Context): Promise<any> {
    const { app } = context
    const qiitaItems = await app.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    return {
      qiitaItems,
    }
  },
})
</script>

<style lang="scss" scoped></style>
