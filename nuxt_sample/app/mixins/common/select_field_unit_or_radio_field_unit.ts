// import node_modules
import Vue, { PropType } from 'vue'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: false,
      default: () => [{ label: '選択してください', value: '' }],
    },
  },
})
