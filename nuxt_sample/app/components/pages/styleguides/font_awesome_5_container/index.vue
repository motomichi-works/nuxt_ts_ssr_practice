<template>
  <section :data-selector="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="FontAwesome5"
      />
    </div>
    <div class="container-0001__body">
      <fa :icon="fa.search" />
      <fa :icon="fa.searchPlus" />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'FontAwesome5Container',
  components: {
    Heading0001,
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
