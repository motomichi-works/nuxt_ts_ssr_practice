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
} from '@/app/store/styleguidesIndex.ts'

export function createOptionsForStoreConstructor<T extends readonly string[]>(
  activationKeys: T
) {
  const allModules = {
    styleguidesIndex: {
      namespaced: true,
      state: styleguidesIndexState,
      getters: styleguidesIndexGetters,
      mutations: styleguidesIndexMutations,
      actions: styleguidesIndexActions,
    },
  }

  const pickedModules: any = {}

  if (activationKeys.includes('styleguidesIndex')) {
    pickedModules.styleguidesIndex = allModules.styleguidesIndex
  }

  const optionsForStoreConstructor = {
    state: rootState,
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions,
    modules: pickedModules,
  }

  return optionsForStoreConstructor
}
