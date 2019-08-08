<template>
  <div>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="16" :xxl="16">
        <div class="project">
          <div class="in">
            <div class="top">
              <span class="name">进行中的项目</span>
              <a href="#">全部项目</a>
            </div>
            <div class="main">
              <Row>
                <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8" v-for="project in projectarr" :key="project.id">
                  <Card>
                    <div class="content" >
                        <div class="inner">
                          <div>
                            <span class="name"><img :src=project.img alt=""></span>
                            <a href="#">{{project.user}}</a>
                         </div>
                           <div  class="ine">{{project.content}}</div>
                        </div>
                       <div class="ina">
                           <a href="#">{{project.team}}</a><span>{{project.time}}</span>
                       </div>
                    </div>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </div>
        </div>
          <Dynamic/>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="8" :xxl="8">
       <Navigation/>
      </col>
    
      
    </Row>
  </div>
</template>

<script>
import Dynamic from "./Dynamic"
import Navigation from "./Navigation"

export default {
    data(){
        return{
           projectarr:[
               {
                  img: require('../../../assets/userlogo_images/alipay.png'),
                   user:"Alipay",
                   content:"那是一种内在的东西，他们到达不了，也无法触及的",
                   team:"科学搬家组",
                   time:"6 分钟前"
               },
                {
                   img:require('../../../assets/userlogo_images/react.png'),
                   user:"Angular",
                   content:"希望是一个好东西，也许是最好的，好东西是不会消亡的",
                   team:"全组都是吴彦祖",
                   time:"2 年前"
               },
                {
                   img: require('../../../assets/userlogo_images/vue.png'),
                   user:"Ant Design",
                   content:"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
                   team:"中二少女团",
                   time:"6 分钟前"
               },
                {
                   img:require('../../../assets/userlogo_images/angular.png'),
                   user:"Ant Design Pro",
                   content:"那时候我只会想自己想要什么，从不想自己拥有什么",
                   team:"程序员日常",
                   time:"2 年前"
               },
                {
                    img: require('../../../assets/userlogo_images/bro.png'),
                   user:"Bootstrap",
                   content:"凛冬将至",
                   team:"全组都是吴彦祖",
                   time:"高逼格设计天团"
               },
                {
                   img:require('../../../assets/userlogo_images/pro.png'),
                   user:"React",
                   content:"生命就像一盒巧克力，结果往往出人意料",
                   team:"骗你来学计算机",
                   time:"2 年前"
               },
           ]
        }
    },
    components:{
      Dynamic,
      Navigation
    }
};
</script>

<style scoped>

.project {
 padding: 40px 12px 12px 3px;


}
.project .in {
  background: #fff;
}

.project .in .top {

  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.project .in .top .name {
  font-size: 16px;
  color: #333;
}



.project .in .main .content .inner .ine{
    height:44px;
    line-height: 22px;
    color: rgba(0,0,0,.45);
}

.project .in .main .content .inner  a{
    margin-left: 10px;
     display: inline-block;
     height:24px;
     line-height: 24px;
     vertical-align: top;
}

.project .in .main .content .inner .name{
    display: inline-block;
    width:24px;
    height:24px;
    border-radius: 50%;
}
.project .in .main .content .inner .name img{
    width:100%;
    height:100%;
    border-radius: 50%;
}

.project .in .main .content .ina{
  display: flex;
  justify-content: space-between
}

.project .in .main .content .ina a{
    color:rgba(0,0,0,.45);
    font-size:12px
}

.project .in .main .content .ina span{
    font-size:12px;
    color: rgba(0,0,0,.25)
}

.project .in .main .content .ina a:hover{
    color:#2db7f5
}


</style>
