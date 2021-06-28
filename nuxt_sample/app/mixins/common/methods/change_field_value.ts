// import node_modules
import Vue from 'vue'

// types
type ArgsOfChangeFieldValue = {
  key: string
  value: string
}

// Vue.extend
export default Vue.extend({
  methods: {
    changeFieldValue(namespace: string, args: ArgsOfChangeFieldValue): void {
      this.$store.commit(`${namespace}/changeFieldValue`, args)
    },
  },
})
