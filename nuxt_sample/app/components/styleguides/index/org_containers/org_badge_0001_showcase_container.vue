<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="Badge0001"
  >
    <Badge0001 :identifiers="[...identifiers, 'badge']" text="必須" />
    <Badge0001
      :identifiers="[...identifiers, 'badgeA']"
      text="任意"
      :modifier-classes="['badge0001--bgColorGray']"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import Badge0001 from '~/components/common/molecules_and_atoms/badge_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgBadge0001ShowcaseContainer',
  components: {
    OrgGeneralPurpose0001Presentational,
    Badge0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
