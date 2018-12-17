import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/HelloWorld.vue"
import Geren from "./components/details/geren.vue"
import Bieshu from "./components/details/bieshu.vue"
import Product from "./components/products/product.vue"
import Zonglan from "./components/info/zonglan.vue"
import Xingcheng from "./components/info/xingcheng.vue"
import Jiudian from "./components/info/jiudian.vue"
import Pinglun from "./components/info/pinglun.vue"

Vue.use(Router)

export default new Router({
    routes: [
      {path:'/',redirect:"/home"},
      {path:'/home',component:Home},
      {path:'/green',component: Geren},
      {path:'/bieshu',component: Bieshu},
      {path:'/home/product/:pid',component: Product,props:true,
        children:[
          {path:'/',redirect:"/home/product/:pid/zong"},
          {path:'zong',component:Zonglan},
          {path:'xing',component:Xingcheng},
          {path:'jiu',component:Jiudian},
          {path:'ping',component:Pinglun}
        ]
      }
    ]
  })