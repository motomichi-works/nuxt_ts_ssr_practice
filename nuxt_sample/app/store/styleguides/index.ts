import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  fields: {
    values: {},
  },
  realtimeErrors: {} as any,
  exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type StyleguidesState = ReturnType<typeof state>

export const getters: GetterTree<StyleguidesState, StyleguidesState> = {
  exampleString: (state) => state.exampleString,
  fields: (state) => state.fields,
  realtimeErrors: (state) => state.realtimeErrors,
}

export const mutations: MutationTree<StyleguidesState> = {
  changeValue: (state, payload) => {
    const obj: any = {}
    obj[payload.key] = payload.value
    state.fields.values = { ...state.fields.values, ...obj }
  },
  changeRealtimeErrors: (state, realtimeErrors) => {
    state.realtimeErrors = realtimeErrors
  },
  changeExampleString: (state, newValue: string) => {
    state.exampleString = newValue
  },
}

export const actions: ActionTree<StyleguidesState, StyleguidesState> = {}
