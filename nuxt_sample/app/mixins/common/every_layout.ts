// import node_modules
import Vue from 'vue'

// Vue.extend
export default Vue.extend({
  computed: {
    identifiers() {
      return ['BodyInner']
    },
    joinedIdentifiers() {
      return (this as any).identifiers.join('/')
    },
  },
})
