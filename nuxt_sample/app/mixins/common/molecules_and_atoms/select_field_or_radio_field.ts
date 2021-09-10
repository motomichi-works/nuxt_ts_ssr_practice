// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { fieldBase } from '~/mixins/common/molecules_and_atoms/field_base'

// types
import { ArgsForHandleChangeCombinationFieldOrBlurCombinationField } from '~/types/args_for_handle_change_combination_field_or_blur_combination_field'
import { ArgsForHandleChangeFieldOrBlurField } from '~/types/args_for_handle_change_field_or_blur_field'
export type Option = {
  label: string
  value: string
}

// Vue.extend
export const selectFieldOrRadioField = Vue.extend({
  mixins: [fieldBase],
  props: {
    blockClassName: {
      type: String as PropType<string>,
      required: false,
      default: '',
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
      const classes = [this.blockClassName, ...(this as any).modifiers]

      if ((this as any).hasRealtimeErrors) {
        classes.push(`${this.blockClassName}--invalid`)
      }

      return classes
    },
    bindValue: {
      get(): string {
        return (this as any).fieldValue
      },
      set(value: string) {
        const combinationField: ArgsForHandleChangeCombinationFieldOrBlurCombinationField | null = (this as any)
          .combinationField
          ? {
              namespace: (this as any).namespace,
              sharedKey: (this as any).combinationField.sharedKey,
              combinationSharedKeys: (this as any).combinationField
                .combinationSharedKeys,
              fieldValueObj: (this as any).fieldValueObj,
              isTaintedObj: (this as any).isTaintedObj,
              eventType: 'blur',
            }
          : null

        const payload: ArgsForHandleChangeFieldOrBlurField = {
          namespace: (this as any).namespace,
          fieldValueObj: (this as any).fieldValueObj,
          isTaintedObj: (this as any).isTaintedObj,
          sharedKey: (this as any).sharedKey,
          value,
          eventType: 'change',
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
