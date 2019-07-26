<template>
    <div>
        <div class="tk_main" v-for="(value,index) in orders" :key="index">
            <div class="in">
                <div class="name"><span>{{value.name}}</span></div>
                <Row>
                    <Col span="8">
                        <div><span class="one">{{value.title1}}</span><span class="two">{{value.title2}}</span></div>
                    </Col>
                    <Col span="8">
                        <div><span class="one">{{value.title3}}</span><span class="two">{{value.title4}}</span></div>
                    </Col>
                    <Col span="8">
                        <div><span class="one">{{value.title5}}</span><span class="two">{{value.title6}}</span></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <div><span class="one">{{value.title7}}</span><span class="two">{{value.title8}}</span></div>
                    </Col>
                    <Col span="8">
                        <div class="order"><span class="one">{{value.title9}}</span><span class="two">{{value.title10}}</span></div>
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
.tk_main{
    padding:0 25px
}
.tk_main .in{
    border-bottom:1px solid #ccc;
    padding:25px 0 35px 0
}
.tk_main .in .name{
    font-size: 16px;
    color:black;
    font-weight: 700;
    margin-bottom:20px;
}
.tk_main .in .one{
    font-size: 14px;
}
.tk_main .in .two{
    font-size: 14px;
    margin-left: 10px;
}
.tk_main .in .order{
    margin:13px 0 10px 0
}

</style>