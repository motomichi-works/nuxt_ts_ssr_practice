// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/common
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'

// types
type PlaceholderObj = {
  field1: string
  field2?: string
  field3?: string
  field4?: string
}
type MaxlengthObj = {
  field1: string
  field2?: string
  field3?: string
  field4?: string
}
type LeftIconObj = {
  field1: IconDefinition | null
  field2?: IconDefinition | null
  field3?: IconDefinition | null
  field4?: IconDefinition | null
}
type RightIconObj = {
  field1: IconDefinition | null
  field2?: IconDefinition | null
  field3?: IconDefinition | null
  field4?: IconDefinition | null
}

// Vue.extend
export default Vue.extend({
  components: {
    BasicField0001,
  },
  props: {
    placeholderObj: {
      type: Object as PropType<PlaceholderObj>,
      required: false,
      default: () => ({ field1: '' }),
    },
    maxlengthObj: {
      type: Object as PropType<MaxlengthObj>,
      required: false,
      default: () => ({ field1: '' }),
    },
    leftIconObj: {
      type: Object as PropType<LeftIconObj>,
      required: false,
      default: () => ({ field1: null }),
    },
    rightIconObj: {
      type: Object as PropType<RightIconObj>,
      required: false,
      default: () => ({ field1: null }),
    },
  },
})
