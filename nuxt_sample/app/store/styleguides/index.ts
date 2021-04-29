import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export type FieldValues = {
  'styleguides[email]': string
  'styleguides[name_kana]': string
}
export type RealtimeErrors = {
  'styleguides[email]': string[]
  'styleguides[name_kana]': string[]
}

export const state = () => ({
  fieldValues: {
    'styleguides[email]': '',
    'styleguides[name_kana]': '',
  } as FieldValues,
  realtimeErrors: {
    'styleguides[email]': [],
    'styleguides[name_kana]': [],
  } as RealtimeErrors,
})
export type StyleguidesState = ReturnType<typeof state>

export const getters: GetterTree<StyleguidesState, RootState> = {
  fieldValues: (state) => state.fieldValues,
  realtimeErrors: (state) => state.realtimeErrors,
}

export const mutations: MutationTree<StyleguidesState> = {
  changeFieldValue(state, payload: { key: keyof FieldValues; value: string }) {
    state.fieldValues[payload.key] = payload.value
  },
  changeRealtimeErrors: (state, realtimeErrors) => {
    state.realtimeErrors = realtimeErrors
  },
}

export const actions: ActionTree<StyleguidesState, RootState> = {}
