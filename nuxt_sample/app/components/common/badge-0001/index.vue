<template>
  <span
    :data-selector="identifierStr"
    class="badge-0001"
    :class="modifierClasses"
    >{{ text }}</span
  >
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Badge0001',
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    text: {
      type: String as PropType<string>,
      required: true,
    },
    modifierClasses: {
      type: Array as PropType<string[]>,
      default: () => ['badge-0001--bg-color-red'],
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/badge-0001';
</style>
