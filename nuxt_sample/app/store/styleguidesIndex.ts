import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

// settings
import { sharedKeys } from '~/settings/pages/styleguides/index'

// utils
import { makeObjectFromArray } from '~/utils/make_object_from_array'

// state
const fieldValueObj = makeObjectFromArray(sharedKeys, '')
const realtimeErrorsObj = makeObjectFromArray(sharedKeys, [] as string[])
const isTaintedObj = makeObjectFromArray(sharedKeys, false)
export const state = () => ({
  fieldValueObj,
  realtimeErrorsObj,
  isTaintedObj,
})
export type FieldValueObj = typeof fieldValueObj
export type RealtimeErrorsObj = typeof realtimeErrorsObj
export type IsTaintedObj = typeof isTaintedObj
export type StyleguidesState = ReturnType<typeof state>

// getters
export const getters: GetterTree<StyleguidesState, RootState> = {
  fieldValueObj: (state) => state.fieldValueObj,
  realtimeErrorsObj: (state) => state.realtimeErrorsObj,
  isTaintedObj: (state) => state.isTaintedObj,
}

// mutations
export const mutations: MutationTree<StyleguidesState> = {
  changeFieldValue(
    state,
    payload: { sharedKey: keyof FieldValueObj; value: string }
  ) {
    state.fieldValueObj[payload.sharedKey] = payload.value
  },
  changeRealtimeErrors: (
    state,
    payload: { sharedKey: keyof RealtimeErrorsObj; value: string[] }
  ) => {
    state.realtimeErrorsObj[payload.sharedKey] = payload.value
  },
  changeIsTainted: (
    state,
    payload: { sharedKey: keyof IsTaintedObj; value: boolean }
  ) => {
    state.isTaintedObj[payload.sharedKey] = payload.value
  },
}

// actions
export const actions: ActionTree<StyleguidesState, RootState> = {}
