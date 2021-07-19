import { CombinationField } from "~/types/combination_field"

export type PayloadForOnBlurField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: CombinationField
}
