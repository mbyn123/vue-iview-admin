<template>
    <div>
        <div class="prompt-boxs">
            <Tabs value="name1" :animated="false">
                <TabPane :label=t+informs.length name="name1">
                    <div>
                        <Row>
                            <div class="col"  v-for="(item) in informs" :key="item.id"
                                 @click="tstate()" >
                                <div class="user-img"><img :src=item.img alt=""></div>
                                <div>
                                    <div class="content">{{item.title}}</div>
                                    <div class="time">{{item.time}}</div>
                                </div>
                            </div>
                            <div v-show="astates">
                            <Col span="12">
                                <div class="operation ico" @click="informsDelall">
                                    <span>清空 通知</span>
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="operation" @click="info">
                                    <span>查看更多</span>
                                </div>
                            </Col>
                            </div>
                            <div style="text-align: center;padding: 90px 0" v-show="achange">
                                <div style="margin-bottom: 10px">
                                    <img src="../assets/20.svg" alt="">
                                </div>
                                <div style="font-size: 14px">
                                    你已查看所有通知
                                </div>
                            </div>
                        </Row>
                    </div>
                </TabPane>
                <TabPane :label=x+information.length name="name2">
                    <Row>
                        <Col span="24" v-for="item in information" :key="item.id">
                            <div class="col" @click="xstate()">
                                <div class="user-img"><img :src=item.img alt="" style=""></div>
                                <div>
                                    <h4 style="margin-bottom: 10px">{{item.title}}</h4>
                                    <div style="font-size: 12px;color:rgba(0,0,0,.45)">
                                        <div style="margin-bottom: 5px">{{item.content}}</div>
                                        <div>{{item.time}}</div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <div v-show="bstates">
                            <Col span="12">
                                <div class="operation ico"  @click="informationDelall">
                                    <span>清空 通知</span>
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="operation" @click="info">
                                    <span>查看更多</span>
                                </div>
                            </Col>
                        </div>
                        <div style="text-align: center;padding: 90px 0" v-show="bchange">
                            <div style="margin-bottom: 10px">
                                <img src="../assets/20.svg" alt="">
                            </div>
                            <div style="font-size: 14px">
                                您已读完所有消息
                            </div>
                        </div>
                    </Row>
                </TabPane>
                <TabPane :label=d+commission.length name="name3">
                    <Row>
                        <Col span="24" v-for="item in commission" :key="item.id">
                            <div class="Column" @click="dstate()">
                                <div class="statevoid">
                                    <div>{{item.title}}</div>
                                    <Tag :color=item.color>{{item.tag}}</Tag>
                                </div>
                                <div class="time">{{item.time}}</div>
                            </div>
                        </Col>
                        <div v-show="cstates">
                            <Col span="12">
                                <div class="operation ico" @click="commissionDelall">
                                    <span>清空 通知</span>
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="operation" @click="info">
                                    <span>查看更多</span>
                                </div>
                            </Col>
                        </div>
                        <div style="text-align: center;padding: 90px 0" v-show="cchange">
                            <div style="margin-bottom: 10px">
                                <img src="../assets/20.svg" alt="">
                            </div>
                            <div style="font-size: 14px">
                                你已完成所有待办
                            </div>
                        </div>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                t:"通知",
                x:"消息",
                d:"代办",
                astates:true,
                bstates:true,
                cstates:true,
                achange:false,
                bchange:false,
                cchange:false,
                informs: [
                    {
                        img: require("../assets/15.png"),
                        title: '你收到了 14 份新周报',
                        time: '2 年前',
                    },
                    {
                        img: require("../assets/13.png"),
                        title: '你推荐的 曲妮妮 已通过第三轮面试',
                        time: '2 年前'
                    },

                    {
                        img: require("../assets/14.png"),
                        title: '这种模板可以区分多种通知类型',
                        time: '2 年前'
                    },
                    {
                        img: require("../assets/12.png"),
                        title: '左侧图标用于区分不同的类型',
                        time: '2 年前'
                    },
                    {
                        img: require("../assets/16.png"),
                        title: '内容不要超过两行字，超出时自动截断nnnn',
                        time: '2 年前'
                    },
                ],
                information: [
                    {
                        img: require("../assets/11.jpeg"),
                        title: "曲丽丽 评论了你",
                        content: "描述信息描述信息描述信息",
                        time: "2年前"
                    },
                    {
                        img: require("../assets/11.jpeg"),
                        title: "朱偏右 回复了你",
                        content: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
                        time: "2年前"
                    },
                    {
                        img: require("../assets/11.jpeg"),
                        title: "标题",
                        content: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
                        time: "2年前"
                    },
                ],
                commission: [
                    {
                        title: "任务名称",
                        tag: "未开始",
                        color: "default",
                        time: "任务需要在 2017-01-12 20:00 前启动"
                    },
                    {
                        title: "第三方紧急代码变更",
                        tag: "马上到期",
                        color: "red",
                        time: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务"
                    },
                    {
                        title: "信息安全考试",
                        tag: "已耗时 8 天",
                        color: "gold",
                        time: "指派竹尔于 2017-01-09 前完成更新并发布"
                    },
                    {
                        title: "ABCD 版本发布",
                        tag: "进行中",
                        color: "blue",
                        time: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务"
                    },
                ]
            }
        },
        methods: {

            tstate() {


            },
            xstate() {

            },
            dstate() {

            },
            info () {
                this.$Message.info('Click on view more');
            },
            informsDelall(){
                this.informs=[]
                this.$Message.success('清空了 通知');
                this.astates=false
                this.achange=true
            },
            informationDelall(){
                this.information=[]
                this.$Message.success('清空了 通知');
                this.bstates=false
                this.bchange=true
            },
            commissionDelall(){
                this.commission=[]
                this.$Message.success('清空了 通知');
                this.cstates=false
                this.cchange=true
            }
        },

    }
</script>

<style>

    .prompt-boxs .Column {
        border-bottom: 1px solid #ccc;
        padding: 10px 20px;
    }

    .prompt-boxs .Column:hover {
        background: rgb(230, 247, 255);
    }

    .prompt-boxs .Column .statevoid {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .prompt-boxs .Column .time {
        font-size: 12px;
        color: rgba(0, 0, 0, .45);
    }

    .prompt-boxs .ivu-tabs-nav-wrap {
        text-align: center;
        padding: 0 20px;
    }

    .prompt-boxs .ivu-tabs-nav-scroll {
        display: inline-block;
        vertical-align: bottom;

    }

    .prompt-boxs .ivu-tabs-bar {
        margin-bottom: 0;
    }

    .prompt-boxs .operation {
        text-align: center;
        padding: 15px 0;

    }

    .prompt-boxs .ico {
        border-right: 1px solid #ccc
    }

    .prompt-boxs {
        position: absolute;
        right: 0;
        top: 50px;
        background: #fff;
        z-index: 9;
        width: 340px;
        box-shadow: -1px 1px 5px 0px rgba(209, 198, 209, 1);
    }

    .prompt-boxs .user-img img {
        padding-top: 5px;
        width: 32px;
        border-radius: 50%;
        margin-right: 20px;
    }

    .prompt-boxs .col .content {
        max-width: 240px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgba(0, 0, 0, .65);
    }

    .prompt-boxs .col .time {
        font-size: 12px;
    }

    .prompt-boxs .col {
        display: flex;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
        padding: 15px 0 20px 20px;
    }
    .prompt-boxs .cols{
        display: flex;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
        padding: 15px 0 20px 20px;
        opacity: 0.5;
    }
    .prompt-boxs .col:hover {
        background: rgb(230, 247, 255);
    }

</style>