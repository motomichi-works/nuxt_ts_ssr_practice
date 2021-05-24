import validate from 'validate.js'
import customValidators from '~/utils/validator/customValidators'

validate.validators = {
  ...validate.validators,
  ...customValidators,
}

export default {
  selectFieldRequired(label: string) {
    return {
      presence: {
        allowEmpty: false,
        message: `^${label}を選択してください。`,
      },
    }
  },
  customEmail(label: string, isRequired: boolean = true) {
    return {
      customEmail: {
        label,
        isRequired,
        eventType: '',
      } as any,
    }
  },
  katakana(label: string, isRequired: boolean = true) {
    return {
      katakana: {
        label,
        isRequired,
        eventType: '',
      } as any,
    }
  },
}
