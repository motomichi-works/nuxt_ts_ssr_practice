<template>
  <OrgHeader0001Presentational :identifiers="identifiers" />
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components
import OrgHeader0001Presentational from '~/components/common/org_presentationals/org_header_0001_presentational.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgHeader0001Container',
  components: {
    OrgHeader0001Presentational,
  },
  mixins: [everyChild],
})
</script>
