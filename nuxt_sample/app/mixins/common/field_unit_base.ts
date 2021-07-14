// import node_modules
import Vue, { PropType } from 'vue'

// components
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'

// types
import { PayloadForOnInputCombinationField } from '~/types/payload_for_on_input_combination_field'

// Vue.extend
export default Vue.extend({
  components: {
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    combinationField: {
      type: Object as PropType<{
        nameProperty: string | null
        value?: string
      }>,
      required: true,
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
    combinationFieldValue() {
      return (this as any).combinationField.value
    },
    // fieldValue() {
    //   const key = this.sharedKey
    //   return (this as any).fieldValueObj[key]
    // },
  },
  watch: {
    combinationFieldValue(value) {
      const payload: PayloadForOnInputCombinationField = {
        namespace: '',
        fieldValueObj: (this as any).fieldValueObj,
        // isTaintedObj: { [key: string]: boolean }
        // key: string
        value,
        // eventType: 'input'
        // validatorNamesThatDependsOnDynamicOptions: string[]
      }
      ;(this as any).emitOnInputCombinationField(payload)
    },
  },
})
