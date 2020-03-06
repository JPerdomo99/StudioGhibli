import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    certFresh: '@/assets/Images/Rt/RottenFresh.png',
    fresh: '@/assets/Images/Rt/30px-Rotten_Tomatoes.svg.png',
    rotten: '@/assets/Images/Rt/30px-Rotten_Tomatoes_rotten.svg.png'
  },
  mutations: {
  },
  actions: {
    getImage(state) {
      
    }
  },
  modules: {
  }
})
