<template>
  <div :data-selector="identifierStr" :class="classes">
    <div v-if="isVisibleLeftIcon" class="basic-field-0001__icon-wrapper">
      <fa :icon="leftIcon" />
    </div>
    <input
      v-model="bindValue"
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
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// mixins
import every from '~/mixins/common/every'
import fieldBase from '~/mixins/common/field_base'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001',
  mixins: [every, fieldBase],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['basic-field-0001--size-md'],
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
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
    rightIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
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
      if ((this as any).hasRealtimeErrors) {
        classes.push('basic-field-0001--invalid')
      }

      return classes
    },
    isVisibleLeftIcon() {
      return this.leftIcon !== null
    },
    isVisibleRightIcon() {
      return this.rightIcon !== null
    },
    bindValue: {
      get(): string {
        return (this as any).value
      },
      set(value: string) {
        this.onInput(value)
      },
    },
  },
  methods: {
    onInput(value: string) {
      const payload = {
        key: (this as any).nameProperty,
        value,
        eventType: 'input',
        validatorNames: (this as any).validatorNames,
      } as const

      this.$emit('on-input-field', payload)
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/basic_field_0001';
</style>
