// NOTE: ここに定義する正規表現は空文字列を許容できるように全て「0回以上の繰り返し」にしてください。
const patterns = {
  // NOTE: blurイベントのときはドットで終わる文字列をエラーとします。
  customEmailForBlur:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*)*$",
  // NOTE: inputイベントのときはドットで終わる文字列を許容します。
  CustomEmailForNotBlur:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+)*?(?:[.]?|.[a-zA-Z0-9-]+)*)*$",
} as const

export default {
  customEmail(value: string, options: any): string[] | undefined {
    const regExpForBlur = new RegExp(patterns.customEmailForBlur)
    const regExpForNotBlur = new RegExp(patterns.CustomEmailForNotBlur)

    if (options.isRequired && value === '') {
      return [`^${options.label}を入力してください。`]
    }

    if (!regExpForBlur.test(value)) {
      return [`^${options.label}が正しく入力されているか確認してください。`]
    }

    if (!regExpForNotBlur.test(value)) {
      return [`^${options.label}が正しく入力されているか確認してください。`]
    }

    return undefined
  },
}
