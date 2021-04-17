import validate from 'validate.js'
import customValidators from '~/utils/validator/customValidators'

validate.validators = {
  ...validate.validators,
  ...customValidators,
}

export default {
  customEmail(label: string, isRequired: boolean = true): any {
    return {
      customEmail: {
        label,
        isRequired,
      },
    }
  },
}
