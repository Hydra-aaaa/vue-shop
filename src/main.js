import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import '@/plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/iconfont.css'
import axios from 'axios'

// 配置请求根路径
axios.defaults.baseURL = 'http://139.196.151.140:8889/api/private/v1/';

// 发请求前进行token认证
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
// 在vue原型中绑定axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
