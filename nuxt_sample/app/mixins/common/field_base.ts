// import node_modules
import Vue, { PropType } from 'vue'

// types
import { PayloadForOnBlurField } from '~/types/payload_for_on_blur_field'

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
      const payload: PayloadForOnBlurField = {
        namespace: (this as any).namespace,
        fieldValueObj: (this as any).fieldValueObj,
        key: this.nameProperty,
        value: target.value,
        eventType: 'blur',
        validatorNamesThatDependsOnDynamicOptions: this
          .validatorNamesThatDependsOnDynamicOptions,
      }

      ;(this as any).emitOnBlurField(payload)
    },
  },
})
