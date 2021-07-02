// import node_modules
import validate from 'validate.js'

type PayloadForValidateSingle = {
  namespace: string
  fieldValueObj: { [key: string]: string }
  key: string
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNamesThatDependsOnDynamicOptions: string[]
}

export default function validateSingle<C extends { [key: string]: any }>(
  payload: PayloadForValidateSingle,
  constraints: C
): string[] {
  const constraintsKey = payload.key
  const constraint = constraints[payload.namespace][constraintsKey]

  // 動的なオプションに依存しているvalidatorにはオプションを追加する
  payload.validatorNamesThatDependsOnDynamicOptions.forEach((validatorName) => {
    constraint[validatorName].eventType = payload.eventType
    constraint[validatorName].fieldValueObj = payload.fieldValueObj
  })

  const result = validate.single(payload.value, constraint)

  return result ?? []
}
