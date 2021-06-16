import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

// settings
import { sharedKeys } from '~/settings/pages/styleguides/index'

// utils
import makeObjectFromArray from '~/utils/make_object_from_array'

// state
const fieldValues = makeObjectFromArray(sharedKeys, '')
const realtimeErrors = makeObjectFromArray(sharedKeys, [] as string[])
const isTainted = makeObjectFromArray(sharedKeys, false)
export const state = () => ({
  fieldValues,
  realtimeErrors,
  isTainted,
})
export type FieldValues = typeof fieldValues
export type RealtimeErrors = typeof realtimeErrors
export type IsTainted = typeof isTainted
export type StyleguidesState = ReturnType<typeof state>

// getters
export const getters: GetterTree<StyleguidesState, RootState> = {
  fieldValues: (state) => state.fieldValues,
  realtimeErrors: (state) => state.realtimeErrors,
}

// mutations
export const mutations: MutationTree<StyleguidesState> = {
  changeFieldValue(state, payload: { key: keyof FieldValues; value: string }) {
    state.fieldValues[payload.key] = payload.value
  },
  changeRealtimeErrors: (
    state,
    payload: { key: keyof RealtimeErrors; value: string[] }
  ) => {
    state.realtimeErrors[payload.key] = payload.value
  },
}

// actions
export const actions: ActionTree<StyleguidesState, RootState> = {}
