<template>
  <div :data-selector="identifierStr" class="l-body-inner-0001">
    <div class="l-body-inner-0001__header-wrapper">
      <header class="header-0001">
        <div class="header-0001__inner">
          <div class="header-0001__logo-area">
            <NuxtLink to="/" class="header-0001__logo">ロゴ</NuxtLink>
          </div>
        </div>
      </header>
    </div>
    <div class="l-body-inner-0001__contents-wrapper">
      <Nuxt />
    </div>
    <div class="l-body-inner-0001__footer-wrapper">
      <footer class="footer-0001">
        <div class="footer-0001__copy-area">
          <NuxtLink to="/" class="footer-0001__copy">
            &copy;MotomichiWorks
          </NuxtLink>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
// mixins
import everyLayout from '~/mixins/common/every_layout'

export default {
  mixins: [everyLayout],
}
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l_body_inner_0001.scss';
// modules
@import '~/assets/scss/modules/header_0001.scss';
@import '~/assets/scss/modules/footer_0001.scss';
</style>
