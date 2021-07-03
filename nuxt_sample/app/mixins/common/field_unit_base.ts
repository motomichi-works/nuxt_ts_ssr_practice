// import node_modules
import Vue, { PropType } from 'vue'

// components
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'

// types
type FieldModifiersObj = {
  field01?: string[]
  field02?: string[]
  field03?: string[]
  field04?: string[]
}
type ValidatorNamesThatDependsOnDynamicOptionsObj = {
  field01?: string[]
  field02?: string[]
  field03?: string[]
  field04?: string[]
}
type NamePropertyObj = {
  field01: string
  field02?: string
  field03?: string
  field04?: string
}
type TextColumnContentObj = {
  first?: string
  field01?: string
  field02?: string
  field03?: string
  field04?: string
}
// Vue.extend
export default Vue.extend({
  components: {
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    fieldModifiersObj: {
      type: Object as PropType<FieldModifiersObj>,
      required: false,
      default: () => ({ field01: [], field02: [], field03: [], field04: [] }),
    },
    validatorNamesThatDependsOnDynamicOptionsObj: {
      type: Object as PropType<ValidatorNamesThatDependsOnDynamicOptionsObj>,
      required: false,
      default: () => ({ field01: [], field02: [], field03: [], field04: [] }),
    },
    namePropertyObj: {
      type: Object as PropType<NamePropertyObj>,
      required: true,
    },
    textColumnContentObj: {
      type: Object as PropType<TextColumnContentObj>,
      required: false,
      default: () => ({}),
    },
    sharedKey: {
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
    fieldValueObj: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true,
    },
    realtimeErrorsObj: {
      type: Object as PropType<{ [key: string]: string[] }>,
      required: true,
    },
    isTaintedObj: {
      type: Object as PropType<{ [key: string]: boolean }>,
      required: true,
    },
  },
  computed: {
    fieldValue() {
      const key = this.sharedKey
      return (this as any).fieldValueObj[key]
    },
    realtimeErrors() {
      const key = this.sharedKey
      return (this as any).realtimeErrorsObj[key]
    },
    hasRealtimeErrors() {
      return (this as any).realtimeErrors.length > 0
    },
  },
})
