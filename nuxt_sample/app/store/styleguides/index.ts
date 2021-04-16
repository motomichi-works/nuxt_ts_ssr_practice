import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  fields: {
    values: {},
  },
  exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type StyleguidesState = ReturnType<typeof state>

export const getters: GetterTree<StyleguidesState, StyleguidesState> = {
  exampleString: (state) => state.exampleString,
  fields: (state) => state.fields,
}

export const mutations: MutationTree<StyleguidesState> = {
  changeValue: (state, payload) => {
    const obj: any = {}
    obj[payload.key] = payload.value
    state.fields.values = { ...state.fields.values, ...obj }
  },
  changeExampleString: (state, newValue: string) => {
    state.exampleString = newValue
  },
}

export const actions: ActionTree<StyleguidesState, StyleguidesState> = {}
