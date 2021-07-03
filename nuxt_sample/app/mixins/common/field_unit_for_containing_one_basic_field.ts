// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/common
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    BasicField0001,
  },
  props: {
    placeholder: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    maxlength: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    leftIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
    rightIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
  },
})
