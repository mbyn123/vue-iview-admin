<template>
    <div>
        <div class="refund-main" v-for="value in orders" :key="value.id">
            <div class="in">
                <div class="name"><span>{{value.name}}</span></div>
                <Row >
                    <Col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                        <div class="refund-main-messages" ><span class="item">{{value.title1}}</span><span class="items">{{value.title2}}</span></div>
                    </Col>
                    <Col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                        <div class="refund-main-messages"><span class="item">{{value.title3}}</span><span class="items">{{value.title4}}</span></div>
                    </Col>
                    <Col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                        <div class="refund-main-messages"><span class="item">{{value.title5}}</span><span class="items">{{value.title6}}</span></div>
                    </Col>
                </Row>
                <Row>
                    <Col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                        <div  class="refund-main-messages"><span class="item">{{value.title7}}</span><span class="items">{{value.title8}}</span></div>
                    </Col>
                    <Col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :xxl="8">
                        <div class="refund-main-messages"><span class="item">{{value.title9}}</span><span class="items">{{value.title10}}</span></div>
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
               orders:[
                   {
                       name:"退款申请",
                       title1:"取货单号:",
                       title2:'1000000000',
                       title3:"状态:",
                       title4:'已取货',
                       title5:"销售单号",
                       title6:'1234123421',
                       title7:"子订单:",
                       title8:'3214321432',
                   },
                   {
                       name:"用户信息",
                       title1:"用户姓名:",
                       title2:'付小小',
                       title3:"联系电话:",
                       title4:'18100000000',
                       title5:"常用快递",
                       title6:'菜鸟仓储',
                       title7:"取货地址:",
                       title8:'浙江省杭州市西湖区万塘路18号',
                       title9:'备注:',
                       title10:'无',

                   }
               ]
           }
       }
    }
</script>

<style scoped>
.refund-main{
    padding:0 25px
}
.refund-main .in{
    border-bottom:1px solid #ccc;
    padding:25px 0 35px 0
}
.refund-main .in .name{
    font-size: 16px;
    color:#333;
    font-weight: 700;
    margin-bottom:20px;
}

.refund-main-messages{
    padding:10px
}

.refund-main .in .item{
    font-size: 14px;
    font-weight:bold
}
.refund-main .in .items{
    font-size: 14px;
    margin-left: 10px;
}


</style>