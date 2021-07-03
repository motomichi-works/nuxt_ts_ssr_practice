// import node_modules
import Vue, { PropType } from 'vue'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'
type OptionsObj = {
  field1: Option[]
  field2?: Option[]
  field3?: Option[]
  field4?: Option[]
}
// Vue.extend
export default Vue.extend({
  props: {
    optionsObj: {
      type: Object as PropType<OptionsObj>,
      required: false,
      default: () => ({ field1: [{ label: '選択してください', value: '' }] }),
    },
  },
})
