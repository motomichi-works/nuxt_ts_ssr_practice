// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import { ConstraintsBase } from '~/utils/validator/pages/styleguides/index/constraints_base'

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

// Vue.extend
export default Vue.extend({
  props: {
    constraintsBase: {
      type: Object as PropType<ConstraintsBase>,
      required: true,
    },
    fieldValues: {
      type: Object as PropType<FieldValues>,
      required: true,
    },
    realtimeErrors: {
      type: Object as PropType<RealtimeErrors>,
      required: true,
    },
  },
  methods: {
    onInputField(payload: ArgsOfOnInputField) {
      this.$emit('on-input-field', payload)
    },
    onChangeField(payload: ArgsOfOnChangeField) {
      this.$emit('on-change-field', payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      this.$emit('on-blur-field', payload)
    },
  },
})
