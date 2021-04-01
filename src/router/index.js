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
    path: '/categorias/:category',
    name: 'categorias',
    component: () => import('../views/categorias.vue')
  },
  {
    path: '/populares',
    name: 'populares',
    component: () => import('../views/populares.vue')
  },
  {
    path: '/Recientes',
    name: 'Recientes',
    component: () => import('../views/Recientes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
