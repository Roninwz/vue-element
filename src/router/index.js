import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './routeConfig'
Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.VUE_APP_BASE_URL,
  mode: 'history',
  routes: routerConfig.routeConfig,
});

// 路由守卫
// router.beforeEach((to, from, next) => {
//   if(to.path === '/'){
//     next('/home')
//   }else{
//     if (to.meta.title) {
//       document.title = to.meta.title;
//     }else{
//       document.title = '后台管理平台';
//     }

//     // 验证地址是否在黑白名单里面
//     let checkUrl = () => {
//       return new Promise((resolve, reject) => {
//         let flag;
//         if(routerConfig.authType === 'white'){
//           routerConfig.whiteList.forEach(pathRule => {
//             if(pathRule.test(to.path)){
//               flag = true;
//             }
//           });
//         }else if(routerConfig.authType === 'black'){
//           flag = true;
//           routerConfig.blackList.forEach(pathRule => {
//             if(pathRule.test(to.path)){
//               flag = false;
//             }
//           });
//         }

//         if(flag){
//           resolve();
//         }else{
//           reject();
//         }
//       })
//     };
//     checkUrl().then(() => next()).catch(() => {
//       let redirectUrl = to.path;
//       for(let key in to.query){
//         if(redirectUrl.indexOf('?') >= 0){
//           redirectUrl += `&`;
//         }else{
//           redirectUrl += `?`;
//         }
//         redirectUrl += `${key}=${to.query[key]}`;
//       }
//       document.title = '登录';
//       next(`/login?redirectUrl=${encodeURIComponent(redirectUrl)}`)
//     });
//   }
// });

export default router;
