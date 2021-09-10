<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="FontAwesome5">
    <FontAwesomeIconWrapper
      :identifier="`${identifier}/FontAwesomeIconWrapper01`"
      :icon="fa.search"
    />
    <FontAwesomeIconWrapper
      :identifier="`${identifier}/FontAwesomeIconWrapper02`"
      :icon="fa.searchPlus"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import FontAwesomeIconWrapper from '~/components/common/molecules_and_atoms/font_awesome_icon_wrapper.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConFontAwesome5Showcase',
  components: {
    OrgPreShared0001,
    FontAwesomeIconWrapper,
  },
  mixins: [everyChild],
  computed: {
    fa() {
      return {
        search: faSearch,
        searchPlus: faSearchPlus,
      }
    },
  },
})
</script>
<style lang="scss" scoped></style>
