// node_modulesをimport
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

// Componentをimport
import Component from '@/app/pages/styleguides/index.vue'

// 自分で定義したtest_utilsをimport
// @ts-ignore
import { createOptionsForStoreConstructor } from '@/test/test_utils/create_options_for_store_constructor.ts'

// localVueを初期化
const localVue = createLocalVue()
localVue.use(Vuex)

// テストする
describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const activationKeys = ['styleguides'] as const
    const optionsForStoreConstructor = createOptionsForStoreConstructor(
      activationKeys
    )
    const store = new Vuex.Store(optionsForStoreConstructor)
    const wrapper = mount(Component, {
      store,
      localVue,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
