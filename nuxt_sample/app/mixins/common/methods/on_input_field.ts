// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { ArgsForOnInputCombinationField } from '~/types/args_for_on_input_combination_field'
import { PayloadOfInputField } from '~/types/payload_of_input_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onInputField(payload: PayloadOfInputField) {
      ;(this as any).mappedChangeFieldValue({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: payload.value,
      })

      const isTaintedObj = payload.isTaintedObj
      const sharedKey = payload.sharedKey

      // NOTE: 以下の意図があります。
      // - isTaintedでない場合はページ描画後の初回入力なので、入力途中でエラーメッセージを表示しない
      // - isTaintedでない場合は、サーバーサイドから渡されたエラーメッセージをinputイベントで非表示にする
      const validationResult = isTaintedObj[sharedKey]
        ? validateSingle({
            namespace: payload.namespace,
            sharedKey: payload.sharedKey,
            fieldValueObj: payload.fieldValueObj,
            value: payload.value,
            eventType: payload.eventType,
            validatorNamesThatDependsOnDynamicOptions:
              payload.validatorNamesThatDependsOnDynamicOptions,
            constraintsBaseOfAll,
          })
        : []

      ;(this as any).mappedChangeRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField) {
        this.onInputCombinationField(payload.combinationField)
      }
    },
    onInputCombinationField(combinationField: ArgsForOnInputCombinationField) {
      const sharedKey = combinationField.sharedKey
      const value = combinationField.combinationSharedKeys
        .map((key) => {
          return combinationField.fieldValueObj[key]
        })
        .join('')
      const isTainted = combinationField.combinationSharedKeys
        .map((key) => {
          return combinationField.isTaintedObj[key]
        })
        .every((element) => element)

      ;(this as any).mappedChangeFieldValue({
        namespace: combinationField.namespace,
        sharedKey,
        value,
      })
      ;(this as any).mappedChangeIsTainted({
        namespace: combinationField.namespace,
        sharedKey,
        value: isTainted,
      })

      // NOTE: 以下の意図があります。
      // - isTaintedでない場合は組み合わせフィールドのうち1つ以上がページ描画後の初回入力なので、入力途中でエラーメッセージを表示しない
      // - isTaintedでない場合は、サーバーサイドから渡されたエラーメッセージをinputイベントで非表示にする
      const validationResult = isTainted
        ? validateSingle({
            namespace: combinationField.namespace,
            sharedKey,
            fieldValueObj: combinationField.fieldValueObj,
            value,
            eventType: combinationField.eventType,
            validatorNamesThatDependsOnDynamicOptions:
              combinationField.validatorNamesThatDependsOnDynamicOptions,
            constraintsBaseOfAll,
          })
        : []

      ;(this as any).mappedChangeRealtimeErrors({
        namespace: combinationField.namespace,
        sharedKey,
        value: validationResult,
      })
    },
  },
})
