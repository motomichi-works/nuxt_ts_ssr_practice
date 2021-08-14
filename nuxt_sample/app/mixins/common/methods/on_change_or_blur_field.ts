// import node_modules
import Vue from 'vue'

// utils
import validateSingle from '~/utils/validate_single'
import { constraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

// types
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

      if (payload.combinationField) {
        this.onChangeOrBlurCombinationField(payload.combinationField)
      }
    },
    onChangeOrBlurCombinationField(combinationField: {
      namespace: string
      fieldValueObj: { [key: string]: string }
      sharedKey: string
      realtimeErrors: string[]
      value: string
      combinationFieldValueObj: { [key: string]: string }
      isTainted: boolean
      eventType: 'input' | 'change' | 'blur'
      validatorNamesThatDependsOnDynamicOptions: string[]
    }) {
      console.log('onChangeOrBlurCombinationField', combinationField)
      ;(this as any).mappedChangeFieldValue({
        namespace: combinationField.namespace,
        sharedKey: combinationField.sharedKey,
        value: combinationField.value,
      })

      // NOTE: changeイベント、またはblurイベントが発火したとき、isTaintedをtrueにします。
      ;(this as any).mappedChangeIsTainted({
        namespace: combinationField.namespace,
        sharedKey: combinationField.sharedKey,
        value: true,
      })

      const validationResult = validateSingle(
        {
          ...combinationField,
          ...{
            value: combinationField.combinationFieldValueObj,
          },
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
