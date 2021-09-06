// import node_modules
import Vue from 'vue'

// types
type ArgsForMappedChangeRealtimeErrors = {
  namespace: string
  sharedKey: string
  value: string[]
}

// Vue.extend
export const mappedChangeRealtimeErrors = Vue.extend({
  methods: {
    $_mappedChangeRealtimeErrors(args: ArgsForMappedChangeRealtimeErrors) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeRealtimeErrors`, payload)
    },
  },
})
