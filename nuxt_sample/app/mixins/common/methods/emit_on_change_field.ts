// import node_modules
import Vue from 'vue'

// types
import { PayloadForOnChangeField } from '~/types/payload_for_on_change_field'

// Vue.extend
export default Vue.extend({
  methods: {
    emitOnChangeField(payload: PayloadForOnChangeField) {
      this.$emit('on-change-field', payload)
    },
  },
})
