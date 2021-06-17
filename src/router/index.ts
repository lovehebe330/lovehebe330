import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/signin',
    component: Layout,
    children: [
      {
        path: '/signin',
        name: 'Signin',
        component: () => import('../views/login/signin.vue'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
