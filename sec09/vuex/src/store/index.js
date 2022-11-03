import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'


Vue.use(Vuex)

export default new Vuex.Store({
  //初期値
  state: {
    count: 0,
    users:[
      {id: 1, name: 'レブロン', isVisible: true},
      {id: 2, name: 'KD', isVisible: false},
      {id: 3, name: 'やにす', isVisible: true},
    ]
  },
  getters: {
    /*
    visibleUsers( state ){
      //条件 ... isVisibleがtrueだったら表示する
      return state.users.filter( user => user.isVisible)
    }
    */
   //アロー関数で書く場合
   visibleUsers: state => state.users.filter( user => user.isVisible),

   //メソッドスタイル
   getUserById: state => id => {
    return state.users.find( user => user.id === id )
   }
  },
  //mutationの役割はstateの値を変更する
  mutations: {
    increment( state ){ //statue引数は約束事
      state.count++
    },
    addCount( state, payload ){//第2引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    //書き方は2パターンある
    /*
    incrementAction( context ){
      context.commit('increment')
    },
    incrementAction( {commit} ){
      commit('increment')
    }
    */
    incrementAction( {commit} ){
      commit('increment')
    },
    addCountAction( {commit}, payload){
      commit('addCount', payload)
    }
  },
  modules: {
    auth
  }
})
