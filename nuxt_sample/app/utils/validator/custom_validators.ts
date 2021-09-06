// emailバリデーションについて
// isRequired: falseの場合は空文字列でblurした場合はセーフ
// hogeでblurした場合はエラー
// hoge@でblurした場合はエラー
// hoge@hogeでblurした場合はエラー
// hoge@hoge.でblurした場合はエラー
// hoge@hoge..でblurした場合はエラー
// hoge@hoge.cでblurした場合はエラー
// hoge@hoge.coでblurした場合はセーフ
// isRequired: falseの場合はinputイベントでも空文字列はセーフ
// hogeはinputイベントでもエラー
// hoge@はinputイベントでもエラー
// hoge@hogeはinputイベントでもエラー
// hoge@hoge.はinputイベントではセーフ
// hoge@hoge..はinputイベントでもエラー
// hoge@hoge.cはinputイベントではセーフ
// hoge@hoge.coはinputイベントでもblurでもセーフ

// NOTE: ここに定義する正規表現は空文字列を許容できるように全て「0回以上の繰り返し」にしてください。
const patterns = {
  // NOTE: blurイベントのときはドットで終わる文字列をエラーとします。
  customEmailForBlur:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+)*?([.][a-zA-Z0-9-]{1,20}|[.][a-zA-Z0-9-]{1,20}[.][a-zA-Z0-9-]{1,20}))*$",
  // NOTE: inputイベントのときはドットで終わる文字列を許容します。
  CustomEmailForNotBlur:
    "^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+)*?([.]|[.][a-zA-Z0-9-]{1,20}|[.][a-zA-Z0-9-]{1,20}[.]|[.][a-zA-Z0-9-]{1,20}[.][a-zA-Z0-9-]{1,20}))*$",
  katakana: '^[ア-ン゛゜ァ-ォャ-ョー「」、 　A-Za-z0-9]*$',
} as const

export const customValidators = {
  customEmail(value: string, options: any): string[] | undefined {
    const regExpForBlur = new RegExp(patterns.customEmailForBlur)
    const regExpForNotBlur = new RegExp(patterns.CustomEmailForNotBlur)

    if (options.isRequired && value === '') {
      return [`^${options.label}を入力してください。`]
    }

    if (options.eventType === 'blur' && !regExpForBlur.test(value)) {
      return [`^${options.label}が正しく入力されているか確認してください。`]
    }

    if (options.eventType === 'input' && !regExpForNotBlur.test(value)) {
      return [`^${options.label}が正しく入力されているか確認してください。`]
    }

    return undefined
  },
  katakana(value: string, options: any): string[] | undefined {
    const regExp = new RegExp(patterns.katakana)

    if (options.isRequired && value === '') {
      return [`^${options.label}を入力してください。`]
    }

    if (!regExp.test(value)) {
      return [`^${options.label}に使用できない文字が含まれています。`]
    }

    return undefined
  },
  fullNameKana(
    value: string,
    options: {
      label: string
      maximum: number
    }
  ): string[] | undefined {
    if (value.length > options.maximum) {
      return [
        `${options.label}は合計${options.maximum}文字以内で入力してください。`,
      ]
    }

    return undefined
  },
  selectFieldUnit0001BCombinationSample(
    value: string,
    options: any
  ): string[] | undefined {
    if (value === 'value1value1') {
      return [`${options.label}は選択できない組み合わせです。`]
    }

    return undefined
  },
}
