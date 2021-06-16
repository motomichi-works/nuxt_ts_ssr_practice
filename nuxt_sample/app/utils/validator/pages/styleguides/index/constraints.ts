// settings
import { sharedKeys } from '~/settings/pages/styleguides'

// utils
import constraintsFunctions from '~/utils/validator/constraintFunctions'
import makeObjectFromArray from '~/utils/make_object_from_array'

// 変数tmpObjはConstraintsBase型を作るためだけに作成しています。
const tmpObj = makeObjectFromArray(sharedKeys, null as any)
export type ConstraintsBase = typeof tmpObj

export const constraintsBase: ConstraintsBase = {
  'styleguides[basic_field_0001_a]': constraintsFunctions.requiredBasicField(
    'ベーシックフィールド0001A'
  ),
  'styleguides[basic_field_unit_0001_email]': constraintsFunctions.customEmail(
    'メールアドレス'
  ),
  'styleguides[basic_field_unit_0001_name_kana]': constraintsFunctions.katakana(
    'お名前（カナ）'
  ),
  'styleguides[select_field_0001_a]': constraintsFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
  'styleguides[select_field_unit_0001_a]': constraintsFunctions.requiredSelectField(
    'セレクトフィールドユニット0001A'
  ),
}
