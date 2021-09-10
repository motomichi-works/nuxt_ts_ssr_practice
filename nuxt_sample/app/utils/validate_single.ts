// import node_modules
import validate from 'validate.js'

type ArgsForValidateSingle<C> = {
  namespace: string
  sharedKey: string
  fieldValueObj: { [key: string]: string }
  value: string
  eventType: 'input' | 'blur' | 'change'
  constraintsBaseOfAll: C
}

export const validateSingle = function <C extends { [key: string]: any }>(
  args: ArgsForValidateSingle<C>
): string[] {
  const sharedKey = args.sharedKey
  const constraint = args.constraintsBaseOfAll[args.namespace][sharedKey]
  const validatorNames = Object.keys(constraint)

  // 動的なオプションを追加する
  validatorNames.forEach((validatorName) => {
    constraint[validatorName].eventType = args.eventType
    constraint[validatorName].fieldValueObj = args.fieldValueObj
  })

  const result = validate.single(args.value, constraint)

  return result ?? []
}
