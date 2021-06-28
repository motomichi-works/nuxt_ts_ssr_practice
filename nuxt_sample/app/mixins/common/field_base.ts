// import node_modules
import Vue, { PropType } from 'vue'

// define types
export type ArgsOfEmitOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}

// Vue.extend
export default Vue.extend({
  props: {
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
      const payload: ArgsOfEmitOnBlurField = {
        key: this.nameProperty,
        value: target.value,
        eventType: 'blur',
        validatorNames: this.validatorNames,
      }

      this.emitOnBlurField(payload)
    },
    emitOnBlurField(payload: ArgsOfEmitOnBlurField) {
      this.$emit('on-blur-field', payload)
    },
  },
})
