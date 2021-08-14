// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
import { ArgsForOnChangeOrBlurCombinationField } from '~/types/args_for_on_change_or_blur_combination_field'
import { PayloadForOnChangeOrBlurField } from '~/types/payload_for_on_change_or_blur_field'

// Vue.extend
export default Vue.extend({
  methods: {
    onChangeOrBlurField(payload: PayloadForOnChangeOrBlurField) {
      ;(this as any).mappedChangeFieldValue({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: payload.value,
      })

      // NOTE: changeイベント、またはblurイベントが発火したとき、isTaintedをtrueにします。
      ;(this as any).mappedChangeIsTainted({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: true,
      })

      const validationResult = validateSingle(payload, constraintsBaseOfAll)

      ;(this as any).mappedChangeRealtimeErrors({
        namespace: payload.namespace,
        sharedKey: payload.sharedKey,
        value: validationResult,
      })

      if (payload.combinationField !== null) {
        this.onChangeOrBlurCombinationField(payload.combinationField)
      }
    },
    onChangeOrBlurCombinationField(
      combinationField: ArgsForOnChangeOrBlurCombinationField
    ) {
      ;(this as any).mappedChangeFieldValue({
        namespace: combinationField.namespace,
        sharedKey: combinationField.sharedKey,
        value: combinationField.value,
      })
      ;(this as any).mappedChangeIsTainted({
        namespace: combinationField.namespace,
        sharedKey: combinationField.sharedKey,
        value: combinationField.isTainted,
      })

      const validationResult = validateSingle(
        {
          namespace: combinationField.namespace,
          sharedKey: combinationField.sharedKey,
          fieldValueObj: combinationField.fieldValueObj,
          value: combinationField.combinationFieldValueObj,
          eventType: combinationField.eventType,
          validatorNamesThatDependsOnDynamicOptions:
            combinationField.validatorNamesThatDependsOnDynamicOptions,
        },
        constraintsBaseOfAll
      )
      ;(this as any).mappedChangeRealtimeErrors({
        namespace: combinationField.namespace,
        sharedKey: combinationField.sharedKey,
        value: validationResult,
      })
    },
  },
})
