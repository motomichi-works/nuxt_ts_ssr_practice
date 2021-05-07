<template>
  <section class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">fontawesome5</h2>
    </div>
    <div class="mod-container-0001__body">
      <fa :icon="fa.search" />
      <fa :icon="fa.searchPlus" />
    </div>
  </section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  name: 'FontAwesome5Container',
  components: {},
  props: {
    moduleIds: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
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
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>
