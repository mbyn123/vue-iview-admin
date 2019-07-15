<template>
  <div>
    <Row>
      <Col span="16">
        <div class="xm">
          <div class="in">
            <div class="top">
              <span>进行中的项目</span>
              <a href="#">全部项目</a>
            </div>
            <div class="main">
              <Row>
                <Col span="8" v-for="(xm,index) in xmarr" :key="index">
                  <Card>
                    <div class="cc" >
                        <div class="inn">
                          <div>
                            <span><img :src=xm.img alt=""></span>
                            <a href="#">{{xm.user}}</a>
                         </div>
                           <div  class="ine">{{xm.content}}</div>
                        </div>
                       <div class="ina">
                           <a href="#">{{xm.team}}</a><span>{{xm.time}}</span>
                       </div>
                    </div>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </div>
        </div>
          <Gthree/>
      </Col>
      <Col span="8">
       <Gfour/>
      </col>
    
      
    </Row>
  </div>
</template>

<script>
import Gthree from "./Gthree"
import Gfour from "./Gfour"

export default {
    data(){
        return{
           xmarr:[
               {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
                   user:"Alipay",
                   content:"那是一种内在的东西，他们到达不了，也无法触及的",
                   team:"科学搬家组",
                   time:"6 分钟前"
               },
                {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/opng.png",
                   user:"Angular",
                   content:"希望是一个好东西，也许是最好的，好东西是不会消亡的",
                   team:"全组都是吴彦祖",
                   time:"2 年前"
               },
                {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/fpng.png",
                   user:"Ant Design",
                   content:"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
                   team:"中二少女团",
                   time:"6 分钟前"
               },
                {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/spng.png",
                   user:"Ant Design Pro",
                   content:"那时候我只会想自己想要什么，从不想自己拥有什么",
                   team:"程序员日常",
                   time:"2 年前"
               },
                {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/p.png",
                   user:"Bootstrap",
                   content:"凛冬将至",
                   team:"全组都是吴彦祖",
                   time:"高逼格设计天团"
               },
                {
                   img:"http://pt1mv9q6v.bkt.clouddn.com/z.png",
                   user:"React",
                   content:"生命就像一盒巧克力，结果往往出人意料",
                   team:"骗你来学计算机",
                   time:"2 年前"
               },
           ]
        }
    },
    components:{
          Gthree,
          Gfour
    }
};
</script>

<style>

.xm {
  margin-top: 40px;
 padding: 0 12px 12px 3px;

}
.xm .in {
  background: white;
}

.xm .in .top {

  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.xm .in .top span {
  font-size: 16px;
  color: black;
}

.xm .in .main .cc .inn .ine{
    height:44px;
    line-height: 22px;
    color: rgba(0,0,0,.45);
}

.xm .in .main .cc .inn  a{
    margin-left: 10px;
     display: inline-block;
     height:24px;
     line-height: 24px;
     vertical-align: top;
}

.xm .in .main .cc .inn span{
    display: inline-block;
    width:24px;
    height:24px;
    border-radius: 50%;
}
.xm .in .main .cc .inn span img{
    width:100%;
    height:100%;
    border-radius: 50%;
}

.xm .in .main .cc .ina{
  display: flex;
  justify-content: space-between
}

.xm .in .main .cc .ina a{
    color:rgba(0,0,0,.45);
    font-size:12px
}

.xm .in .main .cc .ina span{
    font-size:12px;
    color: rgba(0,0,0,.25)
}

.xm .in .main .cc .ina a:hover{
    color:#2db7f5
}


</style>
