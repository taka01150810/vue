import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //初期値
  state: {
    count: 0
  },
  getters: {
  },
  //mutationの役割はstateの値を変更する
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
