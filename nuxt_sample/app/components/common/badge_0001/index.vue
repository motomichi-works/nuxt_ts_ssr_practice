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
import Vue, { PropType } from 'vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001',
  mixins: [everyChild],
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
