export type PayloadForOnChangeField = {
  namespace: string
  prevValuesForValidatorOptions: { [key: string]: string }
  key: string
  value: string
  eventType: 'change'
  validatorNames: string[]
}
