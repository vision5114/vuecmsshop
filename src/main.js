// 引入vue框架
import Vue from 'vue';

// 引用vue-resource模块,用于发送ajax请求
import vueResource from 'vue-resource';
// 挂载到vue身上
Vue.use(vueResource);

// 全局ajax请求的根域名
Vue.http.options.root = 'http://127.0.0.1:3000/';

// 引入vue-router路由
import VueRouter from 'vue-router';
// 挂载在vue身上
Vue.use(VueRouter);

/*  以下内容打包到router.js文件中, 统一管理 
    // // 引入路由匹配对应的组件
    //   import home from './components/tabbar/home.vue';
    //   import member from './components/tabbar/member.vue';
    //   import shopcar from './components/tabbar/shopcar.vue';
    //   import search from './components/tabbar/search.vue';
    //   import newslist from './components/news/newslist.vue';
    // // 定义路由匹配
    // var router = new VueRouter({
    //   routes:[
    //     {path:"/",redirect:'/home'},
    //     {path:"/home",component:home},
    //     {path:"/member",component:member},
    //     {path:"/shopcar",component:shopcar},
    //     {path:"/search",component:search},
    //     {path:"/home/newslist",component:newslist},
    //   ],
    //   // 修改路由匹配的默认类  mui-active 是mui的类
    //   'linkActiveClass':'mui-active'
    // });
*/

// 引入路由模块,获取路由对象
import router from  "./router.js";

// 全局引入mintuicss
import 'mint-ui/lib/style.css';
// 按需引入 mintui 头部的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 按需引入mint轮播图所需的组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



// 引入mui的css样式   由于mui不是vue安装的包所以需要用路径方式
import './lib/mui/css/mui.min.css';
// 引入mui的字体样式
import './lib/mui/css/icons-extra.css';


// 导入app.vue根组件
import app from './app.vue';

// 创建vm实例
new Vue({
  el:'#app',

  // render : function(c){
  //   return c(app);
  // },
  // 等价于以上写法
  render:c => c(app),

  // 将路由匹配对象加载到vue
  router,
  

});