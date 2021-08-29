import { ArgsForHandleChangeCombinationFieldOrBlurCombinationField } from '~/types/args_for_on_change_or_blur_combination_field'

export type ArgsForHandleChangeFieldOrBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  sharedKey: string
  value: string
  eventType: 'change' | 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: ArgsForHandleChangeCombinationFieldOrBlurCombinationField | null
}
