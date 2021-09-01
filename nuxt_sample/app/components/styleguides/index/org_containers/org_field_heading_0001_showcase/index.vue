<template>
  <OrgPresentational0001
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
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/shared/org_presentationals/org_presentational_0001/index.vue'

// import components/molecules_and_atoms
import FieldHeading0001 from '~/components/shared/molecules_and_atoms/field_heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFieldHeading0001Showcase',
  components: {
    OrgPresentational0001,
    FieldHeading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
