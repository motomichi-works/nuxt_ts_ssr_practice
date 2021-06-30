// import node_modules
import Vue, { PropType } from 'vue'

// Vue.extend
export default Vue.extend({
  props: {
    validatorNames: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
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
