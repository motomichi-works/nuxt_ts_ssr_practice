<template>
  <OrgPrePageHeading0001
    :page-heading-text="pageHeadingText"
    :identifier="identifier"
  />
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import OrgPrePageHeading0001 from '~/components/common/org_presentationals/org_pre_page_heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConPageHeading0001',
  components: {
    OrgPrePageHeading0001,
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
