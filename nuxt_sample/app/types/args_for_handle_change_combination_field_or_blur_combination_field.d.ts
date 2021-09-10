export type ArgsForHandleChangeCombinationFieldOrBlurCombinationField = {
  namespace: string
  sharedKey: string
  combinationSharedKeys: string[]
  fieldValueObj: { [key: string]: string }
  isTaintedObj: { [key: string]: boolean }
  eventType: 'change' | 'blur'
}
