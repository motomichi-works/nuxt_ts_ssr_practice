<template>
  <div>hoge</div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'FontAwesome5Container',
  components: {},
  props: {
    moduleIds: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/mod-container-0001';
</style>
