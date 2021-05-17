<template>
  <div :data-selector="identifierStr" class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="heading-0001 heading-0001--lv-1">pages/index.vue</h1>
    </div>
    <div class="l-contents-type-0001__body">
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="heading-0001">見出し lv2</h2>
        </div>
        <div class="mod-container-0001__body">
          ここにコンテンツのモジュールが入ります。
          <div>
            qiitaから取得したitem情報のサンプル: {{ items[0].created_at }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// Vue.extend
export default Vue.extend({
  async asyncData(context: Context): Promise<any> {
    const { app } = context
    const items = await app.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    return {
      items,
    }
  },
  computed: {
    identifierStr() {
      return 'Contents'
    },
  },
})
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l-contents-type-0001';
// modules
@import '~/assets/scss/modules/mod-container-0001';
</style>
