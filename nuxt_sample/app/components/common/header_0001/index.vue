<template>
  <header :data-selector="joinedIdentifiers" class="header-0001">
    <div class="header-0001__inner">
      <div class="header-0001__logo-area">
        <NuxtLink to="/" class="header-0001__logo">ロゴ</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Header0001',
  mixins: [everyChild],
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/header_0001';
</style>
