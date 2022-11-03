const state = {
    loginUserName: ''
}

const mutations = {
    setLoginUser( state, user){
        state.loginUserName = user.name
    }
}

const actions = {
    setLoginUser({ commit }, user){
        commit('setLoginUser', user)
    }
}

const getters = {}

export default {
    //名前空間有効
    namespaced: true,

    state,
    mutations,
    actions,
    getters,
}