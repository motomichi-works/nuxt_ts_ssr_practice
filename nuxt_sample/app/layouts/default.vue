<template>
  <div class="l-body-inner-0001">
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
    <div class="l-body-inner-0001__footer-wrapper">フッターが入るところ</div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
@import '~/assets/scss/layouts/l-body-inner-0001.scss';
@import '~/assets/scss/modules/mod-header-0001.scss';
</style>
