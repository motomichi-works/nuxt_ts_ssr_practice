import { CombinationField } from '~/types/combination_field'

export type PayloadForOnInputField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  sharedKey: string
  value: string
  eventType: 'input'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: CombinationField
}
