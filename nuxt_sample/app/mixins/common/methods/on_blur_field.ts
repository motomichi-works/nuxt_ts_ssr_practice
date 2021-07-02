// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { PayloadForOnBlurField } from '~/types/payload_for_on_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onBlurField(payload: PayloadForOnBlurField) {
      ;(this as any).changeFieldValue(payload)

      const validationResult = validateSingle(payload, constraintsBaseOfAll)

      ;(this as any).changeRealtimeErrors({
        namespace: payload.namespace,
        key: payload.key,
        value: validationResult,
      })
    },
  },
})
