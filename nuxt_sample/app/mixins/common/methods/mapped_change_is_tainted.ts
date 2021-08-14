// import node_modules
import Vue from 'vue'

// types
type ArgsForChangeIsTainted = {
  namespace: string
  sharedKey: string
  value: boolean
}

// Vue.extend
export default Vue.extend({
  methods: {
    mappedChangeIsTainted(args: ArgsForChangeIsTainted): void {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeIsTainted`, payload)
    },
  },
})
