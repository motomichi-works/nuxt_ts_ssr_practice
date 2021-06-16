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
import every from '~/mixins/common/every'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001',
  mixins: [every],
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
@import '~/assets/scss/modules/badge_0001';
</style>
