import { ArgsForHandleChangeCombinationFieldOrBlurCombinationField } from '~/types/args_for_handle_change_combination_field_or_blur_combination_field'

export type ArgsForHandleChangeFieldOrBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  sharedKey: string
  value: string
  eventType: 'change' | 'blur'
  combinationField: ArgsForHandleChangeCombinationFieldOrBlurCombinationField | null
}
