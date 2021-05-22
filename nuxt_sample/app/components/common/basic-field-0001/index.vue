<template>
  <div :data-selector="identifierStr" :class="classes">
    <div v-if="isVisibleLeftIcon" class="basic-field-0001__icon-wrapper">
      <fa :icon="leftIcon" />
    </div>
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
    <div v-if="isVisibleRightIcon" class="basic-field-0001__icon-wrapper">
      <fa :icon="rightIcon" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001',
  mixins: [base],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['basic-field-0001--size-md'],
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
    leftIcon: {
      required: false,
      default: () => {
        return null
      },
    },
    rightIcon: {
      required: false,
      default: () => {
        return null
      },
    },
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['basic-field-0001', ...this.modifiers]

      if (this.leftIcon !== null) {
        classes.push('basic-field-0001--icon-absolute-left')
      }
      if (this.rightIcon !== null) {
        classes.push('basic-field-0001--icon-absolute-right')
      }
      if (this.hasRealtimeErrors) classes.push('basic-field-0001--invalid')
      return classes
    },
    isVisibleLeftIcon() {
      return this.leftIcon !== null
    },
    isVisibleRightIcon() {
      return this.rightIcon !== null
    },
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
// modules
@import '~/assets/scss/modules/basic-field-0001';
</style>
