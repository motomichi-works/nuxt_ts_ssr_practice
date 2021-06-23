// import node_modules
import validate from 'validate.js'

type PayloadForValidateSingle = {
  key: string
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNames: string[]
}

export default function validateSingle<
  N extends string,
  C extends { [key: string]: any },
  F extends { [key: string]: any }
>(
  payload: PayloadForValidateSingle,
  namespace: N,
  constraints: C,
  fieldValues: F
): string[] {
  const constraintsKey = payload.key
  const constraint = constraints[namespace][constraintsKey]

  // 動的なオプションに依存しているvalidatorがある場合はオプションを渡す
  payload.validatorNames.forEach((validatorName) => {
    constraint[validatorName].eventType = payload.eventType
    constraint[validatorName].prevValues = fieldValues
  })

  const result = validate.single(payload.value, constraint)

  return result ?? []
}
