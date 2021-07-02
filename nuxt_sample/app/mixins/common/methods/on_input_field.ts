// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { PayloadForOnInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onInputField(payload: PayloadForOnInputField) {
      ;(this as any).changeFieldValue(payload)

      const isTaintedObj = payload.isTaintedObj
      const key = payload.key

      // NOTE: 以下の意図があります。
      // - isTaintedでない場合はページ描画後の初回入力なので、入力途中でエラーメッセージを表示しない
      // - isTaintedでない場合は、サーバーサイドから渡されたエラーメッセージをinputイベントで非表示にする
      const validationResult = isTaintedObj[key]
        ? validateSingle(payload, constraintsBaseOfAll)
        : []

      ;(this as any).changeRealtimeErrors({
        namespace: payload.namespace,
        key: payload.key,
        value: validationResult,
      })
    },
  },
})
