<template>
  <span
    :data-selector="identifierStr"
    class="badge-0001"
    :class="modifierClasses"
    >{{ text }}</span
  >
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001',
  mixins: [base],
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    modifierClasses: {
      type: Array as PropType<string[]>,
      default: () => ['badge-0001--bg-color-red'],
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/badge-0001';
</style>
