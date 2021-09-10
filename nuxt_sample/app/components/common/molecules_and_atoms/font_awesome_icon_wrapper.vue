<template>
  <i :data-identifier="identifier" class="fontAwesomeIconWrapper">
    <FontAwesomeIcon :icon="icon" />
  </i>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'FontAwesomeIconWrapper',
  components: {
    FontAwesomeIcon,
  },
  mixins: [everyChild],
  props: {
    icon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
.fontAwesomeIconWrapper {
  display: inline-block;
}
</style>
