import validate from 'validate.js'
import customValidators from '~/utils/validator/customValidators'
import { FieldValues } from '~/store/styleguides/index'

validate.validators = {
  ...validate.validators,
  ...customValidators,
}

export const customEmail = function (
  label: string,
  prevValues: FieldValues,
  isRequired: boolean = true
) {
  type CustomEmail = {
    label: string
    isRequired: boolean
    eventType: string
    prevValues: FieldValues
  }

  return {
    customEmail: {
      label,
      isRequired,
      eventType: '',
      prevValues,
    } as CustomEmail,
  }
}
