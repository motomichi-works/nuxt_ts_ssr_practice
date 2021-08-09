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

// createStore関数を定義（createStore関数は無理に外部に切り出さずspecファイルごとに定義する）
function createStore() {
  const activationKeys = ['styleguides'] as const
  const optionsForStoreConstructor = createOptionsForStoreConstructor(
    activationKeys
  )
  return new Vuex.Store(optionsForStoreConstructor)
}

// createWrapper関数を定義（createWrapper関数は無理に外部に切り出さずspecファイルごとに定義する）
function createWrapper(store: any) {
  return mount(Component, {
    store,
    localVue,
  })
}

// テストケース
describe('StyleguidesIndex', () => {
  test('正常にmount完了する', () => {
    const store = createStore()
    const wrapper = createWrapper(store)

    expect(wrapper.vm).toBeTruthy()
  })
})
