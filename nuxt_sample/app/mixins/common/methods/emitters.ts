// import node_modules
import Vue from 'vue'

// types
import { PayloadOfChangeFieldOrBlurField } from '~/types/payload_of_change_field_or_blur_field'
import { PayloadOfInputField } from '~/types/payload_of_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    $_emitBlurField(payload: PayloadOfChangeFieldOrBlurField) {
      this.$emit('blur-field', payload)
    },
    $_emitChangeField(payload: PayloadOfChangeFieldOrBlurField) {
      this.$emit('change-field', payload)
    },
    $_emitInputField(payload: PayloadOfInputField) {
      this.$emit('input-field', payload)
    },
  },
})
