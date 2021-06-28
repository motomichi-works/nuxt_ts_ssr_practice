// import node_modules
import Vue from 'vue'

// types
type ArgsOfChangeFieldValue = {
  namespace: string
  key: string
  value: string
}

// Vue.extend
export default Vue.extend({
  methods: {
    changeFieldValue(args: ArgsOfChangeFieldValue): void {
      this.$store.commit(`${args.namespace}/changeFieldValue`, args)
    },
  },
})
