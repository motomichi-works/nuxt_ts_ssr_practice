export type PayloadForOnBlurField = {
  namespace: string
  prevValuesForValidatorOptions: { [key: string]: string }
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}
