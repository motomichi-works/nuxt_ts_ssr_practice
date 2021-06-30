// import node_modules
import Vue from 'vue'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    Heading0001,
  },
  computed: {
    identifierStr() {
      return 'Page'
    },
  },
})
