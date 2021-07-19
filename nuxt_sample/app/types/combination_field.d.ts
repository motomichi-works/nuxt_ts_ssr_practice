export type CombinationField = {
  namespace: string
  sharedKey: string
  realtimeErrors: string[]
  value: string
  isTainted: boolean
  eventType: 'blur'
  validatorNamesThatDependsOnDynamicOptions: string[]
} | null
