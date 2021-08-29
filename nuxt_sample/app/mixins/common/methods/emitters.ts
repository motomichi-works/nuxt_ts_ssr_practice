// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnChangeOrBlurField } from '~/types/payload_for_on_change_or_blur_field'
import { PayloadForOnInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    $_emitBlurField(payload: PayloadForOnChangeOrBlurField) {
      this.$emit('blur-field', payload)
    },
    $_emitChangeField(payload: PayloadForOnChangeOrBlurField) {
      this.$emit('change-field', payload)
    },
    emitInputField(payload: PayloadForOnInputField) {
      this.$emit('input-field', payload)
    },
  },
})
