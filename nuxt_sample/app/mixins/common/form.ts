// NOTE: このmixinはformタグを設置したコンポーネントに使用してください。

// import node_modules
import Vue from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import {
  constraintsBase,
  ConstraintsBase,
} from '~/utils/validator/pages/styleguides/index/constraints'
import validateSingle from '~/utils/validate_single'

// define types
type ArgsOfOnInputField = {
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}
type ArgsOfOnChangeField = {
  key: string
  value: string
  eventType: 'change'
  validatorNames: string[]
}
type ArgsOfOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}
type ArgsOfChangeRealtimeErrors = {
  key: string
  value: string[]
}
type ArgsOfChangeFieldValue = {
  key: string
  value: string
}

// Vue.extend
export default Vue.extend({
  computed: {
    constraints(): ConstraintsBase {
      return constraintsBase
    },
    fieldValues(): FieldValues {
      return this.$store.getters['styleguides/fieldValues']
    },
    realtimeErrors(): RealtimeErrors {
      return this.$store.getters['styleguides/realtimeErrors']
    },
  },
  methods: {
    validateSingle,
    onInputField(payload: ArgsOfOnInputField) {
      const validationResult = this.validateSingle(
        payload,
        this.constraints,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onChangeField(payload: ArgsOfOnChangeField) {
      const validationResult = this.validateSingle(
        payload,
        this.constraints,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      const validationResult = this.validateSingle(
        payload,
        this.constraints,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },

    changeRealtimeErrors(args: ArgsOfChangeRealtimeErrors): void {
      this.$store.commit('styleguides/changeRealtimeErrors', args)
    },
    changeFieldValue(args: ArgsOfChangeFieldValue): void {
      this.$store.commit('styleguides/changeFieldValue', args)
    },
  },
})
