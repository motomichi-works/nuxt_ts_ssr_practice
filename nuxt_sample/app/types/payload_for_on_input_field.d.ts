export type PayloadForOnInputField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'input'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
