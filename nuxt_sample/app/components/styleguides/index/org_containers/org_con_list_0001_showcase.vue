<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="List0001">
    <List0001
      :identifier="`${identifier}/List0001`"
      :items="['リストアイテム01', 'リストアイテム02']"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import List0001 from '~/components/common/molecules_and_atoms/list_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConList0001Showcase',
  components: {
    OrgPreShared0001,
    List0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
