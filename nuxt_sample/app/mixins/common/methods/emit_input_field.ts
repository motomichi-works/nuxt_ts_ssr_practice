// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitInputField(payload: PayloadForOnInputField) {
      this.$emit('input-field', payload)
    },
  },
})
