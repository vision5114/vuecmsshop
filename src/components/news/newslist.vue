
<template>   
  <!-- 放组件代码 -->
  <!-- 新闻展示列表 -->
  <div class="newslist-container"> 
    <ul class="mui-table-view">
				
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h2> {{item.title}} </h2>
							<p class='mui-ellipsis'>
                <span >发布时间: {{item.add_time}} </span>
                <span class='click' >点击: {{item.click}}次</span>
              </p>
						</div>
					</a>
				</li>			
				
			</ul>
  </div>
</template>


<script>
    // 放当前组件的逻辑
    // 暴露对象
    export default {  
      data(){
        return {
          newslist:[]
        }
      },
      created(){
        this.getnewslist();
      },
      methods:{
        // 获取新闻列表数据
        getnewslist:function(){
          this.$http.get('api/getnewslist').then(function(res){
            if (res.body.status == 0){
              this.newslist = res.body.message;
            }
          });
        }
      }
      
    }
    
</script>


<style lang ='scss' scoped>
    /*放当前组件的样式*/
  .newslist-container{
    .mui-table-view{
      h2{
        font-size: 13px;
      }
      .mui-ellipsis{
        color:#4066cd;
        font-size: 13px;

        .click{
          float: right;
        }
      }
    }
  }
  
</style>