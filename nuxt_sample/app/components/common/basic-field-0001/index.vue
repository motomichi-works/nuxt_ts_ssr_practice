<template>
  <div
    class="basic-field-0001 basic-field-0001--size-m"
    :class="{ 'basic-field-0001--invalid': hasRealtimeErrors }"
  >
    <input
      v-model="bindingValue"
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
    moduleName: {
      type: String as PropType<string>,
      required: true,
    },
    componentId: {
      type: String as PropType<string>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
      required: true,
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
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    onBlur: {
      type: Function,
      default({ target }: { target: HTMLInputElement }) {
        const payload = {
          key: this.componentId,
          value: target.value,
          eventType: target.type,
        }

        this.$emit('on-blur-field', payload)
      },
    },
  },
  computed: {
    self() {
      return this
    },
    bindingValue: {
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
        key: this.componentId,
        value,
        eventType: 'input',
      }

      this.$emit('on-input-field', payload)
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
