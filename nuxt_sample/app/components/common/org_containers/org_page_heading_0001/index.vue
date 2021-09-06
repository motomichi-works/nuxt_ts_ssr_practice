<template>
  <div class="orgPageHeading">
    <Heading0001
      :identifiers="[...identifiers, 'OrgPageHeading0001']"
      :text="pageHeadingText"
      :modifier-classes="['heading0001--Lv1']"
      :tag-name="'h1'"
    />
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import Heading0001 from '~/components/common/molecules_and_atoms/heading_0001/index.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgPageHeading0001',
  components: {
    Heading0001,
  },
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
.orgPageHeading {
}
</style>
