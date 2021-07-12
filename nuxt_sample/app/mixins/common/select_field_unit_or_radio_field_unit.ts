// import node_modules
import Vue, { PropType } from 'vue'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<
        {
          nameProperty: string | null
          sharedKey: string | null
          realtimeErrors: string[]
          options: Option[]
          fieldModifiers: string[]
          validatorNamesThatDependsOnDynamicOptions: string[]
          isDisabled: boolean
          isReadonly: boolean
          plainText: string
        }[]
      >,
      required: true,
    },
  },
})
