<template>
    <div>
        <Row>
            <Col span="24">
                <div class="cgy">
                    <div class="main">
                          <div class="imgs"><img src="http://pt1mv9q6v.bkt.clouddn.com/23.png" alt=""></div>
                          <div class="result">
                              <div><span>提交成功</span></div>
                              <p>提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message
                                  全局提示反馈即可。 本文字区域可以展示简单的补充说明
                                  ，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
                              </p>

                          </div>
                        <div class="project">
                            <div><p>项目名称</p></div>
                            <Row>
                                <div style="font-size:14px;margin-bottom:40px ">
                                    <Col span="8"> <span>项目 ID: 23421</span></Col>
                                    <Col span="8"> <span>负责人:曲丽丽</span></Col>
                                    <Col span="8"><span>生效时间: 2016-12-12 ~ 2017-12-12</span></Col>
                                </div>
                            </Row>
                            <div >
                            <Steps :current="1" size="small">
                                <Step  content="创建项目"></Step>
                                <Step  content="部门初审"></Step>
                                <Step  content="财务复核"></Step>
                                <Step  content="完成"></Step>
                            </Steps>
                                <Row>
                                    <div style="margin-top: 8px">
                                    <Col span="6">
                                        <div >
                                            <div><span>曲丽丽</span><Icon type="ios-at" color="#2d8cf0"/></div>
                                            <div>2016-12-12 12:32</div>
                                        </div>
                                    </Col>
                                    <Col span="6">
                                        <div >
                                            <span>周毛毛 <Icon type="ios-at" color="#2d8cf0"/><a href="">催一下</a></span>
                                        </div>
                                    </Col>
                                    </div>
                                </Row>

                            </div>
                        </div>
                        <div class="but">
                            <Button type="primary" class="one">返回列表</Button>
                            <Button class="one">查看项目</Button>
                            <Button class="one">打印</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {

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

.cgy .main  .project p{
    margin-bottom: 20px;
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
}


.cgy .main .imgs{
    text-align: center;
    padding: 10px 0 25px;
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