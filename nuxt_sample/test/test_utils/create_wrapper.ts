import { mount } from '@vue/test-utils'

type OptionsForMount = {
  localVue: any
  store?: any
}

export function createWrapper<T>(
  Component: T,
  optionsForMount: OptionsForMount
) {
  const wrapper = mount(Component, optionsForMount)

  return wrapper
}
