// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/molecules_and_atoms
import BasicField0001 from '~/components/common/molecules_and_atoms/basic_field_0001/index.vue'

// Vue.extend
export const basicFieldUnit = Vue.extend({
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