// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// Vue.extend
export default Vue.extend({
  props: {
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
