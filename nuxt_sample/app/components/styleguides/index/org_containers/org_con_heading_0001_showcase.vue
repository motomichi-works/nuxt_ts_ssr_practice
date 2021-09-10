<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="Heading0001">
    <Heading0001
      :identifier="`${identifier}/HeadingLv1`"
      text="Lv1の見出し"
      :modifier-classes="['heading0001--Lv1']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifier="`${identifier}/HeadingLv2`"
      text="Lv2の見出し"
      :modifier-classes="['heading0001--Lv2']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifier="`${identifier}/HeadingLv3`"
      text="Lv3の見出し"
      :modifier-classes="['heading0001--Lv3']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifier="`${identifier}/HeadingLv4`"
      text="Lv4の見出し"
      :modifier-classes="['heading0001--Lv4']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifier="`${identifier}/HeadingLv5`"
      text="Lv5の見出し"
      :modifier-classes="['heading0001--Lv5']"
      :tag-name="'h2'"
    />
    <Heading0001
      :identifier="`${identifier}/HeadingLv6`"
      text="Lv6の見出し"
      :modifier-classes="['heading0001--Lv6']"
      :tag-name="'h2'"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import Heading0001 from '~/components/common/molecules_and_atoms/heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConHeading0001Showcase',
  components: {
    OrgPreShared0001,
    Heading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
