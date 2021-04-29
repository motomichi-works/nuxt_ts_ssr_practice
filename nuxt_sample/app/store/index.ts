import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type TypeOfRootState = ReturnType<typeof state>

export const getters: GetterTree<TypeOfRootState, TypeOfRootState> = {
  exampleArray: (state) => state.exampleArray,
  exampleString: (state) => state.exampleString,
}

export const mutations: MutationTree<TypeOfRootState> = {
  changeExampleArray: (state, newValue: string[]) => {
    state.exampleArray = newValue
  },
  changeExampleString: (state, newValue: string) => {
    state.exampleString = newValue
  },
}

export const actions: ActionTree<TypeOfRootState, TypeOfRootState> = {}
