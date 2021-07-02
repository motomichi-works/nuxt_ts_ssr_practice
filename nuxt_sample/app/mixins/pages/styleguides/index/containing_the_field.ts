// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValueObj, RealtimeErrors } from '~/store/styleguides/index'

// Vue.extend
export default Vue.extend({
  props: {
    fieldValueObj: {
      type: Object as PropType<FieldValueObj>,
      required: true,
    },
    realtimeErrors: {
      type: Object as PropType<RealtimeErrors>,
      required: true,
    },
  },
})
