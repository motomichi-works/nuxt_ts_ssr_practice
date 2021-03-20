<template>
  <div class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">pages/index.vue</h1>
    </div>
    <div class="l-contents-type-0001__body">
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">見出し lv2</h2>
        </div>
        <div class="mod-container-0001__body">
          ここにコンテンツのモジュールが入ります。
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// layouts
@import '~/assets/scss/layouts/l-contents-type-0001';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>
