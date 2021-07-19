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
          field: {
            nameProperty: string
            sharedKey: string
            realtimeErrors: string[]
            options: Option[]
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
