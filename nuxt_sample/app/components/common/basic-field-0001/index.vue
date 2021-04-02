<template>
  <div class="basic-field-0001 basic-field-0001--size-m">
    <input
      v-model="fieldValue"
      type="text"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :name="nameProperty"
      :placeholder="placeholder"
      :maxlength="maxlength"
      class="basic-field-0001__field"
      @blur="onBlur($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'BasicField0001',
  props: {
    moduleNames: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    nameProperty: {
      type: String as PropType<string>,
      default: '',
    },
    isDisabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    isReadonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    maxlength: {
      type: String as PropType<string>,
      default: '',
    },
    onBlur: {
      type: Function,
      default(event: any) {
        // eslint-disable-next-line no-console
        console.log('onBlurField: ', event)
      },
    },
  },
  computed: {
    modulePath(): string {
      return this.moduleNames.join('/')
    },
    fieldValue: {
      get(): string {
        return this.$store.getters[`${this.modulePath}/fieldValue`]
      },
      set(value: string): void {
        this.changeFieldValue(value)
      },
    },
  },
  methods: {
    changeFieldValue(value: string): void {
      this.$store.commit(`${this.modulePath}/changeFieldValue`, value)
    },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/basic-field-0001';
</style>
