// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { ArgsForOnChangeOrBlurCombinationField } from '~/types/args_for_on_change_or_blur_combination_field'
import { PayloadOfChangeFieldOrBlurField } from '~/types/payload_of_change_field_or_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    $_handleChangeFieldOrBlurField(payload: PayloadOfChangeFieldOrBlurField) {
      ;(this as any).$_mappedChangeFieldValue({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: payload.value,
      })

      // NOTE: changeイベント、またはblurイベントが発火したとき、isTaintedをtrueにします。
      ;(this as any).$_mappedChangeIsTainted({
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
        validatorNamesThatDependsOnDynamicOptions:
          payload.validatorNamesThatDependsOnDynamicOptions,
        constraintsBaseOfAll,
      })

      ;(this as any).$_mappedChangeRealtimeErrors({
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
      combinationField: ArgsForOnChangeOrBlurCombinationField
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

      ;(this as any).$_mappedChangeFieldValue({
        namespace: combinationField.namespace,
        sharedKey,
        value,
      })
      ;(this as any).$_mappedChangeIsTainted({
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
        validatorNamesThatDependsOnDynamicOptions:
          combinationField.validatorNamesThatDependsOnDynamicOptions,
        constraintsBaseOfAll,
      })
      ;(this as any).$_mappedChangeRealtimeErrors({
        namespace: combinationField.namespace,
        sharedKey,
        value: validationResult,
      })
    },
  },
})
