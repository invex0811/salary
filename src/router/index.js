import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout:'LayoutWithNavbar'},
    component: Home
  },
  {
    path: '/salary',
    name: 'Salary',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/Salary')
  },
  {
    path: '/overSpeed',
    name: 'OverSpeed',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/OverSpeed')
  },
  {
    path: '/convertingTime',
    name: 'ConvertingTime',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/СonvertingTime')
  },
  {
    path: '/plusTime',
    name: 'PlusTime',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/PlusTime')
  },
  {
    path: '/phrasesPage',
    name: 'PhrasesPage',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/PhrasesPage')
  },
  {
    path: '/mapUSA',
    name: 'MapUSA',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/MapUSA')
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
