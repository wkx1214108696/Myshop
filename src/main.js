// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入Mint-ui
import MintUI from 'mint-ui';
// 安装插件
Vue.use(MintUI);
// 引入css
import 'mint-ui/lib/style.css'

import Axios from 'axios'
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:8080/api/';

// 定义过滤器，对商品的名称进行截取。
Vue.filter('showTitle', function (str, num) {
  if (str.length < num) {
    return str
  } else {
    return str.substr(0, num) + '...'
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
