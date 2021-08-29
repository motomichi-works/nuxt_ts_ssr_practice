// import node_modules
import Vue from 'vue'

// types
import { ArgsForHandleChangeFieldOrBlurField } from '~/types/payload_of_change_field_or_blur_field'
import { PayloadOfInputField } from '~/types/payload_of_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    $_emitBlurField(payload: ArgsForHandleChangeFieldOrBlurField) {
      this.$emit('blur-field', payload)
    },
    $_emitChangeField(payload: ArgsForHandleChangeFieldOrBlurField) {
      this.$emit('change-field', payload)
    },
    $_emitInputField(payload: PayloadOfInputField) {
      this.$emit('input-field', payload)
    },
  },
})
