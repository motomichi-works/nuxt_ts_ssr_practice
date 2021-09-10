<template>
  <PagePreShared0001 page-heading-text="qiita_items/index">
    <OrgConQiitaItems
      :identifier="'OrgPreQiitaItems'"
      :qiita-items="qiitaItems"
    />
  </PagePreShared0001>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// import components/molecules_and_atoms
import PagePreShared0001 from '~/components/common/page_presentationals/page_pre_shared_0001.vue'

// import components/orgs
import OrgConQiitaItems from '~/components/qiita_items/index/org_containers/org_con_qiita_items.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePreShared0001,
    OrgConQiitaItems,
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
