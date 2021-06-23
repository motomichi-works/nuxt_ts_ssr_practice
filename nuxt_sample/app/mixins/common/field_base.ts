// import node_modules
import Vue, { PropType } from 'vue'

// utils
import {
  ArgsOfEmitOnBlurField,
  emitOnBlurField,
} from '~/utils/emit_on_blur_field'

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

      this.emitOnBlurField(payload, this)
    },
    emitOnBlurField,
  },
})
