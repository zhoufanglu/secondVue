// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';//axios ajax



import axiosInterceptor from '@/assets/js/axiosInterceptor.js';//拦截器
/**
 * ui组件
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//import Loading from '@/components/common/loading.vue';//loading全局组件
/*Vue.component("loading",Loading);*/
Vue.prototype.$http = axios;


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  mounted(){

  },
  router,
  template: '<App/>',
  components: { App }
});
