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

export type TypeOfState = ReturnType<typeof state>

export const getters: GetterTree<TypeOfState, TypeOfState> = {
  exampleString: (state) => state.exampleString,
  fields: (state) => state.fields,
  realtimeErrors: (state) => state.realtimeErrors,
}

export const mutations: MutationTree<TypeOfState> = {
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

export const actions: ActionTree<TypeOfState, TypeOfState> = {}
