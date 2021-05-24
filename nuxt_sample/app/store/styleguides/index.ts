import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export type FieldValues = {
  'styleguides[email]': string
  'styleguides[name_kana]': string
  'styleguides[select_field_unit_0001_a]': string
}

export type RealtimeErrors = {
  'styleguides[email]': string[]
  'styleguides[name_kana]': string[]
  'styleguides[select_field_unit_0001_a]': string[]
}

export const state = () => ({
  fieldValues: {
    'styleguides[email]': '',
    'styleguides[name_kana]': '',
    'styleguides[select_field_unit_0001_a]': '',
  } as FieldValues,
  realtimeErrors: {
    'styleguides[email]': [],
    'styleguides[name_kana]': [],
    'styleguides[select_field_unit_0001_a]': [],
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
  changeRealtimeErrors: (
    state,
    payload: { key: keyof RealtimeErrors; value: string[] }
  ) => {
    const sharedArray = [
      'styleguides[email]',
      'styleguides[name_kana]',
      'styleguides[select_field_unit_0001_a]',
    ] as const
    type Key = typeof sharedArray[number]
    const key: Key = payload.key

    state.realtimeErrors[key] = payload.value
  },
}

export const actions: ActionTree<StyleguidesState, RootState> = {}
