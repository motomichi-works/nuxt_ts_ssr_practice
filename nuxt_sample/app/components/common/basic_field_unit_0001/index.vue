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
          :left-icon="leftIcon"
          :right-icon="rightIcon"
          :has-realtime-errors="realtimeErrors.length > 0"
          @on-blur-field="emitOnBlurField"
          @on-input-field="emitOnInputField"
        />
      </div>
      <ul
        v-if="descriptions.length > 0"
        class="basic-field-unit-0001__desc-group"
      >
        <li
          v-for="desc in descriptions"
          :key="desc"
          class="basic-field-unit-0001__desc-item"
          v-text="desc"
        />
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
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/common
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'

// mixins
import every from '~/mixins/common/every'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  components: {
    BasicField0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  mixins: [every],
  props: {
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
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
    rightIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
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
@import '~/assets/scss/modules/basic_field_unit_0001';
</style>
