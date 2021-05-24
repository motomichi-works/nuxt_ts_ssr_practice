import constraintsFunctions from '~/utils/validator/constraintFunctions'

export type Constraints = {
  [key: string]: {
    [key: string]: any
  }
}

export default {
  'styleguides[basic_field_0001_a]': constraintsFunctions.requiredBasicField(
    'ベーシックフィールド0001A'
  ),
  'styleguides[email]': constraintsFunctions.customEmail('メールアドレス'),
  'styleguides[name_kana]': constraintsFunctions.katakana('お名前（カナ）'),
  'styleguides[select_field_unit_0001_a]': constraintsFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
} as Constraints
