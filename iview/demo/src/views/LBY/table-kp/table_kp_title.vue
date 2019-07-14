<template>
    <div>
        <div>
            <Row>
                <Col span="24">
                    <div class="title_bar">
                         <div class="content">
                             <Row>
                             <Col span="20" >
                              <div class="nav_bar">
                                  <a href="#">首页</a>
                                  <span>/</span>
                                  <a href="#">列表项</a>
                                  <span>/</span>
                                  <a href="#">卡片列表</a>
                                 <h3>卡片列表</h3>
                              </div>
                             <div class="p">段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，
                                 无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。
                             </div>
                             <div class="ico">
                                 <span ><Icon type="ios-navigate-outline" size="28" color="#1890FF"/><span class="i">快速结束</span></span>
                                 <span><Icon type="ios-information-circle-outline" size="28" color="#1890FF" /><span class="i">产品简介</span></span>
                                 <span><Icon type="ios-compass-outline" size="28" color="#1890FF"/><span class="i">卡片列表</span></span>
                             </div>
                             </Col>
                             <Col span="4">
                             <div class="title_imgs">
                                 <img src="http://pt1mv9q6v.bkt.clouddn.com/22.png" alt="">
                             </div>
                             </Col>
                             </Row>
                         </div>
                    </div>
                </Col>
            </Row>
            <table_kp_list/>
        </div>
    </div>
</template>

<script>
    import table_kp_list from "./table_kp_list"
    export default {
        components:{
            table_kp_list
        }
    }
</script>

<style scoped>
.title_bar{
    margin:-18px -20px 20px -20px;
    padding:20px 25px;
    background: white;
}

.title_bar .content{

}

.title_bar .content .nav_bar{
    font-size: 14px;
}
.title_bar .content .nav_bar a{
    color:rgba(0,0,0,.45);
}
.title_bar .content .nav_bar a:hover{
    color:#2b85e4;
}
.title_bar .content .nav_bar span{
    margin: 0 10px;
}
.title_bar .content .nav_bar h3{
    margin: 10px 0 10px 0;
    color:black;

}
.title_bar .content .p{
    font-size: 14px;
    color: rgba(0,0,0,.65);
    margin-bottom: 10px;
}
.title_bar .content .ico{
    font-size: 14px;
    color: #2b85e4;
}
.title_bar .content .ico span{
    margin-right: 20px;
    cursor: pointer;
}
.title_bar .content .ico  i{
    margin-right:10px;
}

.title_imgs{
        padding:40px 0 0 30px
    }
.title_imgs img{
    width:155px
}
</style>