<template>
    <div>
        <div class="top-nav">
            <div class="in">
                <div class="links">
                    <span class="two">首页</span>
                    <span class="one">/</span>
                    <span class="two">详情页</span>
                    <span class="one">/</span>
                    <span class="two">基础详情页</span>
                </div>
                <div class="titles"><span>基础详情页</span></div>
            </div>
        </div>
        <div style="padding-top:40px">
        <div class="jc-main">
            <Refund/>
          <SalesReturn/>
        </div>
        </div>
    </div>
</template>

<script>
    import Refund from "./Refund"
    import SalesReturn from "./SalesReturn"
    export default {
        components:{
            Refund,
            SalesReturn
        }
    }
</script>

<style scoped>
.top-nav{
    background: #fff;
    margin:-18px -20px ;
    padding: 15px 20px
}

.top-nav .in{

}
.top-nav .in .links{
    font-size:14px;
    color:rgba(0,0,0,.45);
    margin-bottom: 10px;
}
.top-nav .in .links .one{
    margin: 0 10px;
}
.top-nav .in .links .two:hover{
    color:#2b85e4;
    cursor: pointer;
}
.top-nav .in .titles{
    font-size: 16px;
    color: #333;
    font-weight:900
}
.jc-main{
    background: #fff;
}
</style>