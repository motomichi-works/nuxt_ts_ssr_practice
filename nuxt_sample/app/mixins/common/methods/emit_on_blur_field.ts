// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnChangeOrBlurField } from '~/types/payload_for_on_change_or_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitOnBlurField(payload: PayloadForOnChangeOrBlurField) {
      this.$emit('on-blur-field', payload)
    },
  },
})
