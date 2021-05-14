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

export default Vue.extend({
  name: 'FieldErrorMessages0001',
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    errorMessages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/field-error-messages-0001';
</style>
