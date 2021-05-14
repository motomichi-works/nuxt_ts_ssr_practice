<template>
  <div :data-selector="identifierStr" class="l-body-inner-0001">
    <div class="l-body-inner-0001__header-wrapper">
      <header class="mod-header-0001">
        <div class="mod-header-0001__inner">
          <div class="mod-header-0001__logo-area">
            <NuxtLink to="/" class="mod-header-0001__logo">ロゴ</NuxtLink>
          </div>
        </div>
      </header>
    </div>
    <div class="l-body-inner-0001__contents-wrapper">
      <Nuxt />
    </div>
    <div class="l-body-inner-0001__footer-wrapper">
      <footer class="mod-footer-0001">
        <div class="mod-footer-0001__copy-area">
          <NuxtLink to="/" class="mod-footer-0001__copy">
            &copy;MotomichiWorks
          </NuxtLink>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    identifierStr() {
      return 'BodyInner'
    },
  },
}
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// layouts
@import '~/assets/scss/layouts/l-body-inner-0001.scss';
// modules
@import '~/assets/scss/modules/mod-header-0001.scss';
@import '~/assets/scss/modules/mod-footer-0001.scss';
</style>
