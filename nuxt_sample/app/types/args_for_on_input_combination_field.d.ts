export type ArgsForOnInputCombinationField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  sharedKey: string
  realtimeErrors: string[]
  value: string
  combinationFieldValueObj: { [key: string]: string }
  isTainted: boolean
  eventType: 'input'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
