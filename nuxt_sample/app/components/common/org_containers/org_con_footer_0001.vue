<template>
  <OrgPreFooter0001 :identifier="identifier" />
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components
import OrgPreFooter0001 from '~/components/common/org_presentationals/org_pre_footer_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConFooter0001',
  components: {
    OrgPreFooter0001,
  },
  mixins: [everyChild],
})
</script>
