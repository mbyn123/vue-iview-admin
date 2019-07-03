<template>
  <div>
    <div class="dh">
      <div class="in">
        <div class="top">
          <span>
            快速开始
            <span class="ico">/</span> 便捷导航
          </span>
        </div>
        <div class="operating">
             <Row >
        <Col span="6" v-for="(dh,index) in dharr" :key="index"><a href="#">{{dh}}</a></Col>
          <Col span="6" > 
         <Button type="primary" size="small" ghost>
             <Icon type="md-add" size="20" style="margin-top:-3px"/>
             <span style="font-size:14px">添加</span></Button>
          </Col>
    </Row>
        </div>
      </div>
    </div>

    <Gfive />
    <Gsix />
  </div>
</template>

<script>
import Gfive from "./Gfive";
import Gsix from "./Gsix";
export default{
    data(){
        return{
            dharr:["操作一","操作二","操作三","操作四","操作五","操作六"]
        }
    },
  components: {
    Gfive,
    Gsix
  }
};
</script>

<style>
.dh {

  margin-top: 40px;
  padding: 0 12px 12px 12px;
}

.dh .in {
  background: white;
}
.dh .in .top {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: black;
}
.dh .in .top .ico {
  margin: 0 5px;
}

.dh .in .operating{
  
    padding: 20px 0 8px 24px;
}

.dh .in .operating a{
    color: rgba(0,0,0,.65);
    font-size:14px;
    margin-bottom: 13px;
    display: inline-block;
}

.dh .in .operating a:hover{
    color:#2d8cf0
}
</style>

