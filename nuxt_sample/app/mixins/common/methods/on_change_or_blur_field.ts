// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { PayloadForOnInputChangeBlurField } from '~/types/payload_for_on_input_change_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onChangeOrBlurField(payload: PayloadForOnInputChangeBlurField) {
      ;(this as any).changeFieldValue(payload)

      // NOTE: changeイベント、またはblurイベントが発火したとき、isTaintedをtrueにします。
      ;(this as any).changeIsTainted({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: true,
      })

      const validationResult = validateSingle(payload, constraintsBaseOfAll)

      ;(this as any).changeRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField) {
        console.log('onChangeOrBlurField combination', payload.combinationField)
      }
    },
  },
})
