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
    onInputField(payload: PayloadForOnInputChangeBlurField) {
      ;(this as any).changeFieldValue(payload)

      const isTaintedObj = payload.isTaintedObj
      const sharedKey = payload.sharedKey

      // NOTE: 以下の意図があります。
      // - isTaintedでない場合はページ描画後の初回入力なので、入力途中でエラーメッセージを表示しない
      // - isTaintedでない場合は、サーバーサイドから渡されたエラーメッセージをinputイベントで非表示にする
      const validationResult = isTaintedObj[sharedKey]
        ? validateSingle(payload, constraintsBaseOfAll)
        : []

      ;(this as any).changeRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField) {
        console.log('onInputField combination', payload.combinationField)
      }
    },
  },
})
