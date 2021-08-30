<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="FontAwesome5"
      />
    </div>
    <div class="container-0001__body">
      <FontAwesomeIconWrapper
        :identifiers="[...identifiers, 'FontAwesomeIconWrapper01']"
        :icon="fa.search"
      />
      <FontAwesomeIconWrapper
        :identifiers="[...identifiers, 'FontAwesomeIconWrapper02']"
        :icon="fa.searchPlus"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// import components/molecules_and_atoms
import FontAwesomeIconWrapper from '~/components/molecules_and_atoms/font_awesome_icon_wrapper/index.vue'
import Heading0001 from '~/components/molecules_and_atoms/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFontAwesome5Showcase',
  components: {
    Heading0001,
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
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>
