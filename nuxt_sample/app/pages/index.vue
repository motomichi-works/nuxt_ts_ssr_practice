<template>
  <PageFrameType0001>
    <QiitaItemsContainer :identifiers="[]" :qiita-items="qiitaItems" />
  </PageFrameType0001>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// import components/common
import PageFrameType0001 from '~/components/common/page_frame_type_0001/index.vue'

// import components/pages
import QiitaItemsContainer from '~/components/pages/index/qiita_items_container/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PageFrameType0001,
    QiitaItemsContainer,
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
