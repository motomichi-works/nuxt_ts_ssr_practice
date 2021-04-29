import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  exampleArray: (state) => state.exampleArray,
  exampleString: (state) => state.exampleString,
}

export const mutations: MutationTree<RootState> = {
  changeExampleArray: (state, newValue: string[]) => {
    state.exampleArray = newValue
  },
  changeExampleString: (state, newValue: string) => {
    state.exampleString = newValue
  },
}

export const actions: ActionTree<RootState, RootState> = {}
