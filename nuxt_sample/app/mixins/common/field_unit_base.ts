// import node_modules
import Vue, { PropType } from 'vue'

// components
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    validatorNamesThatDependsOnDynamicOptions: {
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
    badgeType: {
      type: String as PropType<'required' | 'notRequired'>,
      required: false,
      default: 'required',
    },
    realtimeErrors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
  },
})
