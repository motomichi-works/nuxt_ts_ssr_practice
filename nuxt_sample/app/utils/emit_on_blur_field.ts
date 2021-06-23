// define types
export type ArgsOfEmitOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}

export const emitOnBlurField = function (
  payload: ArgsOfEmitOnBlurField,
  vueInstance: any
) {
  vueInstance.$emit('on-blur-field', payload)
}
