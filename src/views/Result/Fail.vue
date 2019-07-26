<template>
    <div>
        <Row>
            <Col span="24">
                <div class="cgy">
                    <div class="main">
                        <div class="imgs"><img src="http://pt1mv9q6v.bkt.clouddn.com/24.png" alt=""></div>
                        <div class="result">
                            <div><span class="remind">提交失败</span></div>
                            <p>
                                请核对并修改以下信息后，再重新提交。
                            </p>
                        </div>
                        <div class="project">
                                <div style="font-size:16px;color:#333"><span>您提交的内容有如下错误：</span></div>
                                <div v-for="value in errors" :key="value.id">
                                    <span >
                                    <Icon class="icon" type="ios-close-circle-outline" size="16" color="#ed4014" />
                                    <span class="content">{{value.title1}}</span>
                                    <a href="#">{{value.title2}}</a>
                                    <Icon class="icon" type="ios-arrow-forward" size="20" color="#ed4014"/>
                                    </span>
                                </div>

                        </div>
                        <div class="but">
                            <Button type="primary" class="modifier">返回修改</Button>

                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                errors:[
                    {
                        title1:"您的账户已被冻结",
                        title2:"立即解冻"
                    },
                    {
                        title1:"您的账户还不具备申请资格",
                        title2:"立即升级"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .cgy{
        padding: 5px;
    }
    .cgy .main{
        background: #fff;
        padding: 55px;
    }

    .cgy .main  .project{
        background:#FAFAFA ;
        padding:25px 0 25px 40px
    }
    .cgy .main  .project div{
        margin-bottom: 15px;
    }
    .cgy .main  .project .content{
        font-size:14px;
        margin: 0 10px;
    }
    .cgy .main  .project a{
        font-size:14px;
    }
    .cgy .main  .project .icon{
        display: inline-block;
        vertical-align: top;
    }
    .cgy .main .imgs{
        text-align: center;
        padding: 63px 0 25px 0;
         
    }
    .cgy .main .result{
        text-align: center;
        margin-bottom: 25px;
    }

    .cgy .main .result .remind{
        font-size: 24px;
        color:#333
    }

    .cgy .main .result p{
        font-size: 14px;
        color:rgba(0,0,0,.45);
    }

    .cgy .main .but{
        text-align: center;
        padding: 30px 0;
    }
    .cgy .main .but .modifier{
        margin:0 5px;
    }

</style>