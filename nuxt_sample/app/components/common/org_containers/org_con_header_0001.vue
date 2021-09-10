<template>
  <OrgPreHeader0001 :identifier="identifier" />
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components
import OrgPreHeader0001 from '~/components/common/org_presentationals/org_pre_header_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConHeader0001',
  components: {
    OrgPreHeader0001,
  },
  mixins: [everyChild],
})
</script>
