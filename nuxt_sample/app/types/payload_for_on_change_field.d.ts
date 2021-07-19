import { CombinationField } from "~/types/combination_field"

export type PayloadForOnChangeField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'change'
  validatorNamesThatDependsOnDynamicOptions: string[]
  combinationField: CombinationField
}
