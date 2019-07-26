<template>
    <div>
        <div class="sales-return">
            <div class="in">
              <div class="name"><span>退货商品</span></div>
                <Row>
                    <Col span="24">
                        <Table :columns="columns1" className="" :data="data1" footer>
                            <template slot-scope="{ row }" slot="number">
                                <a >{{ row.number }}</a>
                            </template>
                        </Table>
                    </Col>
                </Row>
            </div>
            <div class="name2"><span>退货进度</span></div>
            <Row>
                <Col span="24">
                    <Table :columns="columns2" className="" :data="data2" footer>
                        <template slot-scope="{ row }" slot="time">
                            <div >{{ row.time }}</div>
                        </template>

                        <template slot-scope="{ row }" slot="schedule">
                            <span >{{ row.schedule }}</span>
                        </template>

                        <template slot-scope="{ row }" slot="state" >
                         <span><Icon type="ios-radio-button-on" size="1" :style="{color:row.color}"/></span><span class="state">{{ row.state }}</span>
                        </template>

                        <template slot-scope="{ row }" slot="ID">
                            <span >{{ row.ID }}</span>
                        </template>

                        <template slot-scope="{ row }" slot="elapsed_time">
                            <span >{{ row.elapsed_time }}</span>
                        </template>
                    </Table>
                </Col>
            </Row>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

                columns1: [
                    {
                        title: '商品编号',
                        slot: 'number'
                    },
                    {
                        title: '商品名称',
                        key: 'name'
                    },
                    {
                        title: '商品条码',
                        key: 'code'
                    },
                    {
                        title: '单价',
                        key: 'price'
                    },
                    {
                        title: '数量(件)',
                        key: 'count'
                    },
                    {
                        title: '金额',
                        key: 'money'
                    },

                ],
                columns2:[
                    {
                        title:"时间",
                        slot:"time"
                    },
                    {
                        title:"当前进度",
                        slot:"schedule"
                    },
                    {
                        title:"状态",
                        slot:"state"
                    },
                    {
                        title:"操作元ID",
                        slot:"ID"
                    },
                    {
                        title:"耗时",
                        slot:"elapsed_time"
                    },
                ],
                data1: [
                    {
                    number:"123456",
                    name:"矿泉水 550ml",
                    code:"12421432143214321",
                    price:"2.00",
                    count:"1",
                    money:"2.00",
                 },
                    {
                        number:"123457",
                        name:"凉茶 300ml",
                        code:"12421432143214322",
                        price:"3.00",
                        count:"2",
                        money:"6.00",
                    },
                    {
                        number:"123458",
                        name:"好吃的薯片",
                        code:"12421432143214323",
                        price:"7.00",
                        count:"4",
                        money:"28.00",
                    }, {
                        number:"123459",
                        name:"特别好吃的蛋卷",
                        code:"12421432143214324",
                        price:"8.50",
                        count:"3",
                        money:"25.50",
                    },


        ],
                data2:[
                    {
                        time:"2017-10-01 14:10",
                        schedule:"联系客户",
                        state:"进行中",
                        color:"#2b85e4",
                        ID:"取货员 ID1234",
                        elapsed_time:"5mins"
                    },
                    {
                        time:"2017-10-01 14:05",
                        schedule:"取货员出发",
                        color:"#19be6b",
                        state:"成功",
                        ID:"取货员 ID1234",
                        elapsed_time:"1h"
                    },
                    {
                        time:"2017-10-01 13:05",
                        schedule:"取货员接单",
                        state:"成功",
                        color:"#19be6b",
                        ID:"取货员 ID1234",
                        elapsed_time:"5mins"
                    },
                    {
                        time:"2017-10-01 13:00",
                        schedule:"申请审批通过",
                        state:"成功",
                        color:"#19be6b",
                        ID:"系统",
                        elapsed_time:"1h"
                    },
                    {
                        time:"2017-10-01 12:00",
                        schedule:"发起退货申请",
                        state:"成功",
                        color:"#19be6b",
                        ID:"用户",
                        elapsed_time:"5mins"
                    }

                ]
            }
        },
    }
</script>

<style scoped>
    .sales-return{
        padding: 0 25px 40px 25px;
        margin-top: 10px;
    }
    .sales-return .in{
        padding: 25px 0;

    }
    .sales-return .in .name{
        font-size: 16px;
        color:black;
        margin-bottom: 20px;

    }
    .sales-return .name2{
        font-size: 16px;
        color:black;
        margin-bottom: 20px;
    }
    .sales-return .state{
        padding-left:10px
    }
</style>