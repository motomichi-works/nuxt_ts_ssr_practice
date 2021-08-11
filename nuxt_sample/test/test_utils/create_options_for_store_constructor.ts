import {
  state as rootState,
  getters as rootGetters,
  mutations as rootMutations,
  actions as rootActions,
  // @ts-ignore
} from '@/app/store/index.ts'

import {
  state as styleguidesState,
  getters as styleguidesGetters,
  mutations as styleguidesMutations,
  actions as styleguidesActions,
  // @ts-ignore
} from '@/app/store/styleguides/index.ts'

export function createOptionsForStoreConstructor<T extends readonly string[]>(
  activationKeys: T
) {
  const allModules = {
    styleguides: {
      namespaced: true,
      state: styleguidesState,
      getters: styleguidesGetters,
      mutations: styleguidesMutations,
      actions: styleguidesActions,
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

  return optionsForStoreConstructor
}
