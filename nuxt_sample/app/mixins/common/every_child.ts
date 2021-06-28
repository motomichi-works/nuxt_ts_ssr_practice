// NOTE: このmixinはapp/layoutsとapp/pages以外の全てのコンポーネントで必ず使用してください。

// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import emitOnInputField from '~/mixins/common/methods/emit_on_input_field'
import emitOnChangeField from '~/mixins/common/methods/emit_on_change_field'
import emitOnBlurField from '~/mixins/common/methods/emit_on_blur_field'

// Vue.extend
export default Vue.extend({
  mixins: [emitOnInputField, emitOnBlurField, emitOnChangeField],
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
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
})
