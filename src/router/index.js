import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/peliculas',
    name: 'peliculas',
    component: () => import('../views/Peliculas.vue')
  },
  {
    path: '/peliculas/:id',
    name: 'infoPelicula',
    component: () => import('../views/infoPelicula.vue')
  },
  {
    path: '/categoria/:id',
    name: 'categoria',
    component: () => import('../views/categoria.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
