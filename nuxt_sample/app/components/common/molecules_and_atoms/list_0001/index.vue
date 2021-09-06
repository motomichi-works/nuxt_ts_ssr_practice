<template>
  <ul class="list0001">
    <li
      v-for="(item, index) in items"
      :key="`${item}${index}`"
      class="list0001__item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'List0001',
  mixins: [everyChild],
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.list0001 {
  font-size: 16px;
  .list0001__item {
    padding-left: 1em;
    &::before {
      content: '・';
      margin-left: -1em;
    }
  }
  .list0001__item + .list0001__item {
    margin-top: 0.25em;
  }
}
</style>
