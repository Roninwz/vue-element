import Vue from 'vue';
import Vuex from 'vuex';

import modules from '@/store/modules';
import getters from './getters'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: getters,
  modules,
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
