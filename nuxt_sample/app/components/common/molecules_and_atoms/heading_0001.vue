<template>
  <component
    :is="tagName"
    :data-identifier="identifier"
    class="heading0001"
    :class="modifierClasses"
    >{{ text }}</component
  >
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Heading0001',
  mixins: [everyChild],
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
.heading0001 {
  font-weight: bold;
  font-size: 28px;
  color: #222222;
  border-bottom: 1px solid #cccccc;
  padding: 0.1em 0;
  line-height: 1.4;
  word-break: break-all;
  &.heading0001--Lv1 {
    font-size: 32px;
    border-bottom: 0;
  }
  &.heading0001--Lv3 {
    font-size: 24px;
  }
  &.heading0001--Lv4 {
    font-size: 21px;
  }
  &.heading0001--Lv5 {
    font-size: 18px;
  }
  &.heading0001--Lv6 {
    font-size: 16px;
  }
}
</style>
