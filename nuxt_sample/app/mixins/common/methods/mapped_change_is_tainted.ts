// import node_modules
import Vue from 'vue'

// types
type ArgsOfChangeIsTainted = {
  namespace: string
  sharedKey: string
  value: boolean
}

// Vue.extend
export default Vue.extend({
  methods: {
    mappedChangeIsTainted(args: ArgsOfChangeIsTainted): void {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeIsTainted`, payload)
    },
  },
})
