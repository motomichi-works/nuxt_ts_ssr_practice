<template>
  <OrgFooter0001Presentational :identifiers="identifiers" />
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components
import OrgFooter0001Presentational from '~/components/common/org_presentationals/org_footer_0001_presentational.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFooter0001Container',
  components: {
    OrgFooter0001Presentational,
  },
  mixins: [everyChild],
})
</script>
