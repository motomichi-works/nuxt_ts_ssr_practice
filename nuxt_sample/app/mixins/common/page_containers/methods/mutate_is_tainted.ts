// import node_modules
import Vue from 'vue'

// types
type ArgsForMutateIsTainted = {
  namespace: string
  sharedKey: string
  value: boolean
}

// Vue.extend
export const mutateIsTainted = Vue.extend({
  methods: {
    $_mutateIsTainted(args: ArgsForMutateIsTainted) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeIsTainted`, payload)
    },
  },
})
