<template>
  <div class="basic-field-unit-0001">
    <div
      v-if="headingText.length > 0"
      class="basic-field-unit-0001__heading-wrapper"
    >
      <FieldHeading0001 :text="headingText" :is-required="isRequired" />
    </div>
    <div class="basic-field-unit-0001__body">
      <div class="basic-field-unit-0001__field-wrapper">
        <BasicField0001
          :module-ids="[...moduleIds, 'field']"
          :component-id="componentId"
          :value="value"
          :name-property="'hoge'"
          :is-disabled="false"
          :is-readonly="false"
          :placeholder="'プレースホルダー'"
          :maxlength="maxlength"
          :has-realtime-errors="realtimeErrors.length > 0"
          @on-blur-field="onBlurField"
          @on-input-field="onInputField"
        />
      </div>
      <ul class="basic-field-unit-0001__hint-group">
        <li class="basic-field-unit-0001__hint-item">ほげほげほげ</li>
        <li class="basic-field-unit-0001__hint-item">ふがふがふが</li>
      </ul>
    </div>
    <div
      v-if="realtimeErrors.length > 0"
      class="basic-field-unit-0001__error-messages-wrapper"
    >
      <FieldErrorMessages0001 :error-messages="realtimeErrors" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

export type ArgsOfOnInputField = {
  key: string
  value: string
  eventType: 'input'
}

export type ArgsOfOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
}

export default Vue.extend({
  name: 'BasicFieldUnit0001',
  components: {
    BasicField0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    moduleIds: {
      type: Array as PropType<string[]>,
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
    headingText: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    isRequired: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true,
    },
    realtimeErrors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
  },
  methods: {
    onBlurField(payload: ArgsOfOnBlurField): void {
      this.$emit('on-blur-field', payload)
    },
    onInputField(payload: ArgsOfOnInputField): void {
      this.$emit('on-input-field', payload)
    },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/basic-field-unit-0001';
</style>
