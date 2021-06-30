<template>
  <span
    :data-selector="joinedIdentifiers"
    class="badge-0001"
    :class="modifierClasses"
    >{{ text }}</span
  >
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
