import demoRouter from './demoRouter';
import Layout from '@/layout'
export default {
  routeConfig: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/home'),
        meta: { title: 'home', icon: 'dashboard' }
      }]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        keepAlive: false,
        title: '登录',
        hasBack: true
      },
      component: () => import('@/pages/login'),
    },
    ...demoRouter,
  ],

  authType: 'white',  //白名单 white 可以跳过登录 | 黑名单 black 不可以跳过登录
  whiteList: [
    /^\/login/,
  ],
  blackList: [

  ],

}
