import { ArgsForHandleInputCombinationField } from '~/types/args_for_handle_input_combination_field'

export type ArgsForHandleInputField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  sharedKey: string
  value: string
  eventType: 'input'
  combinationField: ArgsForHandleInputCombinationField | null
}
