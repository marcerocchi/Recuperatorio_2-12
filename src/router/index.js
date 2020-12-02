import { createRouter, createWebHistory } from 'vue-router'

import Choice from '../components/Choice.vue'
import Formulario from '../components/Formulario.vue'



const routes = [
  { path: '/', name: 'Home', component: Formulario },
  { path: '/choice', name: 'Choice', component: Choice },
  { path: '/formulario', name: 'Formulario', component: Formulario }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

export default router
