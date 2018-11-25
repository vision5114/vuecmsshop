
<template>   
  <!-- 放组件代码 -->
  <!-- 需要有一个根元素 -->
  <div class = 'app-container'> 
    <!-- header头部 -->
    <mt-header fixed title="vue-cmsshop"></mt-header>


    <!-- tabbar主体 -->



    <!-- tabbar选项卡 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <router-view></router-view>  

  </div>
</template>

<script>
    // 放当前组件的逻辑
    // 暴露对象
    export default {  
      
    }
    
</script>


<style lang='scss' scoped>
    /*放当前组件的样式*/
  .app-container{
    padding-top: 40px; 
  }


</style>