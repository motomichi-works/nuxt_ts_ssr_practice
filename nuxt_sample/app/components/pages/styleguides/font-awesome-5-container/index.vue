<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">FontAwesome5</h2>
    </div>
    <div class="mod-container-0001__body">
      <fa :icon="fa.search" />
      <fa :icon="fa.searchPlus" />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'FontAwesome5Container',
  mixins: [base],
  computed: {
    fa() {
      return {
        search: faSearch,
        searchPlus: faSearchPlus,
      }
    },
  },
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>
