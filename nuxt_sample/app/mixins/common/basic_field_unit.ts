// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/common
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'

// types
type PlaceholderObj = {
  field01: string
  field02?: string
  field03?: string
  field04?: string
}
type MaxlengthObj = {
  field01: string
  field02?: string
  field03?: string
  field04?: string
}
type LeftIconObj = {
  field01: IconDefinition | null
  field02?: IconDefinition | null
  field03?: IconDefinition | null
  field04?: IconDefinition | null
}
type RightIconObj = {
  field01: IconDefinition | null
  field02?: IconDefinition | null
  field03?: IconDefinition | null
  field04?: IconDefinition | null
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
      default: () => ({ field01: '' }),
    },
    maxlengthObj: {
      type: Object as PropType<MaxlengthObj>,
      required: false,
      default: () => ({ field01: '' }),
    },
    leftIconObj: {
      type: Object as PropType<LeftIconObj>,
      required: false,
      default: () => ({ field01: null }),
    },
    rightIconObj: {
      type: Object as PropType<RightIconObj>,
      required: false,
      default: () => ({ field01: null }),
    },
  },
})
