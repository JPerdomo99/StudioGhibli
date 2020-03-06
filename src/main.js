import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data: {
    // Oh no - appName es *también* el nombre de una
    // propiedad de instancia que hemos definido!
    $certFresh: '@/assets/Images/Rt/RottenFresh.png',
    $fresh: '@/assets/Images/Rt/30px-Rotten_Tomatoes.svg.png',
    $rotten: '@/assets/Images/Rt/30px-Rotten_Tomatoes_rotten.svg.png'
  },
  render: h => h(App)
}).$mount('#app')
