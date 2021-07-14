// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnInputCombinationField } from '~/types/payload_for_on_input_combination_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitOnInputCombinationField(payload: PayloadForOnInputCombinationField) {
      this.$emit('on-input-combination-field', payload)
    },
  },
})
