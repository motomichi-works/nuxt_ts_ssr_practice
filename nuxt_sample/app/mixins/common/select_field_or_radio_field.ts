// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import fieldBase from '~/mixins/common/field_base'

// types
import { PayloadForOnChangeField } from '~/types/payload_for_on_change_field'
export type Option = {
  label: string
  value: string
}

// Vue.extend
export default Vue.extend({
  mixins: [fieldBase],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['select-field-0001--size-md'],
    },
    options: {
      type: Array as PropType<Option[]>,
      required: false,
      default: () => [{ label: '選択してください', value: '' }],
    },
  },
  data() {
    return {
      refreshKey: 0,
    }
  },
  computed: {
    classes() {
      const classes = ['select-field-0001', ...this.modifiers]

      if ((this as any).hasRealtimeErrors) {
        classes.push('select-field-0001--invalid')
      }

      return classes
    },
    bindValue: {
      get(): string {
        return (this as any).value
      },
      set(value: string) {
        const payload: PayloadForOnChangeField = {
          namespace: (this as any).namespace,
          key: (this as any).nameProperty,
          value,
          eventType: 'change',
          validatorNames: (this as any).validatorNames,
        }

        ;(this as any).emitOnChangeField(payload)
      },
    },
    selectedLabel() {
      const selectedOption = this.options.find((option) => {
        return option.value === (this as any).value
      })

      return selectedOption ? selectedOption.label : ''
    },
  },
  watch: {
    options() {
      ;(this.refreshKey as any)++
    },
  },
})
