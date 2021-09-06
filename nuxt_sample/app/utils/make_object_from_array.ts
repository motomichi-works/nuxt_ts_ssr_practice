type MyObj<K extends string, T> = { [K0 in K]: T }
type MyKeys<T extends string> = readonly T[]

export const makeObjectFromArray = function <K extends string, T>(
  myKeys: MyKeys<K>,
  defaultValue: T
): MyObj<K, T> {
  const myObj = {} as MyObj<K, T>
  for (const key of myKeys) {
    myObj[key] = defaultValue
  }

  return myObj
}
