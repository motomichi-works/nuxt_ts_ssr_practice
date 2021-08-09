import Vuex from 'vuex'

import {
  state as rootState,
  getters as rootGetters,
  mutations as rootMutations,
  actions as rootActions,
  // @ts-ignore
} from '@/app/store/index.ts'

import {
  state as styleguidesIndexState,
  getters as styleguidesIndexGetters,
  mutations as styleguidesIndexMutations,
  actions as styleguidesIndexActions,
  // @ts-ignore
} from '@/app/store/styleguides/index.ts'

export function createStore<T extends readonly string[]>(activationKeys: T) {
  const allModules = {
    styleguides: {
      namespaced: true,
      state: styleguidesIndexState,
      getters: styleguidesIndexGetters,
      mutations: styleguidesIndexMutations,
      actions: styleguidesIndexActions,
    },
  }

  const pickedModules: any = {}

  if (activationKeys.includes('styleguides')) {
    pickedModules.styleguides = allModules.styleguides
  }

  const optionsForStoreConstructor = {
    state: rootState,
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions,
    modules: pickedModules,
  }

  const store = new Vuex.Store(optionsForStoreConstructor)

  return store
}
