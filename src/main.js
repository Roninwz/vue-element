import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en'; // lang i18n

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

// 本地使用mock
if (process.env.NODE_ENV === 'localdev') {
  const { mockXHR } = require('../mock');
  mockXHR();
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 自定义指令
import Directives from '@/directives/index';
Vue.use(Directives);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
