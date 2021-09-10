// import node_modules
import Vue from 'vue'

// types
type ArgsForMutateFieldValue = {
  namespace: string
  sharedKey: string
  value: string
}

// Vue.extend
export const mutateFieldValue = Vue.extend({
  methods: {
    $_mutateFieldValue(args: ArgsForMutateFieldValue) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeFieldValue`, payload)
    },
  },
})
