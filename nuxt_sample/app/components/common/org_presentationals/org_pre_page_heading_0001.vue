<template>
  <h1
    :data-identifier="identifier"
    class="orgPrePageHeading"
    v-text="pageHeadingText"
  />
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgPrePageHeading0001',
  mixins: [everyChild],
  props: {
    pageHeadingText: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.orgPrePageHeading {
  font-weight: bold;
  font-size: 32px;
  color: #222222;
  padding: 0.1em 0;
  line-height: 1.4;
  word-break: break-all;
}
</style>
