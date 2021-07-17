// settings
import { sharedKeys } from '~/settings/pages/styleguides'

// utils
import constraintFunctions from '~/utils/validator/constraint_functions'

// types
export type ConstraintsBase = Record<
  typeof sharedKeys[number],
  { [key: string]: any }
>

export const constraintsBase: ConstraintsBase = {
  'styleguides[basic_field_0001_a]': constraintFunctions.requiredBasicField(
    'ベーシックフィールド0001A'
  ),
  'styleguides[basic_field_unit_0001_email]': constraintFunctions.customEmail(
    'メールアドレス'
  ),
  'styleguides[basic_field_unit_0001_family_name_kana]': constraintFunctions.katakana(
    '姓（カナ）'
  ),
  'styleguides[basic_field_unit_0001_given_name_kana]': constraintFunctions.katakana(
    '名（カナ）'
  ),
  'styleguides[basic_field_unit_0001_full_name_kana]': constraintFunctions.fullNameKana(
    'お名前（カナ）'
  ),
  'styleguides[select_field_0001_a]': constraintFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
  'styleguides[select_field_unit_0001_a]': constraintFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
}
