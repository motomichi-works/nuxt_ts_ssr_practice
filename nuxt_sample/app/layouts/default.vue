<template>
  <div :data-selector="joinedIdentifiers" class="l-bodyInner0001">
    <div class="l-bodyInner0001__headerWrapper">
      <Header0001 :identifiers="[...identifiers, 'Header0001']" />
    </div>
    <div class="l-bodyInner0001__contentsWrapper">
      <Nuxt />
    </div>
    <div class="l-bodyInner0001__footerWrapper">
      <Footer0001 :identifiers="[...identifiers, 'Footer0001']" />
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
</style>
