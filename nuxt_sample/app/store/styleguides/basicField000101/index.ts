import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  fieldValue: '',
})

export type FieldState = ReturnType<typeof state>

export const getters: GetterTree<FieldState, FieldState> = {
  fieldValue: (state) => state.fieldValue,
}

export const mutations: MutationTree<FieldState> = {
  changeFieldValue: (state, newValue: string) => {
    state.fieldValue = newValue
  },
}

export const actions: ActionTree<FieldState, FieldState> = {}
