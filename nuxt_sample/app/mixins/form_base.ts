// import node_modules
import validate from 'validate.js'
import Vue from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import constraintsBase, {
  Constraints,
} from '~/utils/validator/pages/styleguides/index/constraints'

// require node_modules
const cloneDeep = require('lodash.clonedeep')

// define types
type ArgsOfOnInputField = {
  key: string
  value: string
  eventType: 'input'
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
type ArgsOfValidateSingle = {
  key: string
  value: string
  eventType: 'input' | 'blur'
  validatorNames: string[]
}

// Vue.extend
export default Vue.extend({
  computed: {
    constraints(): Constraints {
      const constraintsWithOptions = this.addOptionsToConstraints(
        constraintsBase
      )
      return constraintsWithOptions
    },
    fieldValues() {
      return this.$store.getters['styleguides/fieldValues'] as FieldValues
    },
    realtimeErrors() {
      return this.$store.getters['styleguides/realtimeErrors'] as RealtimeErrors
    },
  },
  methods: {
    addOptionsToConstraints(args: Constraints): Constraints {
      const constraints: Constraints = cloneDeep(args)
      const fieldValues = this.fieldValues as FieldValues
      const constraintsKeys = Object.keys(constraints)

      constraintsKeys.forEach((constraintsKey) => {
        const validadorNames = Object.keys(constraints[constraintsKey])
        validadorNames.forEach((validadorName) => {
          constraints[constraintsKey][validadorName].prevValues = fieldValues
        })
      })

      return constraints
    },
    onInputField(payload: ArgsOfOnInputField) {
      const validationResult = this.validateSingle(payload)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      const validationResult = this.validateSingle(payload)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    validateSingle(args: ArgsOfValidateSingle): string[] {
      const constraintsKey = args.key
      const constraint = this.constraints[constraintsKey]

      args.validatorNames.forEach((validatorName) => {
        constraint[validatorName].eventType = args.eventType
      })

      const result = validate.single(
        args.value,
        this.constraints[constraintsKey]
      )

      return result ?? []
    },
    changeRealtimeErrors(args: ArgsOfChangeRealtimeErrors): void {
      this.$store.commit('styleguides/changeRealtimeErrors', args)
    },
    changeFieldValue(args: ArgsOfChangeFieldValue): void {
      this.$store.commit('styleguides/changeFieldValue', args)
    },
  },
})
