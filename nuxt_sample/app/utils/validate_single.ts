// import node_modules
import validate from 'validate.js'

type PayloadForValidateSingle = {
  namespace: string
  prevValuesForValidatorOptions: { [key: string]: string }
  key: string
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNames: string[]
}

export default function validateSingle<C extends { [key: string]: any }>(
  payload: PayloadForValidateSingle,
  constraints: C
): string[] {
  const constraintsKey = payload.key
  const constraint = constraints[payload.namespace][constraintsKey]

  // 動的なオプションに依存しているvalidatorがある場合はオプションを渡す
  payload.validatorNames.forEach((validatorName) => {
    constraint[validatorName].eventType = payload.eventType
    constraint[validatorName].prevValues = payload.prevValuesForValidatorOptions
  })

  const result = validate.single(payload.value, constraint)

  return result ?? []
}
