// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// mixins
import fieldBase from '~/mixins/common/field_base'
// define types
import { PayloadForOnInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  mixins: [fieldBase],
  props: {
    modifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ['basic-field-0001--size-md'],
    },
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
  computed: {
    classes() {
      const classes = ['basic-field-0001', ...this.modifiers]

      if (this.leftIcon !== null) {
        classes.push('basic-field-0001--icon-absolute-left')
      }
      if (this.rightIcon !== null) {
        classes.push('basic-field-0001--icon-absolute-right')
      }
      if ((this as any).hasRealtimeErrors) {
        classes.push('basic-field-0001--invalid')
      }

      return classes
    },
    isVisibleLeftIcon() {
      return this.leftIcon !== null
    },
    isVisibleRightIcon() {
      return this.rightIcon !== null
    },
    bindValue: {
      get(): string {
        return (this as any).value
      },
      set(value: string) {
        const payload: PayloadForOnInputField = {
          key: (this as any).nameProperty,
          value,
          eventType: 'input',
          validatorNames: (this as any).validatorNames,
        }

        ;(this as any).emitOnInputField(payload)
      },
    },
  },
})
