<template>
  <section :data-selector="identifierStr" class="basic-field-unit-0001">
    <div
      v-if="headingText.length > 0"
      class="basic-field-unit-0001__heading-wrapper"
    >
      <FieldHeading0001
        :identifiers="[...identifiers, 'Heading']"
        :text="headingText"
        :is-required="isRequired"
      />
    </div>
    <div class="basic-field-unit-0001__body">
      <div class="basic-field-unit-0001__field-wrapper">
        <BasicField0001
          :identifiers="[...identifiers, 'Field']"
          :validator-names="validatorNames"
          :value="value"
          :name-property="nameProperty"
          :is-disabled="isDisabled"
          :is-readonly="isReadonly"
          :placeholder="placeholder"
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

// components
import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

// define types
type ArgsOfOnInputField = {
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}
type ArgsOfOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  components: {
    BasicField0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    identifiers: {
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
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
  methods: {
    onInputField(payload: ArgsOfOnInputField): void {
      this.$emit('on-input-field', payload)
    },
    onBlurField(payload: ArgsOfOnBlurField): void {
      this.$emit('on-blur-field', payload)
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/basic-field-unit-0001';
</style>
