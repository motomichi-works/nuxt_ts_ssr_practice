<template>
  <section :data-selector="identifierStr" class="select-field-unit-0001">
    <div
      v-if="headingText.length > 0"
      class="select-field-unit-0001__heading-wrapper"
    >
      <FieldHeading0001
        :identifiers="[...identifiers, 'Heading']"
        :text="headingText"
        :is-required="isRequired"
      />
    </div>
    <div class="select-field-unit-0001__body">
      <div class="select-field-unit-0001__field-wrapper">
        <SelectField0001
          :identifiers="[...identifiers, 'selectFieldA']"
          :namespace="namespace"
          :prev-values-for-validator-options="prevValuesForValidatorOptions"
          :modifiers="fieldModifiers"
          :validator-names="validatorNames"
          :value="value"
          :name-property="nameProperty"
          :is-disabled="isDisabled"
          :is-readonly="isReadonly"
          :options="options"
          :has-realtime-errors="realtimeErrors.length > 0"
          @on-blur-field="emitOnBlurField"
          @on-change-field="emitOnChangeField"
        />
      </div>
      <ul
        v-if="descriptions.length > 0"
        class="select-field-unit-0001__desc-group"
      >
        <li
          v-for="desc in descriptions"
          :key="desc"
          class="select-field-unit-0001__desc-item"
          v-text="desc"
        />
      </ul>
    </div>
    <div
      v-if="realtimeErrors.length > 0"
      class="select-field-unit-0001__error-messages-wrapper"
    >
      <FieldErrorMessages0001
        :identifiers="[...identifiers, 'FieldErrorMessages']"
        :error-messages="realtimeErrors"
      />
    </div>
  </section>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/common
import SelectField0001 from '~/components/common/select_field_0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  mixins: [everyChild],
  props: {
    fieldModifiers: {
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
    options: {
      type: Array as PropType<Option[]>,
      required: false,
      default: () => [{ label: '選択してください', value: '' }],
    },
    descriptions: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
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
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/select_field_unit_0001';
</style>
