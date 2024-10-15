import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts/LayoutDefault.vue'
import HomePage from '@/components/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '',
        component: HomePage,
        name: 'homePage',
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    meta: {
      title: 'about',
    },
    children: [
      {
        path: '',
        component: () => import('@/components/AboutPage.vue'),
        name: 'aboutPage',
      },
    ],
  },
  {
    path: '/play',
    component: Layout,
    meta: {
      title: 'play',
    },
    children: [
      {
        path: '',
        component: () => import('@/components/PlayPage.vue'),
        name: 'playPage',
      },
    ],
  },
  {
    path: '/fabric',
    component: Layout,
    meta: {
      title: 'fabric',
    },
    children: [
      {
        path: '',
        component: () => import('@/components/FabricCanvas.vue'),
        name: 'FabricCanvas',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
