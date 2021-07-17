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
        sharedKey?: string
        realtimeErrors?: string[]
        value?: string
        isTainted?: boolean
        validatorNamesThatDependsOnDynamicOptions?: string[]
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
    combinationFieldRealtimeErrors() {
      const combinationFieldRealtimeErrors: string[] | undefined = (this as any)
        .combinationField.realtimeErrors

      return combinationFieldRealtimeErrors
    },
    isVisibleCombinationFieldRealtimeErrors(): boolean {
      return (
        (this as any).combinationFieldRealtimeErrors &&
        (this as any).combinationFieldRealtimeErrors.length > 0
      )
    },
    // fieldValue() {
    //   const key = this.sharedKey
    //   return (this as any).fieldValueObj[key]
    // },
  },
  watch: {
    combinationFieldValue() {
      const payload: PayloadForOnInputCombinationField = {
        namespace: (this as any).namespace,
        fieldValueObj: (this as any).fieldValueObj,
        isTaintedObj: (this as any).isTaintedObj,
        key: (this as any).combinationField.sharedKey,
        value: (this as any).combinationField.value,
        isTainted: (this as any).combinationField.isTainted,
        eventType: 'input',
        validatorNamesThatDependsOnDynamicOptions: (this as any)
          .combinationField.validatorNamesThatDependsOnDynamicOptions,
      }

      ;(this as any).emitOnInputCombinationField(payload)
    },
  },
})
