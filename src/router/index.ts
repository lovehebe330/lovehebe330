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
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/login/signup.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import('../views/login/verify.vue'),
    meta: {
      title: '验证码'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/user/index.vue'),
    meta: {
      title: '首页',
      showTab: false,
      keepAlive: true
    }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/editor/index.vue'),
    meta: {
      title: '富文本编辑器'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
