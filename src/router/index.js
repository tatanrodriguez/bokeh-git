import Vue from 'vue'
import VueRouter from 'vue-router'

//import vistas
import Inicio from '../views/Inicio.vue'
import Portafolio from '../views/Portafolio.vue'
import Acerca from '../views/Acerca.vue'
import Contacto from '../views/Contacto.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/portafolio',
    name: 'portafolio',
    component: Portafolio
  },
  {
    path: '/acerca',
    name: 'acerca',
    component: Acerca
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
