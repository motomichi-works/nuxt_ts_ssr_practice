<template>
  <div :data-identifier="identifier" class="fieldErrorMessages0001">
    <ul class="fieldErrorMessages0001__listGroup">
      <li
        v-for="message in errorMessages"
        :key="message"
        class="fieldErrorMessages0001__listItem"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'FieldErrorMessages0001',
  mixins: [everyChild],
  props: {
    errorMessages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.fieldErrorMessages0001 {
  padding: 12px 24px 12px 48px;
  background: #e40909;
  border-radius: 4px;
  .fieldErrorMessages0001__listGroup {
    list-style: disc;
  }
  .fieldErrorMessages0001__listItem {
    color: #ffffff;
    font-size: 16px;
  }
}
</style>
