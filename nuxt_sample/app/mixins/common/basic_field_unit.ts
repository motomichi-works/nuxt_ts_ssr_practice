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
    items: {
      type: Array as PropType<
        {
          field: {
            name: string
            sharedKey: string
            realtimeErrors: string[]
            placeholder: string
            maxlength: string
            leftIcon: IconDefinition | null
            rightIcon: IconDefinition | null
            fieldModifiers: string[]
            validatorNamesThatDependsOnDynamicOptions: string[]
            isDisabled: boolean
            isReadonly: boolean
          } | null
          plainText: string | null
        }[]
      >,
      required: true,
    },
  },
})
