// import node_modules
import Vue, { PropType } from 'vue'

// types
import { ArgsForHandleChangeCombinationFieldOrBlurCombinationField } from '~/types/args_for_handle_change_combination_field_or_blur_combination_field'
import { ArgsForHandleChangeFieldOrBlurField } from '~/types/args_for_handle_change_field_or_blur_field'
import { CombinationFieldForFieldProp } from '~/types/combination_field_for_field_prop'

// Vue.extend
export const fieldBase = Vue.extend({
  props: {
    modifiers: {
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
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
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
  },
  methods: {
    $_handleBlur({ target }: { target: HTMLInputElement }) {
      const combinationField: ArgsForHandleChangeCombinationFieldOrBlurCombinationField | null = this
        .combinationField
        ? {
            namespace: (this as any).namespace,
            sharedKey: this.combinationField.sharedKey,
            combinationSharedKeys: this.combinationField.combinationSharedKeys,
            fieldValueObj: this.fieldValueObj,
            isTaintedObj: this.isTaintedObj,
            eventType: 'blur',
          }
        : null

      const payload: ArgsForHandleChangeFieldOrBlurField = {
        namespace: (this as any).namespace,
        fieldValueObj: (this as any).fieldValueObj,
        isTaintedObj: (this as any).isTaintedObj,
        sharedKey: this.name,
        value: target.value,
        eventType: 'blur',
        combinationField,
      }

      ;(this as any).$_emitBlurField(payload)
    },
  },
})
