<template>
  <OrgPreShared0001
    :identifier="identifier"
    org-heading-text="FieldHeading0001"
  >
    <FieldHeading0001
      :identifier="`${identifier}/FieldHeading`"
      text="h2見出し"
    />
    <FieldHeading0001
      :identifier="`${identifier}/FieldHeadingA`"
      text="h3見出し"
      tag-name="h3"
    />
    <FieldHeading0001
      :identifier="`${identifier}/FieldHeadingB`"
      text="h2見出し"
      :badge-type="'notRequired'"
    />
    <FieldHeading0001
      :identifier="`${identifier}/FieldHeadingC`"
      text="h2見出し"
      :badge-type="'notRequired'"
      tag-name="h3"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import FieldHeading0001 from '~/components/common/molecules_and_atoms/field_heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConFieldHeading0001Showcase',
  components: {
    OrgPreShared0001,
    FieldHeading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
