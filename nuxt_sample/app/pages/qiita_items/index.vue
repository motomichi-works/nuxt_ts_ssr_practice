<template>
  <PagePresentational0001 page-heading-text="index.vue">
    <OrgQiitaItems :identifiers="['OrgQiitaItems']" :qiita-items="qiitaItems" />
  </PagePresentational0001>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// import components/common
import PagePresentational0001 from '~/components/common/page_presentational_0001/index.vue'

// import components/pages
import OrgQiitaItems from '~/components/pages/qiita_items/qiita_items_container/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePresentational0001,
    OrgQiitaItems,
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
