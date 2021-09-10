// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { fieldUnitBase } from '~/mixins/common/molecules_and_atoms/field_unit_base'

// types
import { Option } from '~/mixins/common/molecules_and_atoms/select_field_or_radio_field'

// Vue.extend
export const selectFieldUnitOrRadioFieldUnit = Vue.extend({
  mixins: [fieldUnitBase],
  props: {
    items: {
      type: Array as PropType<
        {
          field: {
            name: string
            sharedKey: string
            realtimeErrors: string[]
            options: Option[]
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
