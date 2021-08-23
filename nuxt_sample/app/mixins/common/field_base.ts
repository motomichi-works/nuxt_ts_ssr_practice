// import node_modules
import Vue, { PropType } from 'vue'

// types
import { ArgsForOnChangeOrBlurCombinationField } from '~/types/args_for_on_change_or_blur_combination_field'
import { PayloadForOnChangeOrBlurField } from '~/types/payload_for_on_change_or_blur_field'
import { CombinationFieldForFieldProp } from '~/types/combination_field_for_field_prop'

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
    name: {
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
      type: Object as PropType<CombinationFieldForFieldProp>,
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
      const combinationField: ArgsForOnChangeOrBlurCombinationField | null = this
        .combinationField
        ? {
            namespace: (this as any).namespace,
            sharedKey: this.combinationField.sharedKey,
            combinationSharedKeys: this.combinationField.combinationSharedKeys,
            fieldValueObj: this.fieldValueObj,
            isTaintedObj: this.isTaintedObj,
            eventType: 'blur',
            validatorNamesThatDependsOnDynamicOptions: this.combinationField
              .validatorNamesThatDependsOnDynamicOptions,
          }
        : null

      const payload: PayloadForOnChangeOrBlurField = {
        namespace: (this as any).namespace,
        fieldValueObj: (this as any).fieldValueObj,
        isTaintedObj: (this as any).isTaintedObj,
        sharedKey: this.name,
        value: target.value,
        eventType: 'blur',
        validatorNamesThatDependsOnDynamicOptions: this
          .validatorNamesThatDependsOnDynamicOptions,
        combinationField,
      }

      ;(this as any).emitBlurField(payload)
    },
  },
})
