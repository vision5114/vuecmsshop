
<template>   
  <!-- 放组件代码 -->
  <!-- 需要有一个根元素 -->
  <div class='home-container'> 
    <!-- 首页 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    
    <!-- 首页 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist" href="#">
            <img src="../../images/menu1.png" >
            <div class="mui-media-body">新闻资讯</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu2.png" >
            <div class="mui-media-body">图片分享</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" >
            <div class="mui-media-body">商品购买</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" >
            <div class="mui-media-body">留言反馈</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" >
            <div class="mui-media-body">视频专区</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" >
            <div class="mui-media-body">练习我们</div></a></li>
       
      </ul> 
		</div>


  </div>
</template>


<script>
    // 放当前组件的逻辑
    // 暴露对象
    export default {  
      data(){
        return {
          lunbo:[]
        }
      },
      created(){
        // 此生命周期函数,会在当前组件实例等待data和methods属性准备好后执行
        this.getLunBo();

      },

      methods:{
        getLunBo(){
          // console.log('res');
          this.$http.get('http://127.0.0.1:3000/api/getlunbo').then(function(res){
            if (res.body.status == 0 ){
              this.lunbo = res.body.message;
            }

          });
        }
      }
      
    }
    
</script>


<style lang='scss' scoped>
    /*放当前组件的样式*/
    .home-container{

      .mint-swipe{
        height:200px;
        
        img{
          width: 100%;
          height: 100%;
        }
      }
      
      .mui-grid-9{
        background-color: #fff;

        .mui-table-view-cell{
          border: none;

          img{
            width: 50%;
          }

          .mui-media-body{
            font-size: 13px;
          }
        }
      }
    }
 
</style>