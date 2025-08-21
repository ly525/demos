import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '用户',
      role: 'admin'
    },
    count: 0
  },
  getters: {
    userName: state => state.user.name,
    userRole: state => state.user.role,
    getCount: state => state.count
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    INCREMENT (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    }
  },
  actions: {
    updateUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    increment ({ commit }) {
      commit('INCREMENT')
    },
    decrement ({ commit }) {
      commit('DECREMENT')
    }
  }
})
