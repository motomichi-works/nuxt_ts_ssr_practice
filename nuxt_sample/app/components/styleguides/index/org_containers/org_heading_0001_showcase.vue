<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="Heading0001"
  >
    <Heading0001
      :identifiers="[...identifiers, 'headingLv1']"
      text="Lv1の見出し"
      :modifier-classes="['heading0001--Lv1']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifiers="[...identifiers, 'headingLv2']"
      text="Lv2の見出し"
      :modifier-classes="['heading0001--Lv2']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifiers="[...identifiers, 'headingLv3']"
      text="Lv3の見出し"
      :modifier-classes="['heading0001--Lv3']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifiers="[...identifiers, 'headingLv4']"
      text="Lv4の見出し"
      :modifier-classes="['heading0001--Lv4']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifiers="[...identifiers, 'headingLv5']"
      text="Lv5の見出し"
      :modifier-classes="['heading0001--Lv5']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifiers="[...identifiers, 'headingLv6']"
      text="Lv6の見出し"
      :modifier-classes="['heading0001--Lv6']"
      :tag-name="'h2'"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import Heading0001 from '~/components/common/molecules_and_atoms/heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgHeading0001Showcase',
  components: {
    OrgGeneralPurpose0001Presentational,
    Heading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
