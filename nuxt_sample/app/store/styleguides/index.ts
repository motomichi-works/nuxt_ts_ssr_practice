import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type StyleguidesState = ReturnType<typeof state>

export const getters: GetterTree<StyleguidesState, StyleguidesState> = {
  exampleString: (state) => state.exampleString,
}

export const mutations: MutationTree<StyleguidesState> = {
  changeExampleString: (state, newValue: string) => {
    state.exampleString = newValue
  },
}

export const actions: ActionTree<StyleguidesState, StyleguidesState> = {}
