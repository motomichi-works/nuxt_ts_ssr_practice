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

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StyleguidesIndex', () => {
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

  test('正常にmount完了する', () => {
    const wrapper = mount(Component, {
      store,
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
