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
    changeIsTainted(args: ArgsOfChangeIsTainted): void {
      this.$store.commit(`${args.namespace}/changeIsTainted`, args)
    },
  },
})
