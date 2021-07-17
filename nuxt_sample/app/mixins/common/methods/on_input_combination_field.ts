// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { PayloadForOnInputCombinationField } from '~/types/payload_for_on_input_combination_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onInputCombinationField(payload: PayloadForOnInputCombinationField) {
      ;(this as any).changeFieldValue(payload)
      ;(this as any).changeIsTainted({
        namespace: payload.namespace,
        key: payload.key,
        value: payload.isTainted,
      })

      // NOTE: 以下の意図があります。
      // - isTaintedでない場合はページ描画後の初回入力なので、入力途中でエラーメッセージを表示しない
      // - isTaintedでない場合は、サーバーサイドから渡されたエラーメッセージをinputイベントで非表示にする
      const validationResult = payload.isTainted
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
