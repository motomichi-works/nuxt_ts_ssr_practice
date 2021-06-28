export type PayloadForOnInputField = {
  namespace: string
  prevValuesForValidatorOptions: { [key: string]: string }
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}
