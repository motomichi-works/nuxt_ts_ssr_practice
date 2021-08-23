// import node_modules
import validate from 'validate.js'

type ArgsForValidateSingle<C> = {
  namespace: string
  sharedKey: string
  fieldValueObj: { [key: string]: string }
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNamesThatDependsOnDynamicOptions: string[]
  constraintsBaseOfAll: C
}

export default function validateSingle<C extends { [key: string]: any }>(
  args: ArgsForValidateSingle<C>
): string[] {
  const sharedKey = args.sharedKey
  const constraint = args.constraintsBaseOfAll[args.namespace][sharedKey]

  // 動的なオプションに依存しているvalidatorにはオプションを追加する
  args.validatorNamesThatDependsOnDynamicOptions.forEach((validatorName) => {
    constraint[validatorName].eventType = args.eventType
    constraint[validatorName].fieldValueObj = args.fieldValueObj
  })

  const result = validate.single(args.value, constraint)

  return result ?? []
}
