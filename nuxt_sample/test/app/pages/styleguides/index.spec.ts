// node_modulesをimport
import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import flushPromises from 'flush-promises'
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
  const activationKeys = ['styleguidesIndex'] as const
  const optionsForStoreConstructor = createOptionsForStoreConstructor(
    activationKeys
  )
  return new Vuex.Store(optionsForStoreConstructor)
}

// createWrapper関数を定義（createWrapper関数は無理に外部に切り出さずspecファイルごとに定義する）
function createWrapper(store: any) {
  const wrapper = mount(Component, {
    store,
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

  return wrapper
}

// テストケース
describe('styleguies', () => {
  test('正常にmount完了する。', () => {
    const store = createStore()
    const wrapper = createWrapper(store)

    expect(wrapper.vm).toBeTruthy()
  })

  describe('メールアドレスフィールド', () => {
    test('何も入力せずにblurした場合はエラーメッセージが正しく表示される。', async () => {
      const store = createStore()
      const wrapper = createWrapper(store)

      const fieldUnit = wrapper.find(
        '[data-identifier="OrgPreBasicFieldUnit0001Showcase/BasicFieldUnitEmail"]'
      )
      const emailField = fieldUnit.find(
        '[name="styleguides[basic_field_unit_0001_email]"]'
      )

      // blurイベント発火
      emailField.trigger('blur')
      await flushPromises()

      const errorMessagesWrapper = fieldUnit.find(
        '.basicFieldUnit0001__errorMessagesWrapper'
      )

      expect(errorMessagesWrapper.text()).toBe(
        'メールアドレスを入力してください。'
      )
    })
  })
})
