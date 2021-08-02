import validate from 'validate.js'
import customValidators from '~/utils/validator/custom_validators'

validate.validators = {
  ...validate.validators,
  ...customValidators,
}

export default {
  requiredBasicField(label: string) {
    return {
      presence: {
        allowEmpty: false,
        message: `^${label}を入力してください。`,
      },
    }
  },
  requiredSelectField(label: string) {
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
      },
    }
  },
  katakana(label: string, isRequired: boolean = true) {
    return {
      katakana: {
        label,
        isRequired,
      },
    }
  },
  fullNameKana(label: string) {
    return {
      fullNameKana: {
        label,
        maximum: 40,
      },
    }
  },
}
