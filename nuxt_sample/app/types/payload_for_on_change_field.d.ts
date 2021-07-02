export type PayloadForOnChangeField = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'change'
  validatorNames: string[]
}
