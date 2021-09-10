// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'
import FontAwesomeIconWrapper from '~/components/common/molecules_and_atoms/font_awesome_icon_wrapper.vue'

// mixins
import { fieldBase } from '~/mixins/common/molecules_and_atoms/field_base'

// types
import { ArgsForHandleInputCombinationField } from '~/types/args_for_handle_input_combination_field'
import { ArgsForHandleInputField } from '~/types/args_for_handle_input_field'

// Vue.extend
export const basicField = Vue.extend({
  components: {
    FontAwesomeIconWrapper,
  },
  mixins: [fieldBase],
  props: {
    type: {
      type: String as PropType<string>,
      required: false,
      default: 'text',
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
      const classes = ['basicField0001', ...(this as any).modifiers]

      if (this.leftIcon !== null) {
        classes.push('basicField0001--iconAbsoluteLeft')
      }
      if (this.rightIcon !== null) {
        classes.push('basicField0001--iconAbsoluteRight')
      }
      if ((this as any).hasRealtimeErrors) {
        classes.push('basicField0001--invalid')
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
        return (this as any).fieldValue
      },
      set(value: string) {
        const combinationField: ArgsForHandleInputCombinationField | null = (this as any)
          .combinationField
          ? {
              namespace: (this as any).namespace,
              sharedKey: (this as any).combinationField.sharedKey,
              combinationSharedKeys: (this as any).combinationField
                .combinationSharedKeys,
              fieldValueObj: (this as any).fieldValueObj,
              isTaintedObj: (this as any).isTaintedObj,
              eventType: 'input',
            }
          : null

        const payload: ArgsForHandleInputField = {
          namespace: (this as any).namespace,
          fieldValueObj: (this as any).fieldValueObj,
          isTaintedObj: (this as any).isTaintedObj,
          sharedKey: (this as any).sharedKey,
          value,
          eventType: 'input',
          combinationField,
        }

        ;(this as any).$_emitInputField(payload)
      },
    },
  },
})
