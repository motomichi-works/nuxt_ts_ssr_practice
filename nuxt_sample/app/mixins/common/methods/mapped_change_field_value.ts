// import node_modules
import Vue from 'vue'

// types
type ArgsOfMappedChangeFieldValue = {
  namespace: string
  sharedKey: string
  value: string
}

// Vue.extend
export default Vue.extend({
  methods: {
    mappedChangeFieldValue(args: ArgsOfMappedChangeFieldValue): void {
      this.$store.commit(`${args.namespace}/changeFieldValue`, args)
    },
  },
})
