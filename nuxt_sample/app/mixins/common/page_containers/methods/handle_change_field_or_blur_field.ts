// import node_modules
import Vue from 'vue'

// utils
import { validateSingle } from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { ArgsForHandleChangeCombinationFieldOrBlurCombinationField } from '~/types/args_for_handle_change_combination_field_or_blur_combination_field'
import { ArgsForHandleChangeFieldOrBlurField } from '~/types/args_for_handle_change_field_or_blur_field'

// Vue.extend
export const handleChangeFieldOrBlurField = Vue.extend({
  methods: {
    $_handleChangeFieldOrBlurField(
      payload: ArgsForHandleChangeFieldOrBlurField
    ) {
      // NOTE: changeイベント、またはblurイベントが発火したとき、trimしてからstateに入れる
      payload.value = payload.value.trim()
      ;(this as any).$_mutateFieldValue({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: payload.value,
      })

      // NOTE: changeイベント、またはblurイベントが発火したとき、isTaintedをtrueにします。
      ;(this as any).$_mutateIsTainted({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: true,
      })

      const validationResult = validateSingle({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        fieldValueObj: payload.fieldValueObj,
        value: payload.value,
        eventType: payload.eventType,
        constraintsBaseOfAll,
      })

      ;(this as any).$_mutateRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField !== null) {
        this.$_handleChangeCombinationFieldOrBlurCombinationField(
          payload.combinationField
        )
      }
    },
    $_handleChangeCombinationFieldOrBlurCombinationField(
      combinationField: ArgsForHandleChangeCombinationFieldOrBlurCombinationField
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

      const validationResult = validateSingle({
        namespace: combinationField.namespace,
        sharedKey,
        fieldValueObj: combinationField.fieldValueObj,
        value,
        eventType: combinationField.eventType,
        constraintsBaseOfAll,
      })
      ;(this as any).$_mutateRealtimeErrors({
        namespace: combinationField.namespace,
        sharedKey,
        value: validationResult,
      })
    },
  },
})
