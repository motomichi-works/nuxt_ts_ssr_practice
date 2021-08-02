export type CombinationField = {
  namespace: string
  sharedKey: string
  realtimeErrors: string[]
  combinationFieldValueObj: { [key: string]: string }
  isTainted: boolean
  eventType: 'input' | 'change' | 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
} | null
