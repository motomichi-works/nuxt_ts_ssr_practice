// import node_modules
import Vue from 'vue'

// types
type ArgsForMappedChangeIsTainted = {
  namespace: string
  sharedKey: string
  value: boolean
}

// Vue.extend
export default Vue.extend({
  methods: {
    $_mappedChangeIsTainted(args: ArgsForMappedChangeIsTainted) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeIsTainted`, payload)
    },
  },
})
