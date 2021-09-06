// import node_modules
import Vue from 'vue'

// types
import { ArgsForHandleChangeFieldOrBlurField } from '~/types/args_for_handle_change_field_or_blur_field'
import { ArgsForHandleInputField } from '~/types/args_for_handle_input_field'

// Vue.extend
export const emitters = Vue.extend({
  methods: {
    $_emitBlurField(payload: ArgsForHandleChangeFieldOrBlurField) {
      this.$emit('blur-field', payload)
    },
    $_emitChangeField(payload: ArgsForHandleChangeFieldOrBlurField) {
      this.$emit('change-field', payload)
    },
    $_emitInputField(payload: ArgsForHandleInputField) {
      this.$emit('input-field', payload)
    },
  },
})
