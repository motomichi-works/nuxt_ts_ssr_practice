// import node_modules
import Vue from 'vue'

// components
import Header0001 from '~/components/common/header_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    Header0001,
  },
  computed: {
    identifiers() {
      return ['BodyInner']
    },
    joinedIdentifiers() {
      return (this as any).identifiers.join('/')
    },
  },
})
