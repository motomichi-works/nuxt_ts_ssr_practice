<template>
  <div :data-selector="identifierStr" :class="classes">
    <i v-if="!isReadonly" class="select-field-0001__icon-wrapper">
      <div class="select-field-0001__icon"></div>
    </i>
    <select
      v-if="!isReadonly"
      v-model="bindValue"
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
      <input type="hidden" :value="bindValue" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import every from '~/mixins/common/every'
import fieldBase from '~/mixins/common/field_base'

// types
export type Option = {
  label: string
  value: string
}

// Vue.extend
export default Vue.extend({
  name: 'SelectField0001',
  mixins: [every, fieldBase],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['select-field-0001--size-md'],
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

      if ((this as any).hasRealtimeErrors) {
        classes.push('select-field-0001--invalid')
      }

      return classes
    },
    bindValue: {
      get(): string {
        return (this as any).value
      },
      set(value: string) {
        this.onChange(value)
      },
    },
    selectedLabel() {
      const selectedOption = this.options.find((option) => {
        return option.value === (this as any).value
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
    onChange(value: string) {
      const payload = {
        key: (this as any).nameProperty,
        value,
        eventType: 'change',
        validatorNames: (this as any).validatorNames,
      } as const

      this.$emit('on-change-field', payload)
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/select_field_0001';
</style>
