// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnBlurField } from '~/types/payload_for_on_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitOnBlurField(payload: PayloadForOnBlurField) {
      this.$emit('on-blur-field', payload)
    },
  },
})
