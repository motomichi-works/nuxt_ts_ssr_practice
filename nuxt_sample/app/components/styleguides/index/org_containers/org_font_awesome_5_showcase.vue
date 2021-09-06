<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="FontAwesome5"
  >
    <FontAwesomeIconWrapper
      :identifiers="[...identifiers, 'FontAwesomeIconWrapper01']"
      :icon="fa.search"
    />
    <FontAwesomeIconWrapper
      :identifiers="[...identifiers, 'FontAwesomeIconWrapper02']"
      :icon="fa.searchPlus"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import FontAwesomeIconWrapper from '~/components/common/molecules_and_atoms/font_awesome_icon_wrapper.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFontAwesome5Showcase',
  components: {
    OrgGeneralPurpose0001Presentational,
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
