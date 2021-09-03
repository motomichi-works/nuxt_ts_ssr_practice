<template>
  <OrgPresentational0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="Badge0001"
  >
    <Badge0001 :identifiers="[...identifiers, 'badge']" text="必須" />
    <Badge0001
      :identifiers="[...identifiers, 'badgeA']"
      text="任意"
      :modifier-classes="['badge0001--bgColorGray']"
    />
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/common/org_presentationals/org_presentational_0001/index.vue'

// import components/molecules_and_atoms
import Badge0001 from '~/components/common/molecules_and_atoms/badge_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgBadge0001Showcase',
  components: {
    OrgPresentational0001,
    Badge0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>
