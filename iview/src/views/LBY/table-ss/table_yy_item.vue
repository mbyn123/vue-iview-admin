<template>
    <div>
        <div class="project">
            <div class="inside">
                <Row>
                    <Col span="6" v-for="(value,index) in mssg" :key="index">
                        <div class="card">
                            <div class="content">
                                <div style="padding:20px;background: white">
                             <div class="titl">
                                 <span class="imgs"><img :src=value.img  alt=""></span>
                                 <span><h4>{{value.user}}</h4></span>
                             </div>
                                <div  class="user">
                                    <div style="width:50%">
                                        <div class="two">活跃用户</div>
                                        <div><span class="one">{{value.num1}}</span><span class="three">万</span></div>
                                    </div>
                                    <div style="width:50%">
                                        <div class="two">新增用户</div>
                                        <div class="one">{{value.num2}}</div>
                                    </div>
                                </div>
                                </div>
                                <div class="palette">
                                    <span class="ii iii">
                                         <Tooltip content="下载" placement="top">
                                        <Icon type="ios-download-outline" size="22" color="grey"/>
                                         </Tooltip>
                                    </span>
                                    <span class="ii iii">
                                         <Tooltip content="编辑" placement="top">
                                        <Icon type="ios-create-outline" size="22" color="grey"/>
                                         </Tooltip>
                                    </span>
                                    <span class="ii iii">
                                         <Tooltip content="分享" placement="top">
                                        <Icon type="md-share" size="22" color="grey"/>
                                        </Tooltip>
                                    </span>
                                    <span class="ii ">
                                         <Tooltip content="下载" placement="bottom" theme="light">
                                        <Icon type="ios-more" size="22" color="grey"/>
                                             <div slot="content" theme="light">
                                              <p>1st menu item</p>
                                              <p>2nd menu item</p>
                                                 <p>3d menu item</p>
                                             </div>
                                        </Tooltip>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 mssg:[
                     {
                         user:"Alipay",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user:"Angular",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/opng.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user:"Ant Design",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/p.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user:"Ant Design Pro",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/spng.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user: "Bootstrap",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/fpng.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user: "React",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/20.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user:"Vue",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/C.png",
                         num1:"16",
                         num2:"1,026",
                     },
                     {
                         user: "Webpack",
                         img:"http://pt1mv9q6v.bkt.clouddn.com/z.png",
                         num1:"16",
                         num2:"1,026",
                     }
                 ]
            }
        },
        methods:{


        }

    }
</script>

<style scoped>
    .project{
        background: rgb(245,247,249);
        margin-top: -25px;

    }
    .project .inside{
        padding: 0 15px;

    }

    .project .inside .card .content{
        cursor: pointer;

    }
    .project .inside .card .content:hover{
        box-shadow: 1px 4px 5px 0px rgba(212,205,212,1);
        transition: 0.5s;
    }
    .inside .card .content .titl span{
        display: inline-block;
    }

    .inside .card .content .titl .imgs{
        width:24px;
        height:24px;
        display: inline-block;
        vertical-align: top;
        margin-right: 20px;
    }
    .inside .card .content .titl .imgs img{
        width:100%;
        border-radius: 50%;
    }
    .inside .card .content .user{
       margin-top: 15px;

        display: flex;
        padding-left:40px
    }
    .inside .card .content .user .one{
        font-size:24px
    }
    .inside .card .content .user .two{
        font-size: 12px;
        color:rgba(0,0,0,.45);
        line-height: 20px;
    }
    .inside .card .content .user .three{
        font-size:14px
    }
    .inside .card .content .palette{
        border-top:1px solid #ccc;
        background: #fafafa;
    }
    .iii{
        border-right:1px solid #e8e8e8;
    }
    .inside .card .content .palette .ii{

        width:25%;
        display: inline-block;
        text-align: center;
        margin: 13px 0;
    }
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>