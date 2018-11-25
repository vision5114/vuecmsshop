// 引入vue-router路由
import VueRouter from 'vue-router';

// 引入路由匹配对应的组件
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import shopcar from './components/tabbar/shopcar.vue';
import search from './components/tabbar/search.vue';
import newslist from './components/news/newslist.vue';
// 定义路由匹配
var router = new VueRouter({
routes:[
  {path:"/",redirect:'/home'},
  {path:"/home",component:home},
  {path:"/member",component:member},
  {path:"/shopcar",component:shopcar},
  {path:"/search",component:search},
  {path:"/home/newslist",component:newslist},
],
// 修改路由匹配的默认类  mui-active 是mui的类
'linkActiveClass':'mui-active'
});


// 暴露对象,由于router本来就是对象来的,所以不需要再用{}
export default router;