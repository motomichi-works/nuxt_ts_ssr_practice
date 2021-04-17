// NOTE: ここに定義する正規表現は空文字列を許容できるように全て「0回以上の繰り返し」にしてください。
const PATTERNS: any = {
  // NOTE: blurイベントのときはドットで終わる文字列をエラーとします。
  CUSTOM_EMAIL_FOR_BLUR:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*)*$",
  // NOTE: inputイベントのときはドットで終わる文字列を許容します。
  CUSTOM_EMAIL_FOR_NOT_BLUR:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+)*?(?:[.]?|.[a-zA-Z0-9-]+)*)*$",
}

export default {
  customEmail(value: string, options: any): string[] | undefined {
    const regExpForBlur = new RegExp(PATTERNS.CUSTOM_EMAIL_FOR_BLUR)
    const regExpForNotBlur = new RegExp(PATTERNS.CUSTOM_EMAIL_FOR_NOT_BLUR)

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
