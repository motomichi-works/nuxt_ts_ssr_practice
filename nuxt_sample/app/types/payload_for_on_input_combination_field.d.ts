export type PayloadForOnInputCombinationField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  // isTaintedObj: { [key: string]: boolean }
  // key: string
  value: string
  // eventType: 'input'
  // validatorNamesThatDependsOnDynamicOptions: string[]
}
