// import node_modules
import Vue, { PropType } from 'vue'

// store, store types
import { FieldValueObj, RealtimeErrorsObj } from '~/store/styleguidesIndex'

// Vue.extend
export const containingTheField = Vue.extend({
  props: {
    fieldValueObj: {
      type: Object as PropType<FieldValueObj>,
      required: true,
    },
    realtimeErrorsObj: {
      type: Object as PropType<RealtimeErrorsObj>,
      required: true,
    },
    isTaintedObj: {
      type: Object as PropType<RealtimeErrorsObj>,
      required: true,
    },
  },
})
