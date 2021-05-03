<template>
  <div
    class="basic-field-0001 basic-field-0001--size-m"
    :class="{ 'basic-field-0001--invalid': hasRealtimeErrors }"
  >
    <input
      v-model="computedValue"
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
    moduleIds: {
      type: Array as PropType<string[]>,
      required: true,
    },
    validatorNames: {
      type: Array as PropType<string[]>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
      required: true,
    },
    nameProperty: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    isDisabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    isReadonly: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    placeholder: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    maxlength: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  computed: {
    computedValue: {
      get(): string {
        return this.value
      },
      set(value: string): void {
        this.onInput(value)
      },
    },
  },
  methods: {
    onInput(value: string): void {
      const payload = {
        key: this.nameProperty,
        value,
        eventType: 'input',
        validatorNames: this.validatorNames,
      } as const

      this.$emit('on-input-field', payload)
    },
    onBlur({ target }: { target: HTMLInputElement }): void {
      const payload = {
        key: this.nameProperty,
        value: target.value,
        eventType: 'blur',
        validatorNames: this.validatorNames,
      } as const

      this.$emit('on-blur-field', payload)
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
