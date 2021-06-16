// NOTE: このmixinはformタグを設置したコンポーネントに使用してください。

// import node_modules
import Vue from 'vue'

// settings
import { sharedKeys } from '~/settings/pages/styleguides'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import {
  constraintsBase,
  ConstraintsBase,
} from '~/utils/validator/pages/styleguides/index/constraints'
import validateSingle from '~/utils/validate_single'

// require node_modules
const cloneDeep = require('lodash.clonedeep')

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
      const validatorNamesThatDependsOnOptions = ['customEmail'] as const

      // 動的なオプションを含んだconstraintsを取得する
      const constraintsWithDynamicOptions = this.getConstraintsWithDynamicOptions(
        constraintsBase,
        this.fieldValues,
        validatorNamesThatDependsOnOptions
      )

      return constraintsWithDynamicOptions
    },
    fieldValues() {
      return this.$store.getters['styleguides/fieldValues'] as FieldValues
    },
    realtimeErrors() {
      return this.$store.getters['styleguides/realtimeErrors'] as RealtimeErrors
    },
  },
  methods: {
    validateSingle,
    getConstraintsWithDynamicOptions(
      constraintsBase: ConstraintsBase,
      fieldValues: FieldValues,
      validatorNamesThatDependsOnOptions: readonly string[]
    ): ConstraintsBase {
      const constraints: ConstraintsBase = cloneDeep(constraintsBase)
      const constraintsKeys = sharedKeys

      constraintsKeys.forEach((constraintsKey) => {
        validatorNamesThatDependsOnOptions.forEach((validadorName) => {
          constraints[constraintsKey][validadorName].prevValues = fieldValues
        })
      })

      return constraints
    },
    onInputField(payload: ArgsOfOnInputField) {
      const validationResult = this.validateSingle(payload, this.constraints)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onChangeField(payload: ArgsOfOnChangeField) {
      const validationResult = this.validateSingle(payload, this.constraints)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      const validationResult = this.validateSingle(payload, this.constraints)
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
