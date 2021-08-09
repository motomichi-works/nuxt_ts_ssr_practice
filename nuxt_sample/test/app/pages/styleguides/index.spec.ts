import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

// @ts-ignore
import { createStore } from '@/test/test_utils/create_store.ts'
// @ts-ignore
import { createWrapper } from '@/test/test_utils/create_wrapper.ts'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const wrapper = createWrapper(Component, {
      store: createStore(),
      localVue,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
