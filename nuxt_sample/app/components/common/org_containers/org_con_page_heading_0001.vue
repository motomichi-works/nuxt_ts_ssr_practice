<template>
  <OrgPageHeading0001Presentational
    :page-heading-text="pageHeadingText"
    :identifiers="identifiers"
  />
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import OrgPageHeading0001Presentational from '~/components/common/org_presentationals/org_page_heading_0001_presentational.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConPageHeading0001',
  components: {
    OrgPageHeading0001Presentational,
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
