import { FAQ, State } from './state'
import { MutationTree } from 'vuex'

export enum MutationTypes {
  ADD_FAQ = "addFaq"
}

export type Mutations<S = State> = {
  [MutationTypes.ADD_FAQ](state: S, payload: { faq: FAQ }): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_FAQ](state: State, payload: { faq: FAQ }) {
    state.faqs.push(payload.faq)
  }
}