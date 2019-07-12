<template>
    <div>
        <div class="xqy">
           <div class="in">
               <div class="plan">
                   <div style=" font-size:16px;color:black;padding:25px">流程进度</div>
                   <Row>
                       <Col span="24">
                           <div class="bar">
                               <Steps :current="1" size="small">
                                   <Step  content="创建项目"></Step>
                                   <Step  content="部门初审"></Step>
                                   <Step  content="财务复核"></Step>
                                   <Step  content="完成"></Step>
                               </Steps>
                               <Row>
                                   <div style="margin-top: 8px">
                                       <Col span="6">
                                           <div >
                                               <div><span>曲丽丽</span><Icon type="ios-at" color="#2d8cf0"/></div>
                                               <div>2016-12-12 12:32</div>
                                           </div>
                                       </Col>
                                       <Col span="6">
                                           <div >
                                               <span>周毛毛 <Icon type="ios-at" color="#2d8cf0"/><a href="">催一下</a></span>
                                           </div>
                                       </Col>
                                   </div>
                               </Row>

                           </div>
                       </Col>
                   </Row>

               </div>
                <div class="userss">
                    <div class="in">
                        <div class="name">用户信息</div>
                        <div class="message">
                            <Row v-for="(value,index) in messagess" :key="index">
                                <Col span="8">
                                    <div class="mess1">
                                    <div>{{value.content}}</div>
                                    <div>{{value.content2}}</div>
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div class="mess2">
                                    <div>{{value.content3}}</div>
                                    <div>{{value.content4}}</div>
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div class="mess3">
                                    <div>{{value.content5}}</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div class="name2">信息组</div>
                        <div class="message">
                                <Row v-for="(value1,index4) in messagess2" :key="index4">
                                    <Col span="8">
                                        <div class="mess1">
                                            <div>{{value1.user6}}</div>
                                            <div>{{value1.user2}}</div>
                                        </div>
                                    </Col>
                                    <Col span="8">
                                        <div class="mess2">
                                            <div>{{value1.user3}}</div>
                                        </div>
                                    </Col>
                                    <Col span="8">
                                        <div class="mess3">
                                            <div>
                                                <span>{{value1.user4}}</span>
                                                <Tooltip content="数据说明" placement="top">
                                                <Icon type="ios-information-circle-outline" size="18" />
                                                </Tooltip>
                                                <span>{{value1.user5}}</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        <div class="multilayer">
                             <div class="in">
                                 <div class="atitle">多层级信息组</div>
                                 <div class="list" v-for="(value,index3) in messagess3" :key="index3">
                                     <div class="name3">{{value.title6}}</div>
                                     <div class="message" style="padding: 0 25px;">
                                         <Row >
                                             <Col span="8">
                                                 <div class="mess1">
                                                     <div>{{value.title}}</div>
                                                     <div>{{value.title2}}</div>
                                                 </div>
                                             </Col>
                                             <Col span="8">
                                                 <div class="mess2">
                                                     <div>{{value.title3}}</div>
                                                     <div>{{value.title4}}</div>
                                                 </div>
                                             </Col>
                                             <Col span="8">
                                                 <div class="mess3">
                                                     <div>{{value.title5}}</div>
                                                 </div>
                                             </Col>
                                         </Row>
                                     </div>
                                 </div>
                                 <div class="list" v-for="(value,index1) in messagess4" :key="index1">
                                     <div class="name3">{{value.name6}}</div>
                                     <div class="message" style="padding: 0 25px;">
                                         <Row >
                                             <Col span="24">
                                                 <div class="mess1">
                                                     <div>{{value.name}}</div>
                                                 </div>
                                             </Col>
                                         </Row>
                                     </div>
                                 </div>
                                 <div class="list" v-for="(value,index2) in messagess5" :key="index2">
                                     <div class="name3">{{value.content6}}</div>
                                     <div class="message" style="padding: 0 25px;">
                                         <Row >
                                             <Col span="8">
                                                 <div class="mess1">
                                                     <div>{{value.content}}</div>
                                                     <div>{{value.content2}}</div>
                                                 </div>
                                             </Col>
                                             <Col span="8">
                                                 <div class="mess2">
                                                     <div>{{value.content3}}</div>
                                                     <div>{{value.content4}}</div>
                                                 </div>
                                             </Col>
                                             <Col span="8">
                                                 <div class="mess3">
                                                     <div>{{value.content5}}</div>
                                                 </div>
                                             </Col>
                                         </Row>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
               <GJXQ_item/>
           </div>
        </div>

    </div>

</template>

<script>
    import GJXQ_item from "./GJXQ_item.vue"
    export default {

            data(){
                return{
                    messagess:[
                        {
                            content:'用户姓名：付小小',
                            content2:'联系方式：18112345678',
                            content3:'会员卡号: 32943898021309809423',
                            content4:'联系地址曲丽丽: 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口',
                            content5:'身份证: 3321944288191034921',

                        },
                    ],
                    messagess2:[
                        {
                            user:'某某数据: 725',
                            user2:'该数据更新时间: 2017-08-08',
                            user3:'该数据更新时间: 2017-08-08',
                            user4:'某某数据',
                            user5:": 725"
                        },
                    ],
                    messagess3:[
                        {
                            title:'负责人: 林东东',
                            title2:'过期时间: 2017-08-08',
                            title3:'角色码: 1234567',
                            title4:'描述这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长...',
                            title5:"所属部门XX公司 - YY部",
                            title6:"组名称"
                        },

                    ],
                    messagess4:[
                        {
                            name:'学名:Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..',
                            name6:"组名称"
                        }
                    ],
                    messagess5:[
                        {
                            content:'负责人: 付小小',
                            content3:'1234568',
                            content6:"组名称"
                        }
                    ]
                }
            },
         components:{
             GJXQ_item
         }

    }
</script>

<style scoped>

    .multilayer{
        padding:0 25px
    }

    .multilayer .in{
        border:1px solid #ccc;

    }
    .multilayer .in .atitle{
        padding:12px 25px;
        border-bottom:1px solid #ccc;
        background: rgb(250, 250, 250);
        font-size:14px;
        color:black;

    }

    .multilayer .in  .list{
        border-bottom:1px solid #ccc;
    }

    .multilayer .in  .list .name3{
        font-size: 16px;
        color:black;
        font-weight: 700;

        padding: 20px 25px;

    }

.xqy{
     padding:30px;
}
.xqy .in{


}
.xqy .in .plan{
    background:#ffffff;
}
.xqy .in .plan .bar{
    border-top:1px solid #ccc;
    padding:30px 60px
}
.xqy .in .userss{
    margin-top: 25px;
    background: white;
    padding-bottom: 25px;
}
.xqy .in .userss .name{
    padding:25px;
    border-bottom:1px solid #ccc;
    font-size: 16px;
}

.xqy .in .userss .name2{
    padding-left: 30px;
    font-size: 16px;
    color: black;
    font-weight: 700;
}

.xqy .in .userss  .message{
    padding:20px 30px 0 30px;
    font-size:14px;

}
.xqy .in .userss  .message .mess3 div,
.xqy .in .userss  .message .mess2 div,
.xqy .in .userss  .message .mess1 div{
    margin-bottom: 10px;
}
.xqy .in .userss  .message .mess2 {
    padding-left:10px
}

</style>