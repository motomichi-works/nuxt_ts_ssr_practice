// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/molecules_and_atoms
import BasicField0001 from '~/components/common/molecules_and_atoms/basic_field_0001.vue'

// mixins
import { fieldUnitBase } from '~/mixins/common/molecules_and_atoms/field_unit_base'

// Vue.extend
export const basicFieldUnit = Vue.extend({
  components: {
    BasicField0001,
  },
  mixins: [fieldUnitBase],
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
