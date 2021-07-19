// import node_modules
import Vue, { PropType } from 'vue'

// types
import { PayloadForOnInputChangeBlurField } from '~/types/payload_for_on_input_change_blur_field'
import { CombinationField } from '~/types/combination_field'

// Vue.extend
export default Vue.extend({
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    validatorNamesThatDependsOnDynamicOptions: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    nameProperty: {
      type: String as PropType<string>,
      required: false,
      default: '',
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
    fieldValueObj: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true,
    },
    realtimeErrors: {
      type: Array as PropType<string[]>,
      required: true,
    },
    isTaintedObj: {
      type: Object as PropType<{ [key: string]: boolean }>,
      required: true,
    },
    combinationField: {
      type: Object as PropType<CombinationField>,
      required: false,
      default: null,
    },
  },
  computed: {
    fieldValue() {
      const key = this.sharedKey
      return (this as any).fieldValueObj[key]
    },
    hasRealtimeErrors() {
      return (this as any).realtimeErrors.length > 0
    },
  },
  methods: {
    onBlur({ target }: { target: HTMLInputElement }) {
      const payload: PayloadForOnInputChangeBlurField = {
        namespace: (this as any).namespace,
        fieldValueObj: (this as any).fieldValueObj,
        isTaintedObj: (this as any).isTaintedObj,
        key: this.nameProperty,
        value: target.value,
        eventType: 'blur',
        validatorNamesThatDependsOnDynamicOptions: this
          .validatorNamesThatDependsOnDynamicOptions,
        combinationField: this.combinationField,
      }

      ;(this as any).emitOnBlurField(payload)
    },
  },
})
