import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaDeputados from '@/views/ListaDeputados.vue'
import DetalhesDeputado from '@/views/DetalhesDeputado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListaDeputados',
    component: ListaDeputados
  },
  {
    path: '/deputado/:id',
    name: 'DetalhesDeputado',
    component: DetalhesDeputado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router