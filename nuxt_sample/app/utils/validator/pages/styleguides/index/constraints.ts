import constraintsFunctions from '~/utils/validator/constraintFunctions'

export default {
  'styleguides[email]': constraintsFunctions.customEmail('メールアドレス'),
}
