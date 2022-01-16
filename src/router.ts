import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Users } from './pages/Users'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    component: Users
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
