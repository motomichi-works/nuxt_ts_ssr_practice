<template>
  <span
    :data-identifier="identifier"
    class="badge0001"
    :class="modifierClasses"
  >
    {{ text }}
  </span>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

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
      default: () => ['badge0001--bg-color-red'],
    },
  },
})
</script>

<style lang="scss" scoped>
.badge0001 {
  display: inline-block;
  line-height: 26px;
  height: 26px;
  font-size: 12px;
  font-weight: 700;
  padding: 0 12px;
  color: #ffffff;
  background: #e40909;
  &.badge0001--bgColorGray {
    background: #777777;
  }
}
</style>
