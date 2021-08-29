// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import fieldBase from '~/mixins/common/field_base'

// types
import { ArgsForOnChangeOrBlurCombinationField } from '~/types/args_for_on_change_or_blur_combination_field'
import { PayloadOfChangeFieldOrBlurField } from '~/types/payload_of_change_field_or_blur_field'
export type Option = {
  label: string
  value: string
}

// Vue.extend
export default Vue.extend({
  mixins: [fieldBase],
  props: {
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
      const classes = ['selectField0001', ...(this as any).modifiers]

      if ((this as any).hasRealtimeErrors) {
        classes.push('selectField0001--invalid')
      }

      return classes
    },
    bindValue: {
      get(): string {
        return (this as any).fieldValue
      },
      set(value: string) {
        const combinationField: ArgsForOnChangeOrBlurCombinationField | null = (this as any)
          .combinationField
          ? {
              namespace: (this as any).namespace,
              sharedKey: (this as any).combinationField.sharedKey,
              combinationSharedKeys: (this as any).combinationField
                .combinationSharedKeys,
              fieldValueObj: (this as any).fieldValueObj,
              isTaintedObj: (this as any).isTaintedObj,
              eventType: 'blur',
              validatorNamesThatDependsOnDynamicOptions: (this as any)
                .combinationField.validatorNamesThatDependsOnDynamicOptions,
            }
          : null

        const payload: PayloadOfChangeFieldOrBlurField = {
          namespace: (this as any).namespace,
          fieldValueObj: (this as any).fieldValueObj,
          isTaintedObj: (this as any).isTaintedObj,
          sharedKey: (this as any).sharedKey,
          value,
          eventType: 'change',
          validatorNamesThatDependsOnDynamicOptions: (this as any)
            .validatorNamesThatDependsOnDynamicOptions,
          combinationField,
        }

        ;(this as any).$_emitChangeField(payload)
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
