// settings
import { sharedKeys } from '~/settings/pages/styleguides'

// utils
import constraintFunctions from '~/utils/validator/constraint_functions'
import makeObjectFromArray from '~/utils/make_object_from_array'

// 変数tmpObjはConstraintsBase型を作るためだけに作成しています。
const tmpObj = makeObjectFromArray(sharedKeys, null as any)
export type ConstraintsBase = typeof tmpObj

export const constraintsBase: ConstraintsBase = {
  'styleguides[basic_field_0001_a]': constraintFunctions.requiredBasicField(
    'ベーシックフィールド0001A'
  ),
  'styleguides[basic_field_unit_0001_email]': constraintFunctions.customEmail(
    'メールアドレス'
  ),
  'styleguides[basic_field_unit_0001_name_kana]': constraintFunctions.katakana(
    'お名前（カナ）'
  ),
  'styleguides[select_field_0001_a]': constraintFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
  'styleguides[select_field_unit_0001_a]': constraintFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
}
