// import node_modules
import Vue from 'vue'

// types
type ArgsOfChangeRealtimeErrors = {
  namespace: string
  sharedKey: string
  value: string[]
}

// Vue.extend
export default Vue.extend({
  methods: {
    changeRealtimeErrors(args: ArgsOfChangeRealtimeErrors): void {
      this.$store.commit(`${args.namespace}/changeRealtimeErrors`, args)
    },
  },
})
