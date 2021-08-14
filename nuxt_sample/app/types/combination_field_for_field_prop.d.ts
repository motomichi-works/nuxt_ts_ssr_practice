export type CombinationFieldForFieldProp = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  sharedKey: string
  value: string
  combinationFieldValueObj: { [key: string]: string }
  isTainted: boolean
  validatorNamesThatDependsOnDynamicOptions: string[]
} | null
