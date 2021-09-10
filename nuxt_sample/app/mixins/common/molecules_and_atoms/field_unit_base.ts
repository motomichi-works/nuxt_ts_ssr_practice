// import node_modules
import Vue, { PropType } from 'vue'

// components
import FieldErrorMessages0001 from '~/components/common/molecules_and_atoms/field_error_messages_0001.vue'
import FieldHeading0001 from '~/components/common/molecules_and_atoms/field_heading_0001.vue'

// types
import { CombinationFieldForFieldUnitProp } from '~/types/combination_field_for_field_unit_prop'

// Vue.extend
export const fieldUnitBase = Vue.extend({
  components: {
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    type: {
      type: String as PropType<string>,
      required: false,
      default: 'text',
    },
    combinationField: {
      type: Object as PropType<CombinationFieldForFieldUnitProp>,
      required: false,
      default: null,
    },
    fieldValueObj: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true,
    },
    isTaintedObj: {
      type: Object as PropType<{ [key: string]: boolean }>,
      required: true,
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
    badgeType: {
      type: String as PropType<'required' | 'notRequired'>,
      required: false,
      default: 'required',
    },
  },
  computed: {
    hasCombinationFieldRealtimeErrors() {
      return (
        this.combinationField !== null &&
        (this as any).combinationField.realtimeErrors.length > 0
      )
    },
  },
})
