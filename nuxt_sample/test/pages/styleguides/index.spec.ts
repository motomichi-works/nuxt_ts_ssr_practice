import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

import {
  state as styleguidesIndexState,
  getters as styleguidesIndexGetters,
  mutations as styleguidesIndexMutations,
  actions as styleguidesIndexActions,
  // @ts-ignore
} from '@/app/store/styleguides/index.ts'

const createStore = () => {
  const store = new Vuex.Store({
    modules: {
      styleguides: {
        namespaced: true,
        state: styleguidesIndexState,
        getters: styleguidesIndexGetters,
        mutations: styleguidesIndexMutations,
        actions: styleguidesIndexActions,
      },
    },
  })

  return store
}

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
