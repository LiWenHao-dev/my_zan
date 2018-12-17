// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css' 
Vue.config.productionTip = false

//引入mui css文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'



//引入完整mint-ui
import MintUI from  "mint-ui"
Vue.use(MintUI)

//引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})//有问题，还没做

//引入vue-resource 发送ajax
import VueResource from "vue-resource"
//将所有组件注册
Vue.use(VueResource);

//配置信息，vueResource 服务器根目录
Vue.http.options.root="http://localhost:2500/";
Vue.http.options.emulateJSON = true;

axios.default.withCredentials=true  //axios默认不带cookie，导致无法使用服务器端session，需配置axios
Vue.prototype.axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

