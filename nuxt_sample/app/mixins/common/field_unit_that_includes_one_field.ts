// import node_modules
import Vue, { PropType } from 'vue'

// Vue.extend
export default Vue.extend({
  props: {
    validatorNamesThatDependsOnDynamicOptions: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    nameProperty: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    sharedKey: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
  computed: {
    fieldValue() {
      const key = this.sharedKey
      return (this as any).fieldValueObj[key]
    },
    realtimeErrors() {
      const key = this.sharedKey
      return (this as any).realtimeErrorsObj[key]
    },
    hasRealtimeErrors() {
      return (this as any).realtimeErrors.length > 0
    },
  },
})
