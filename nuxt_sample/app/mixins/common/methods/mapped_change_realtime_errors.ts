// import node_modules
import Vue from 'vue'

// types
type ArgsOfMappedChangeRealtimeErrors = {
  namespace: string
  sharedKey: string
  value: string[]
}

// Vue.extend
export default Vue.extend({
  methods: {
    mappedChangeRealtimeErrors(args: ArgsOfMappedChangeRealtimeErrors): void {
      this.$store.commit(`${args.namespace}/changeRealtimeErrors`, args)
    },
  },
})
