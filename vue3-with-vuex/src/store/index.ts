import {
  createStore,
  Store as VuexStore,
  CommitOptions
} from "vuex";
import { state, State } from './state';
import { mutations, Mutations } from './mutations';

const store = createStore({
  state: state,
  mutations: mutations,
  actions: {},
  modules: {}
}) as Store;

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}
export default store