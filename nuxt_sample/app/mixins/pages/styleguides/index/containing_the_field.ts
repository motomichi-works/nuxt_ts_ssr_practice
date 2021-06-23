// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import { ConstraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

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
    constraintsBaseOfAll: {
      type: Object as PropType<ConstraintsBaseOfAll>,
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
