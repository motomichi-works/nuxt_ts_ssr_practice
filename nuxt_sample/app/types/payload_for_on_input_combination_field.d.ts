export type PayloadForOnInputCombinationField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  key: string
  value: string
  isTainted: boolean
  eventType: 'input'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
