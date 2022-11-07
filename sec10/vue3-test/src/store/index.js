import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    increment( state ){ //statue引数は約束事
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
