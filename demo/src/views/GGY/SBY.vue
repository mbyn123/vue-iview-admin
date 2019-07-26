<template>
    <div>
        <Row>
            <Col span="24">
                <div class="cgy">
                    <div class="main">
                        <div class="imgs"><img src="http://pt1mv9q6v.bkt.clouddn.com/24.png" alt=""></div>
                        <div class="result">
                            <div><span>提交失败</span></div>
                            <p>
                                请核对并修改以下信息后，再重新提交。
                            </p>
                        </div>
                        <div class="project">
                                <div style="font-size:16px;color:black"><span>您提交的内容有如下错误：</span></div>
                                <div v-for="(value,index) in errors" :key="index">
                                    <span >
                                    <Icon class="is" type="ios-close-circle-outline" size="16" color="red" />
                                    <span class="ss">{{value.title1}}</span>
                                    <a href="#">{{value.title2}}</a>
                                    <Icon class="is" type="ios-arrow-forward" size="20" color="red"/>
                                    </span>
                                </div>

                        </div>
                        <div class="but">
                            <Button type="primary" class="one">返回修改</Button>

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
        background: white;
        padding: 55px;
    }

    .cgy .main  .project{
        background:#FAFAFA ;
        padding:25px 0 25px 40px
    }
    .cgy .main  .project div{
        margin-bottom: 15px;
    }
    .cgy .main  .project .ss{
        font-size:14px;
        margin: 0 10px;

    }

    .cgy .main  .project a{
        font-size:14px;

    }
    .cgy .main  .project .is{
        display: inline-block;
        vertical-align: top;
        margin-top: 2px;
    }
    .cgy .main .imgs{
        text-align: center;
        padding: 10px 0 25px 0;
        margin-top: 53px;
    }
    .cgy .main .result{
        text-align: center;
        margin-bottom: 25px;
    }

    .cgy .main .result span{
        font-size: 24px;
        color:black
    }

    .cgy .main .result p{
        font-size: 14px;
        color:rgba(0,0,0,.45);
    }

    .cgy .main .but{
        text-align: center;
        padding: 30px 0;
    }
    .cgy .main .but .one{
        margin:0 5px;
    }

</style>