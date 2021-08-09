import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

// @ts-ignore
import { createStore } from '@/test/test_utils/create_store.ts'

type OptionsForMount = {
  localVue: any
  store?: any
}

const createWrapper = (optionsForMount: OptionsForMount) => {
  const wrapper = mount(Component, optionsForMount)

  return wrapper
}

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const wrapper = createWrapper({
      store: createStore(),
      localVue,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
