import { CombinationField } from '~/types/combination_field'

export type PayloadForOnInputChangeBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  sharedKey: string
  value: string
  eventType: 'change' | 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: CombinationField
}
