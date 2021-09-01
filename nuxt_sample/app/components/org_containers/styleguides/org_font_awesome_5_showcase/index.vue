<template>
  <OrgPresentational0001
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
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/org_presentationals/shared/org_presentational_0001/index.vue'

// import components/molecules_and_atoms
import FontAwesomeIconWrapper from '~/components/molecules_and_atoms/shared/font_awesome_icon_wrapper/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFontAwesome5Showcase',
  components: {
    OrgPresentational0001,
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
