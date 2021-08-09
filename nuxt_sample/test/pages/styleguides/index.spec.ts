import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

import {
  state,
  getters,
  mutations,
  actions,
  // @ts-ignore
} from '@/app/store/styleguides/index.ts'

const createWrapper = () => {
  const store = new Vuex.Store({
    modules: {
      styleguides: {
        namespaced: true,
        state,
        getters,
        mutations,
        actions,
      },
    },
  })

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
