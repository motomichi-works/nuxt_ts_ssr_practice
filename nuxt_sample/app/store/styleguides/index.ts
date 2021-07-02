import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

// settings
import { sharedKeys } from '~/settings/pages/styleguides/index'

// utils
import makeObjectFromArray from '~/utils/make_object_from_array'

// state
const fieldValueObj = makeObjectFromArray(sharedKeys, '')
const realtimeErrorsObj = makeObjectFromArray(sharedKeys, [] as string[])
const isTainted = makeObjectFromArray(sharedKeys, false)
export const state = () => ({
  fieldValueObj,
  realtimeErrorsObj,
  isTainted,
})
export type FieldValueObj = typeof fieldValueObj
export type RealtimeErrorsObj = typeof realtimeErrorsObj
export type IsTainted = typeof isTainted
export type StyleguidesState = ReturnType<typeof state>

// getters
export const getters: GetterTree<StyleguidesState, RootState> = {
  fieldValueObj: (state) => state.fieldValueObj,
  realtimeErrorsObj: (state) => state.realtimeErrorsObj,
  isTainted: (state) => state.isTainted,
}

// mutations
export const mutations: MutationTree<StyleguidesState> = {
  changeFieldValue(
    state,
    payload: { key: keyof FieldValueObj; value: string }
  ) {
    state.fieldValueObj[payload.key] = payload.value
  },
  changeRealtimeErrors: (
    state,
    payload: { key: keyof RealtimeErrorsObj; value: string[] }
  ) => {
    state.realtimeErrorsObj[payload.key] = payload.value
  },
}

// actions
export const actions: ActionTree<StyleguidesState, RootState> = {}
