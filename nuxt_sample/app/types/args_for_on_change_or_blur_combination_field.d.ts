export type ArgsForOnChangeOrBlurCombinationField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  sharedKey: string
  value: string
  combinationFieldValueObj: { [key: string]: string }
  isTainted: boolean
  eventType: 'change' | 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
