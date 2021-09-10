// import node_modules
import Vue from 'vue'

// utils
import { validateSingle } from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { ArgsForHandleInputCombinationField } from '~/types/args_for_handle_input_combination_field'
import { ArgsForHandleInputField } from '~/types/args_for_handle_input_field'

// Vue.extend
export const handleInputField = Vue.extend({
  methods: {
    $_handleInputField(payload: ArgsForHandleInputField) {
      ;(this as any).$_mutateFieldValue({
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
            constraintsBaseOfAll,
          })
        : []

      ;(this as any).$_mutateRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField) {
        this.$_handleInputCombinationField(payload.combinationField)
      }
    },
    $_handleInputCombinationField(
      combinationField: ArgsForHandleInputCombinationField
    ) {
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

      ;(this as any).$_mutateFieldValue({
        namespace: combinationField.namespace,
        sharedKey,
        value,
      })
      ;(this as any).$_mutateIsTainted({
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
            constraintsBaseOfAll,
          })
        : []

      ;(this as any).$_mutateRealtimeErrors({
        namespace: combinationField.namespace,
        sharedKey,
        value: validationResult,
      })
    },
  },
})
