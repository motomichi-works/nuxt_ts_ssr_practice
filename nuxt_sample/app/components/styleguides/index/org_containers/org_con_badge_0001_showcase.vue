<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="Badge0001">
    <Badge0001 :identifier="`${identifier}/Badge`" text="必須" />
    <Badge0001
      :identifier="`${identifier}/BadgeA`"
      text="任意"
      :modifier-classes="['badge0001--bgColorGray']"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import Badge0001 from '~/components/common/molecules_and_atoms/badge_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConBadge0001Showcase',
  components: {
    OrgPreShared0001,
    Badge0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
