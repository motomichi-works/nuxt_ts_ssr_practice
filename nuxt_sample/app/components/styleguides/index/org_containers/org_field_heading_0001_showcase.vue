<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="FieldHeading0001"
  >
    <FieldHeading0001
      :identifiers="[...identifiers, 'fieldHeading']"
      text="h2見出し"
    />
    <FieldHeading0001
      :identifiers="[...identifiers, 'fieldHeadingA']"
      text="h3見出し"
      tag-name="h3"
    />
    <FieldHeading0001
      :identifiers="[...identifiers, 'fieldHeadingB']"
      text="h2見出し"
      :badge-type="'notRequired'"
    />
    <FieldHeading0001
      :identifiers="[...identifiers, 'fieldHeadingC']"
      text="h2見出し"
      :badge-type="'notRequired'"
      tag-name="h3"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import FieldHeading0001 from '~/components/common/molecules_and_atoms/field_heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFieldHeading0001Showcase',
  components: {
    OrgGeneralPurpose0001Presentational,
    FieldHeading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
