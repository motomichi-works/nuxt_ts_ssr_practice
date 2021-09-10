export type ArgsForHandleInputCombinationField = {
  namespace: string
  sharedKey: string
  combinationSharedKeys: string[]
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  eventType: 'input'
}
