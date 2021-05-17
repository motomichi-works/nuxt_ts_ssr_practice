<template>
  <component
    :is="tagName"
    :data-selector="identifierStr"
    class="mod-heading-0001"
    :class="modifierClasses"
    >{{ text }}</component
  >
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'Heading0001',
  mixins: [base],
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    modifierClasses: {
      type: Array as PropType<string[]>,
      default: () => [''],
    },
    tagName: {
      type: String as PropType<string>,
      default: 'h2',
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-heading-0001';
</style>
