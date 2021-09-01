// import node_modules
import Vue from 'vue'

// types
type ArgsForMappedChangeFieldValue = {
  namespace: string
  sharedKey: string
  value: string
}

// Vue.extend
export default Vue.extend({
  methods: {
    $_mappedChangeFieldValue(args: ArgsForMappedChangeFieldValue) {
      const payload = {
        sharedKey: args.sharedKey,
        value: args.value,
      }

      this.$store.commit(`${args.namespace}/changeFieldValue`, payload)
    },
  },
})
