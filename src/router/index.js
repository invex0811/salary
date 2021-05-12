import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/speedList',
    name: 'SpeedList',
    meta: {layout:'LayoutWithNavbar'},
    component: () => import('@/views/SpeedList')
  },
  {
    path: '/convertingTime',
    name: 'ConvertingTime',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/СonvertingTime')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
