<template>
  <OrgPreGeneralPurpose0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="List0001"
  >
    <List0001
      :identifiers="[...identifiers, 'List0001']"
      :items="['リストアイテム01', 'リストアイテム02']"
    />
  </OrgPreGeneralPurpose0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreGeneralPurpose0001 from '~/components/common/org_presentationals/org_pre_general_purpose_0001.vue'

// import components/molecules_and_atoms
import List0001 from '~/components/common/molecules_and_atoms/list_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgList0001Showcase',
  components: {
    OrgPreGeneralPurpose0001,
    List0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
