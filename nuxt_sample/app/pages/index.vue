<template>
  <div :data-selector="identifierStr" class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <Heading0001
        :identifiers="[identifierStr, 'Lv1Heading']"
        text="pages/index.vue"
        :modifier-classes="['heading-0001--lv-1']"
        :tag-name="'h1'"
      />
    </div>
    <div class="l-contents-type-0001__body">
      <section class="container-0001">
        <div class="container-0001__heading-wrapper">
          <Heading0001
            :identifiers="[identifierStr, 'Lv2HeadingA']"
            text="Lv2の見出し"
          />
        </div>
        <div class="container-0001__body">
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

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    Heading0001,
  },
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
@import '~/assets/scss/layouts/l_contents_type_0001';
// modules
@import '~/assets/scss/modules/container_0001';
</style>
