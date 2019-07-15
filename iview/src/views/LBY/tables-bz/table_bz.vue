<template>
<div>
    <div class="bztop">
        <div class="in">
            <div class="nav">
                <a href="#">首页</a><span>/</span><a href="#">列表项</a><span>/</span><a href="#">标准列表</a>
            </div>
            <div class="bztitle">
                <span>标准列表</span>
            </div>
        </div>
    </div>
    <div class="bzbar">
        <div class="in">
            <Row>
                <Col span="8">
                    <div class="bzcard ">
                        <div class="bzt">我的待办</div>
                        <div class="bzr">8个任务</div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="bzcard border">
                        <div class="bzt">本周任务平均处理时间</div>
                        <div class="bzr">32分钟</div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="bzcard">
                        <div class="bzt">本周完成任务数</div>
                        <div class="bzr">24个任务</div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    <table_list/>
</div>
</template>

<script>
    import table_list from "./table_list"
    export default {
     components:{
         table_list
     }
    }
</script>

<style scoped>
 .border{
     border-left: 1px solid #e8e8e8;
     border-right: 1px solid #e8e8e8
 }
    .bzbar{
        margin-top: 45px;
        padding:0 5px;
    }
    .bzbar .in{
        border:1px solid green;
        background: white;
        padding: 25px 0;
    }
    .bzbar .in .bzcard{
        text-align: center;
    }
    .bzbar .in .bzcard .bzt{
        font-size: 14px;
        color:rgba(0,0,0,.45);
        margin-bottom: 5px;
    }
    .bzbar .in .bzcard .bzr{
        font-size: 22px;
        color:rgba(0,0,0,.85)
    }
    .bztop{
        padding:0 20px;
        margin:-18px -20px;
        background: white;
    }
    .bztop .in{
        padding:20px 0;
    }
    .bztop .in .nav {
        margin-bottom: 10px;
    }
    .bztop .in .nav a{
        color:rgba(0,0,0,.45);
        font-size: 14px;
    }
    .bztop .in .nav a:hover{
        color: #2b85e4;
    }
    .bztop .in .nav span{
        margin: 0 10px;
        font-size: 14px;
    }
    .bztop .in .bztitle{
        font-size:16px;
        color:black;
        font-weight: 600;
    }
</style>