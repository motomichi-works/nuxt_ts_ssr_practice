// import node_modules
import Vue from 'vue'

// types
type ArgsForMutateRealtimeErrors = {
  namespace: string
  sharedKey: string
  value: string[]
}

// Vue.extend
export const mutateRealtimeErrors = Vue.extend({
  methods: {
    $_mutateRealtimeErrors(args: ArgsForMutateRealtimeErrors) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeRealtimeErrors`, payload)
    },
  },
})
