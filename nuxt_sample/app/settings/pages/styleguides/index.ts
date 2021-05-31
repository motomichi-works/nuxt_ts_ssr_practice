import makeObjectFromArray from '~/utils/make_object_from_array'

// railsのテーブル名とカラム名からなる、フィールドnameの文字列をイメージしています。
// 実際の業務では必要に応じて別の文字列に柔軟に変更します。
const sharedKeys = [
  'styleguides[basic_field_0001_a]',
  'styleguides[basic_field_unit_0001_email]',
  'styleguides[basic_field_unit_0001_name_kana]',
  'tyleguides[select_field_0001_a]',
  'styleguides[select_field_unit_0001_a]',
] as const

// state.fieldValuesとして使用します。
export const fieldValues = makeObjectFromArray(sharedKeys, '')

// state.isTaintedとして使用します。
export const isTainted = makeObjectFromArray(sharedKeys, false)

// state.realtimeErrorsとして使用します。
export const realtimeErrors = makeObjectFromArray(sharedKeys, [] as string[])
