<template>
<div>
   <Row>
       <Col span="24">
       <div class="title">
         <div class="top">
             <div class="link">
                 <a href="#" >首页</a>
                 <span>/</span>
                 <a href="#">表单页</a>
                  <span>/</span>
                 <a href="#">分布表单</a>
             </div>
             <div class="title1">分布表单</div>
             <div class="title2">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>
         </div>
          </div>
       </Col>
   </Row>
  <Fenbu/>
</div>
</template>

<script>
import Fenbu from "./Fenbu.vue"
export default {
    components:{
       Fenbu
    }
}
</script>

<style>
.top{
    background: white;
    margin-top: 1px;
    padding:20px 20px 30px 20px;
}

.title{
    margin: -20px;
}

.top .link{
   
}

.top .link a{
    color:rgba(0,0,0,.45);
    font-size:14px
}

.top .link a:hover{
    color:#2d8cf0
}

.top .link span{
    font-size: 14px;
    margin: 0 10px;
    color:rgba(0,0,0,.45);
}

.top  .title1{
   
    font-size:16px;
    color:black;
    font-weight: 600;
    margin: 10px 0
}
.top  .title2{
   
    font-size: 14px
}
</style>
