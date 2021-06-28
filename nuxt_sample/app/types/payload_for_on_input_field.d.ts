export type PayloadForOnInputField = {
  namespace: string
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}
