import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import FilmId from '../views/FilmId.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Film',
    component: Film
  },
  {
    path: '/Film/:id',
    name: 'FilmId',
    component: FilmId
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
