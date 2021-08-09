import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Component from '@/app/pages/styleguides/index.vue'

// @ts-ignore
import { createOptionsForStoreConstructor } from '@/test/test_utils/create_options_for_store_constructor.ts'
// @ts-ignore
import { createWrapper } from '@/test/test_utils/create_wrapper.ts'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const activationKeys = [
      'styleguides',
    ] as const
    const optionsForStoreConstructor = createOptionsForStoreConstructor(activationKeys)
    const store = new Vuex.Store(optionsForStoreConstructor)
    const wrapper = createWrapper(Component, {
      store,
      localVue,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
