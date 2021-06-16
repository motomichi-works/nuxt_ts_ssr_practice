// import node_modules
import validate from 'validate.js'

type PayloadForValidateSingle = {
  key: string
  value: string
  eventType: 'input' | 'blur' | 'change'
  validatorNames: string[]
}

export default function validateSingle<T extends { [key: string]: any }>(
  payload: PayloadForValidateSingle,
  constraints: T
): string[] {
  const constraintsKey = payload.key
  const constraint = constraints[constraintsKey]

  payload.validatorNames.forEach((validatorName) => {
    constraint[validatorName].eventType = payload.eventType
  })

  const result = validate.single(payload.value, constraints[constraintsKey])

  return result ?? []
}
