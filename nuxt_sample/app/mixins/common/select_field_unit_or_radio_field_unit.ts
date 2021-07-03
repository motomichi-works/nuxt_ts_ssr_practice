// import node_modules
import Vue, { PropType } from 'vue'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'
type OptionsObj = {
  field01: Option[]
  field02?: Option[]
  field03?: Option[]
  field04?: Option[]
}
// Vue.extend
export default Vue.extend({
  props: {
    optionsObj: {
      type: Object as PropType<OptionsObj>,
      required: false,
      default: () => ({ field01: [{ label: '選択してください', value: '' }] }),
    },
  },
})
