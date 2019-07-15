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
        <div class="jc-main">
            <JCXQ_list/>
          <JCXQ_item/>
        </div>
    </div>
</template>

<script>
    import JCXQ_list from "./JCXQ_list"
    import JCXQ_item from "./JCXQ_item"
    export default {
        components:{
            JCXQ_list,
            JCXQ_item
        }
    }
</script>

<style scoped>
.top-nav{
    background: white;
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
    color: black;
    font-weight:900
}
.jc-main{
    margin-top: 40px;
    background: white;
}
</style>