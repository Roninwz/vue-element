import Layout from '@/layout'
export default [
  // ************** demo模块路由 开始 **************
  {
    path: '/demo',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/pages/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
];
