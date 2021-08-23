export type ArgsForOnInputCombinationField = {
  namespace: string
  sharedKey: string
  combinationSharedKeys: string[]
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  eventType: 'input'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
