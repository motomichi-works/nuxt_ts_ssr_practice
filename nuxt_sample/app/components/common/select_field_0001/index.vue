<template>
  <div :data-selector="identifierStr" :class="classes">
    <i v-if="!isReadonly" class="select-field-0001__icon-wrapper">
      <div class="select-field-0001__icon"></div>
    </i>
    <select
      v-if="!isReadonly"
      v-model="computedValue"
      type="text"
      :disabled="isDisabled"
      :name="nameProperty"
      class="select-field-0001__field"
      @blur="onBlur($event)"
    >
      <option
        v-for="item in options"
        :key="`${item.value}_${item.label}`"
        :value="item.value"
        v-text="item.label"
      />
    </select>
    <div
      v-if="isReadonly"
      class="select-field-0001__field select-field-0001__field--readonly"
    >
      <span class="select-field-0001__readonly-label" v-text="selectedLabel" />
      <input type="hidden" :value="computedValue" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import every from '~/mixins/every'

// types
export type Option = {
  label: string
  value: string
}

// Vue.extend
export default Vue.extend({
  name: 'SelectField0001',
  mixins: [every],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['select-field-0001--size-md'],
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
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: false,
      default: () => [{ label: '選択してください', value: '' }],
    },
  },
  data() {
    return {
      refreshKey: 0,
    }
  },
  computed: {
    classes() {
      const classes = ['select-field-0001', ...this.modifiers]

      if (this.hasRealtimeErrors) classes.push('select-field-0001--invalid')
      return classes
    },
    computedValue: {
      get(): string {
        return this.value
      },
      set(value: string): void {
        this.onChange(value)
      },
    },
    selectedLabel() {
      const selectedOption = this.options.find((option) => {
        return option.value === this.value
      })

      return selectedOption ? selectedOption.label : ''
    },
  },
  watch: {
    options() {
      this.refreshKey++
    },
  },
  methods: {
    onChange(value: string): void {
      const payload = {
        key: this.nameProperty,
        value,
        eventType: 'change',
        validatorNames: this.validatorNames,
      } as const

      this.$emit('on-change-field', payload)
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
@import '~/assets/scss/modules/select_field_0001';
</style>
