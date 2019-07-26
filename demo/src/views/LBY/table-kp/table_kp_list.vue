<template>
    <div>
        <div class="list">
            <div class="list_in">
                <Row>
                    <Col span="8">
                        <div class="but">
                            <button class="in">
                                <Icon type="md-add" size="20" style="display: inline-block;vertical-align: top"/>
                                <span style="font-size: 14px;;margin: 10px">新增</span>
                            </button>
                        </div>
                    </Col>
                    <Col span="8" v-for="(value,index) in uasers" :key="index">
                        <div class="but">
                            <Row>
                                <Col span="24">
                                    <div class="content">
                                        <div style="display: flex;padding: 20px;">
                                            <div class="imgs"><img :src=value.img alt=""></div>
                                            <div>
                                                <h4>{{value.name}}</h4>
                                                <p>{{value.p}}</p>
                                            </div>
                                        </div>
                                        <div class="operation">
                                            <span class="one">操作一</span>
                                            <span class="one">操作二</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
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
                uasers:[
                    {
                       img:'http://pt1mv9q6v.bkt.clouddn.com/zfb.png',
                       name:'Alipay' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/n.png',
                        name: 'Angular' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/C.png',
                        name:'Ant Design' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/fpng.png',
                        name: 'Ant Design Pro' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/opng.png',
                        name:'Bootstrap' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/p.png',
                        name:'React' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/spng.png',
                        name: 'Vue' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                    {
                        img:'http://pt1mv9q6v.bkt.clouddn.com/z.png',
                        name:'Webpack' ,
                        p:'在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .list {
        margin: -20px;
        padding: 5px 0;

    }

    .list .list_in {
        margin-top: 20px;
        padding: 0px 13px;
    }


    .list .list_in .but {
        padding: 0 12px;
        cursor: pointer;
        margin-bottom: 20px;
    }


    .list .list_in .but .content:hover{
        box-shadow: 1px 4px 5px 0px rgba(212,205,212,1);
        transition: 0.5s;
    }

    .list .list_in .but .in {
        border-style: dashed;
        border: 1px dashed rgba(0, 0, 0, .45);
        width: 100%;
        height: 188px;
        background: white;
        color: rgba(0, 0, 0, .45);
        cursor: pointer;
    }

    .list .list_in .but .in:hover {
        border: 1px dashed #2b85e4;
        color: #2b85e4;
    }

    .list .list_in .but .content {
        background: white;

    }

    .list .list_in .but .content .imgs {
        width: 90px;
        margin-right: 15px;
    }

    .list .list_in .but .content .imgs img {
        width: 100%;
        border-radius: 50%;
    }

    .list .list_in .but .content h4:hover{
        color:#2baee9;
    }

    .list .list_in .but .content p{
        font-size:14px;
        margin:10px 0 15px 0;
    }

    .list .list_in .but .operation{
        border-top:1px solid #e8e8e8;
    }
    .list .list_in .but .operation .one{
        text-align: center;
        display: inline-block;
        width: 50%;
        background:#fafafa;
        padding: 20px 0 10px 0;
    }

</style>