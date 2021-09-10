// NOTE: このmixinはapp/layoutsとapp/pages以外の全てのコンポーネントで必ず使用してください。

// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { emitters } from '~/mixins/common/unclassifiable/methods/emitters'

// Vue.extend
export const everyChild = Vue.extend({
  mixins: [emitters],
  props: {
    identifier: {
      type: String as PropType<string>,
      required: true,
    },
    namespace: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
})
