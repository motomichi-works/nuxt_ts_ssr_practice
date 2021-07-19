// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnInputChangeBlurField } from '~/types/payload_for_on_input_change_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitOnInputField(payload: PayloadForOnInputChangeBlurField) {
      this.$emit('on-input-field', payload)
    },
  },
})
