<template>
  <div :data-joined-identifiers="joinedIdentifiers" class="l-contentsType0001">
    <div class="l-contentsType0001__headerWrapper">
      <Header0001 :identifiers="[...identifiers, 'Header0001']" />
    </div>
    <div class="l-contentsType0001__contentsWrapper">
      <div class="l-contentsType0001__headingWrapper">
        <Heading0001
          :identifiers="[...identifiers, 'Lv1Heading']"
          text="pages/index.vue"
          :modifier-classes="['heading0001--Lv1']"
          :tag-name="'h1'"
        />
      </div>
      <div class="l-contentsType0001__body">
        <section class="container-0001">
          <div class="container-0001__heading-wrapper">
            <Heading0001
              :identifiers="[...identifiers, 'Lv2HeadingA']"
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
    <div class="l-contentsType0001__footerWrapper">
      <Footer0001 :identifiers="[...identifiers, 'Footer0001']" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import { Context } from '@nuxt/types'
import Vue from 'vue'

// mixins
import everyPage from '~/mixins/common/every_page'

// Vue.extend
export default Vue.extend({
  mixins: [everyPage],
  async asyncData(context: Context): Promise<any> {
    const { app } = context
    const items = await app.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    return {
      items,
    }
  },
})
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l_contents_type_0001';
// modules
@import '~/assets/scss/modules/container_0001';
</style>
