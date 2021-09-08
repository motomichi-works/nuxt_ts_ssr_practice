<template>
  <PagePreGeneralPurpose0001 page-heading-text="qiita_items/index">
    <OrgQiitaItemsContainer
      :identifiers="['OrgQiitaItems']"
      :qiita-items="qiitaItems"
    />
  </PagePreGeneralPurpose0001>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// import components/molecules_and_atoms
import PagePreGeneralPurpose0001 from '~/components/common/page_presentationals/page_pre_general_purpose_0001.vue'

// import components/orgs
import OrgQiitaItemsContainer from '~/components/qiita_items/index/org_containers/org_qiita_items_container.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePreGeneralPurpose0001,
    OrgQiitaItemsContainer,
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
