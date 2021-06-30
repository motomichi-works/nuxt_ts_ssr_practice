<template>
  <footer :data-selector="joinedIdentifiers" class="footer-0001">
    <div class="footer-0001__copy-area">
      <NuxtLink to="/" class="footer-0001__copy">
        &copy;MotomichiWorks
      </NuxtLink>
    </div>
  </footer>
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
