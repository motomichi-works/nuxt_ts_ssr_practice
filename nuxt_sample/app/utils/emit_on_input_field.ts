// define types
export type ArgsOfEmitOnInputField = {
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}

export const emitOnInputField = function (
  payload: ArgsOfEmitOnInputField,
  vueInstance: any
) {
  vueInstance.$emit('on-input-field', payload)
}
