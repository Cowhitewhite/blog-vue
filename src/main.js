// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/index'
import axios from 'axios'
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/global.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;
axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token'); //获取Cookie
    config.headers = {
      'Content-Type':'application/json', //设置跨域头部
      'token':token
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.defaults.withCredentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
