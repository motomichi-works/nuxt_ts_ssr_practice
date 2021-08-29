// import node_modules
import Vue from 'vue'

// types
import { PayloadOfChangeFieldOrBlurField } from '~/types/payload_for_on_change_or_blur_field'
import { PayloadForOnInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    $_emitBlurField(payload: PayloadOfChangeFieldOrBlurField) {
      this.$emit('blur-field', payload)
    },
    $_emitChangeField(payload: PayloadOfChangeFieldOrBlurField) {
      this.$emit('change-field', payload)
    },
    $_emitInputField(payload: PayloadForOnInputField) {
      this.$emit('input-field', payload)
    },
  },
})
