import Vuex from 'vuex'

import {
  state as styleguidesIndexState,
  getters as styleguidesIndexGetters,
  mutations as styleguidesIndexMutations,
  actions as styleguidesIndexActions,
  // @ts-ignore
} from '@/app/store/styleguides/index.ts'

export const createStore = () => {
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
