// import node_modules
import validate from 'validate.js'

type PayloadForValidateSingle = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  sharedKey: string
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNamesThatDependsOnDynamicOptions: string[]
}

export default function validateSingle<C extends { [key: string]: any }>(
  payload: PayloadForValidateSingle,
  constraints: C
): string[] {
  const sharedKey = payload.sharedKey
  const constraint = constraints[payload.namespace][sharedKey]

  // 動的なオプションに依存しているvalidatorにはオプションを追加する
  payload.validatorNamesThatDependsOnDynamicOptions.forEach((validatorName) => {
    constraint[validatorName].eventType = payload.eventType
    constraint[validatorName].fieldValueObj = payload.fieldValueObj
  })

  const result = validate.single(payload.value, constraint)

  return result ?? []
}
