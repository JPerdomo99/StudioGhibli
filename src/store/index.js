import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: true
  },
  mutations: {
    getLogo(state, accion) {
      state.logo = accion
    },
    getLogoId(state, accion) {
      state.logo = accion
    }
  },
  actions: {
    getLogoMax( { commit } ) {
      commit('getLogo', true)
    },
    getLogoMin( { commit } ) {
      commit('getLogoId', false)
    }
  },
  modules: {
  }
})
