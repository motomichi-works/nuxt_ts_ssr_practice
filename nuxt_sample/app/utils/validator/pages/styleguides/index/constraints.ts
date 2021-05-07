import constraintsFunctions from '~/utils/validator/constraintFunctions'

export type Constraints = {
  [key: string]: {
    [key: string]: any
  }
}

export default {
  'styleguides[email]': constraintsFunctions.customEmail('メールアドレス'),
  'styleguides[name_kana]': constraintsFunctions.customEmail('メールアドレス'),
} as Constraints
