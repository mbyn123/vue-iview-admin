<template>
    <div>
        <div class="table-wz" >
            <div class="in">
            <div class="nav">
                <a href="#">首页</a><span>/</span><a href="#">列表页</a><span>/</span>
                <a href="#">搜索列表</a><span>/</span><a href="#">搜索列表(文章)</a>
            </div>
                <div class="tit">
                    <span>搜索列表(文章)</span>
                </div>
                <Row>
                    <Col span="8" offset="8">
                        <div class="search">
                            <Input search enter-button="搜索" placeholder="请输入" size="large" />
                        </div>
                    </Col>
                </Row>

            </div>
            <div class="tabs">
                <Tabs value="4-1"   >
                    <TabPane label="文章" name="4-1" >
                         <table_wz_list/>
                    </TabPane>
                    <TabPane label="项目" name="4-2">
                        <table_xm_list/>
                    </TabPane>
                    <TabPane label="应用" name="4-3">
                        <table_yy_list/>
                    </TabPane>
                </Tabs>

            </div>
        </div>

    </div>
</template>

<script>
    import table_wz_list from './table_wz_list'
    import table_xm_list from './table_xm_list'
    import table_yy_list from './table_yy_list'

    export default {
    components:{
        table_wz_list,
        table_xm_list,
        table_yy_list,

    }

    }
</script>

<style scoped>
    .table-wz{
        margin:-18px -20px 0 -20px;
        background:white;
    }
    .table-wz .in{
        padding:20px;

    }

    .table-wz .nav a{
        font-size: 14px;
        color: rgba(0,0,0,.45);
        transition:color 0.3s;
    }
    .table-wz .nav a:hover{
        color: #2d8cf0;
    }
    .table-wz .nav span{
        margin: 0 10px;
        font-size: 14px;
    }
    .table-wz .tit{
        font-size:16px;
        color: rgba(0,0,0,.85);
        font-weight: 700;
        margin: 15px 0;
    }


</style>