export type PayloadForOnBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
}
