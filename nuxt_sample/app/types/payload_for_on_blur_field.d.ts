export type PayloadForOnBlurField = {
  namespace: string
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}
