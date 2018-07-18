import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Nosotros from '@/components/Nosotros'
import Servicios from '@/components/Servicios'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/nosotros/',
      name: 'Nosotros',
      component: Nosotros
    },
    {
      path: '/servicios/',
      name: 'Servicios',
      component: Servicios
    }
  ]
})
