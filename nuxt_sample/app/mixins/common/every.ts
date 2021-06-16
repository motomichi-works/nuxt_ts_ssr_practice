// NOTE: このmixinはapp/layoutsとapp/pages以外の全てのコンポーネントで必ず使用してください。

// import node_modules
import Vue, { PropType } from 'vue'

// Vue.extend
export default Vue.extend({
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
})
