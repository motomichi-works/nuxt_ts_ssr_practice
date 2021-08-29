// import node_modules
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// mixins
import fieldBase from '~/mixins/common/field_base'

// types
import { ArgsForOnInputCombinationField } from '~/types/args_for_on_input_combination_field'
import { PayloadOfInputField } from '~/types/payload_for_on_input_field'

// Vue.extend
export default Vue.extend({
  components: {
    FontAwesomeIcon,
  },
  mixins: [fieldBase],
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
        const combinationField: ArgsForOnInputCombinationField | null = (this as any)
          .combinationField
          ? {
              namespace: (this as any).namespace,
              sharedKey: (this as any).combinationField.sharedKey,
              combinationSharedKeys: (this as any).combinationField
                .combinationSharedKeys,
              fieldValueObj: (this as any).fieldValueObj,
              isTaintedObj: (this as any).isTaintedObj,
              eventType: 'input',
              validatorNamesThatDependsOnDynamicOptions: (this as any)
                .combinationField.validatorNamesThatDependsOnDynamicOptions,
            }
          : null

        const payload: PayloadOfInputField = {
          namespace: (this as any).namespace,
          fieldValueObj: (this as any).fieldValueObj,
          isTaintedObj: (this as any).isTaintedObj,
          sharedKey: (this as any).sharedKey,
          value,
          eventType: 'input',
          validatorNamesThatDependsOnDynamicOptions: (this as any)
            .validatorNamesThatDependsOnDynamicOptions,
          combinationField,
        }

        ;(this as any).$_emitInputField(payload)
      },
    },
  },
})
