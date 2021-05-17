<template>
  <div :data-selector="identifierStr" class="field-error-messages-0001">
    <ul class="field-error-messages-0001__list-group">
      <li
        v-for="message in errorMessages"
        :key="message"
        class="field-error-messages-0001__list-item"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

// mixins
import base from '~/mixins/base'

export default Vue.extend({
  name: 'FieldErrorMessages0001',
  mixins: [base],
  props: {
    errorMessages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/field-error-messages-0001';
</style>
