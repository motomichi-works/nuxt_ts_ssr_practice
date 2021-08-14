// NOTE: このmixinはapp/layoutsとapp/pages以外の全てのコンポーネントで必ず使用してください。

// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import emitOnInputField from '~/mixins/common/methods/emit_on_input_field'
import emitChangeField from '~/mixins/common/methods/emit_change_field'
import emitBlurField from '~/mixins/common/methods/emit_blur_field'

// Vue.extend
export default Vue.extend({
  mixins: [emitOnInputField, emitBlurField, emitChangeField],
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    namespace: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
  computed: {
    joinedIdentifiers() {
      return this.identifiers.join('/')
    },
  },
})
