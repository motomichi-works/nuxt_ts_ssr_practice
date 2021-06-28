export type PayloadForOnChangeField = {
  namespace: string
  key: string
  value: string
  eventType: 'change'
  validatorNames: string[]
}
