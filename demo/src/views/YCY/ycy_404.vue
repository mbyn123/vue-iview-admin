<template>
    <div>
        <div class="start">
            <div class="in">
                <div class="imgs"><img src="http://pt1mv9q6v.bkt.clouddn.com/404.png" alt=""></div>
                <div class="p1">404</div>
                <div class="p2">抱歉，你无权访问该页面。</div>
                <div class="but">
                    <Button type="primary">返回首页</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .start{

        min-height:100vh;
        padding:50px;
        margin:-18px -20px;
        background: rgb(240,242,245);
    }

    .start .in .imgs{

        text-align: center;
        padding: 20px 0 6px 0 ;
    }

    .start .in .p1{
        font-size:24px ;
        color:black;
        text-align:center;

    }

    .start .in .p2{
        font-size:14px ;
        color:rgba(0,0,0,.45);
        text-align:center;
        margin-bottom: 40px;
    }
    .start .in .but{
        text-align: center;
    }
</style>