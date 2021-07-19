import { CombinationField } from '~/types/combination_field'

export type PayloadForOnInputChangeBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  key: string
  value: string
  eventType: 'input' | 'change' | 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: CombinationField
}
