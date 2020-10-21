import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import '@/filters';

// 阻止启动生产消息
Vue.config.productionTip = false;
import '@/icons' // icon
// 自定义指令
import Directives from '@/directives/index';
Vue.use(Directives);

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
