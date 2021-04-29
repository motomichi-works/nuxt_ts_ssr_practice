import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  fields: {
    values: {
      'styleguides[email]': '' as string,
      'styleguides[name_kana]': '' as string,
    },
  },
  realtimeErrors: {
    'styleguides[email]': [] as string[],
    'styleguides[name_kana]': [] as string[],
  },
  // exampleArray: [] as string[],
  exampleString: 'exampleString',
})

export type TypeOfVuexState = ReturnType<typeof state>

export const getters: GetterTree<TypeOfVuexState, TypeOfVuexState> = {
  exampleString: (state) => state.exampleString,
  fields: (state) => state.fields,
  realtimeErrors: (state) => state.realtimeErrors,
}

export const mutations: MutationTree<TypeOfVuexState> = {
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

export const actions: ActionTree<TypeOfVuexState, TypeOfVuexState> = {}
