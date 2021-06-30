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
    validatorNames: {
      type: Array as PropType<string[]>,
      required: true,
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
    hasRealtimeErrors: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  methods: {
    onBlur({ target }: { target: HTMLInputElement }) {
      const payload: PayloadForOnBlurField = {
        namespace: (this as any).namespace,
        prevValuesForValidatorOptions: (this as any)
          .prevValuesForValidatorOptions,
        key: this.nameProperty,
        value: target.value,
        eventType: 'blur',
        validatorNames: this.validatorNames,
      }

      ;(this as any).emitOnBlurField(payload)
    },
  },
})
