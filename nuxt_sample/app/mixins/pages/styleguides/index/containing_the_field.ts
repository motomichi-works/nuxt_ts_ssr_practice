// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// utils
import { ConstraintsBaseOfAll } from '~/utils/validator/constraints_base_of_all'

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
})
