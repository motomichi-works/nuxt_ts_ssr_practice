import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { TypeOfRootState } from '~/store'

export type TypeOfFieldValues = {
  'styleguides[email]': string
  'styleguides[name_kana]': string
}
export type TypeOfRealtimeErrors = {
  'styleguides[email]': string[]
  'styleguides[name_kana]': string[]
}

export const state = () => ({
  fieldValues: {
    'styleguides[email]': '',
    'styleguides[name_kana]': '',
  } as TypeOfFieldValues,
  realtimeErrors: {
    'styleguides[email]': [],
    'styleguides[name_kana]': [],
  } as TypeOfRealtimeErrors,
})
export type TypeOfStyleguidesState = ReturnType<typeof state>

export const getters: GetterTree<TypeOfStyleguidesState, TypeOfRootState> = {
  fieldValues: (state) => state.fieldValues,
  realtimeErrors: (state) => state.realtimeErrors,
}

export const mutations: MutationTree<TypeOfStyleguidesState> = {
  changeFieldValue(
    state,
    payload: { key: keyof TypeOfFieldValues; value: string }
  ) {
    state.fieldValues[payload.key] = payload.value
  },
  changeRealtimeErrors: (state, realtimeErrors) => {
    state.realtimeErrors = realtimeErrors
  },
}

export const actions: ActionTree<TypeOfStyleguidesState, TypeOfRootState> = {}
