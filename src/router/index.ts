import { createRouter, createWebHashHistory } from 'vue-router';

import DefaultLayout from '@/layout/default-layout.vue';
import Dashboard from './dashboard';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
    },
    {
      name: 'root',
      path: '/',
      component: DefaultLayout,
      children: [Dashboard],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/not-found/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
