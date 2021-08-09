import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

// @ts-ignore
import { createStore } from '@/test/test_utils/create_store.ts'

const createWrapper = () => {
  const store = createStore()

  const wrapper = mount(Component, {
    store,
    localVue,
  })

  return wrapper
}

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm).toBeTruthy()
  })
})
