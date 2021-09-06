<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="List0001"
  >
    <List0001
      :identifiers="[...identifiers, 'List0001']"
      :items="['リストアイテム01', 'リストアイテム02']"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import List0001 from '~/components/common/molecules_and_atoms/list_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgList0001Showcase',
  components: {
    OrgGeneralPurpose0001Presentational,
    List0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
