<template>
<div>
    <div class="comments ">
        <div class="insides">
            <Row>
                <Col span="24" v-for="(value,index) in message" :key="index">
                    <div class="content">
                        <div>
                            <h4>{{value.user}}</h4>
                            <Tag>{{value.tag1}}</Tag>
                            <Tag>{{value.tag2}}</Tag>
                            <Tag>{{value.tag3}}</Tag>
                        </div>
                        <div>
                            <p class="p">{{value.p}}</p>
                            <div class="user">
                                <span class="imgs"><img :src=value.img alt=""></span>
                                <a href="#">{{value.a1}}</a>
                                <span> 发布在 </span>
                                <a href="#">{{value.a2}}</a>
                                <em>{{value.time}}</em>
                            </div>
                            <div class="links">
                                <span><Icon type="ios-star-outline" size="17" class="i"/>{{value.num1}}</span>
                                <span><Icon type="md-thumbs-up" size="17" class="i"/> {{value.num2}} </span>
                                <span><Icon type="ios-paper-outline" size="17" class="i"/> {{value.num2}} </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="but">
            <Button ><span>加载更多</span></Button>
        </div>
    </div>
</div>
</template>


<script>
    export default{
          data(){
              return{
                  message:[
                      {
                          user:'Alipay',
                          tag1:"Ant Design",
                          tag2:"设计语言",
                          tag3:"蚂蚁金服",
                          p:"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，" +
                              "提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，" +
                              "无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                          img:"http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
                          a1:"付小小",
                          a2:"https://ant.design",
                          time:"2019-07-06 05:06",
                          num1:"165",
                          num2:"118",
                          num3:"15"
                      },
                      {
                          user:'Angular',
                          tag1:"Ant Design",
                          tag2:"设计语言",
                          tag3:"蚂蚁金服",
                          p:"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，" +
                              "提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，" +
                              "无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                          img:"http://pt1mv9q6v.bkt.clouddn.com/opng.png",
                          a1:"曲丽丽",
                          a2:"https://ant.design",
                          time:"2019-07-06 03:06",
                          num1:"114",
                          num2:"139",
                          num3:"14"
                      },
                      {
                          user:'Ant Design',
                          tag1:"Ant Design",
                          tag2:"设计语言",
                          tag3:"蚂蚁金服",
                          p:"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，" +
                              "提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，" +
                              "无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                          img:"http://pt1mv9q6v.bkt.clouddn.com/p.png",
                          a1:"林东东",
                          a2:"https://ant.design",
                          time:"2019-07-06 01:26",
                          num1:"115",
                          num2:"189",
                          num3:"12"
                      },
                      {
                          user:'Ant Design Pro',
                          tag1:"Ant Design",
                          tag2:"设计语言",
                          tag3:"蚂蚁金服",
                          p:"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，" +
                              "提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，" +
                              "无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                          img:"http://pt1mv9q6v.bkt.clouddn.com/spng.png",
                          a1:"周星星",
                          a2:"https://ant.design",
                          time:"2019-07-05 23:26",
                          num1:"191",
                          num2:"150",
                          num3:"16"
                      },
                      {
                          user:'Bootstrap',
                          tag1:"Ant Design",
                          tag2:"设计语言",
                          tag3:"蚂蚁金服",
                          p:"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，" +
                              "提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，" +
                              "无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
                          img:"http://pt1mv9q6v.bkt.clouddn.com/z.png",
                          a1:"吴加好",
                          a2:"https://ant.design",
                          time:"2019-07-05 21:26",
                          num1:"111",
                          num2:"135",
                          num3:"13"
                      },

                  ]
              }
          }
    }
</script>


<style>

    .comments .but{
       width:100%;
        background: white;
        text-align: center;
        padding-bottom: 30px;
    }
    .comments .but span{
        padding: 0 20px;
        font-size: 14px;
    }
.comments{
    background:rgb(245,247,249);
    padding:0 20px
}

.comments .insides{
    background: white;
    padding:20px;

}
.comments .insides .content{
    border-bottom:1px solid #ccc;
    padding: 5px;
}

.comments .insides .content h4{
    margin-bottom: 10px;
    cursor: pointer;
}

.comments .insides .content h4:hover{
    color:#2b85e4;
}

.comments .insides .content .p{
    max-width:720px ;
    font-size:14px;
    color: rgba(0,0,0,.45);
    margin-top: 10px;
}

.comments .insides .content .user{
    margin:16px 0 0 0;
    font-size: 14px;
    color: rgba(0,0,0,.45);
}

.comments .insides .content .user em{
    margin-left: 30px;
    display: inline-block;
}

.comments .insides .content .user a{
    cursor: pointer;
}

.comments .insides .content .imgs{
    display: inline-block;
    width:20px;
    height:20px;
    margin-right: 5px;
    vertical-align: top;
}
.comments .insides .content .imgs img{
    width:100%;
    height:100%;
    border-radius: 50%;
}
.comments .insides .content .links{
    font-size: 14px;
    color: rgba(0,0,0,.45);
}
.comments .insides .content .links i{
   padding-top: 14px;

}
</style>