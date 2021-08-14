export type CombinationFieldForFieldUnitProp = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  name: string
  sharedKey: string
  realtimeErrors: string[]
  value: string
  combinationFieldValueObj: { [key: string]: string }
  isTainted: boolean
  validatorNamesThatDependsOnDynamicOptions: string[]
} | null
