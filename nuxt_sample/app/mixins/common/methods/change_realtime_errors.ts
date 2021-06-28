// import node_modules
import Vue from 'vue'

// types
type ArgsOfChangeRealtimeErrors = {
  key: string
  value: string[]
}

// Vue.extend
export default Vue.extend({
  methods: {
    changeRealtimeErrors(
      namespace: string,
      args: ArgsOfChangeRealtimeErrors
    ): void {
      this.$store.commit(`${namespace}/changeRealtimeErrors`, args)
    },
  },
})
