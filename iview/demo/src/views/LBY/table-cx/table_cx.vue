<template>
    <div>
        <div class="cxtop">
            <div class="in">
                <div class="nav">
                    <a href="#">首页</a><span>/</span><a href="#">列表项</a><span>/</span><a href="#">查询表格</a>
                </div>
                <div class="cxtitle">
                    <span>查询表格</span>
                </div>
            </div>
        </div>
        <div class="cxtable">
            <div class="in">
                <div class="inquire ">
                    <Form :label-width="72">
                    <Row>
                        <Col span="8">
                            <div class="item">
                                <FormItem label="规则名称：" >
                                    <Input type="text" placeholder="请输入" ></Input>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="8">
                            <div class="item">
                                <FormItem label="使用状态： " >
                                    <Input type="text" placeholder="请选择"></Input>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="8" v->
                            <div class="item2">
                                <FormItem label="调用次数：" v-show="states">
                                    <Input  type="number"></Input>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="8">
                            <div class="item">
                                <FormItem label="更新日期：" v-show="states">
                                    <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 300px"></DatePicker>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="8">
                            <div class="item">
                                <FormItem label="使用状态：" v-show="states">
                                <Select  placeholder="请选择" >
                                <Option value="beijing">关闭</Option>
                                <Option value="shanghai">运行中</Option>
                                </Select>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="8">
                            <div class="item2">
                                <FormItem label="使用状态：" v-show="states">
                                    <Select  placeholder="请选择" >
                                        <Option value="beijing">关闭</Option>
                                        <Option value="shanghai">运行中</Option>
                                    </Select>
                                </FormItem>
                            </div>
                        </Col>
                        <Col span="21"  v-show="states">
                            <div class="tm"></div>
                        </Col>
                        <Col span="3">
                        <div class="but">
                        <Button type="primary">查询</Button>
                        <Button>重置</Button>
                            <span v-show="states" @click="sshow()">收起<Icon type="ios-arrow-up"  color="#2b85e4"/></span>
                            <span v-show="states2" @click="sshow2()">展开<Icon type="ios-arrow-down"  color="#2b85e4"/></span>
                        </div>
                        </Col>
                    </Row>
                    </Form>
                </div>
            </div>
        </div>
    <table_cx_list/>
    </div>
</template>

<script>
    import table_cx_list from "./table_cx_list"
    export default {
        data(){
          return{
              states:false,
              states2:true
          }
        },
        methods:{
            sshow(){
                this.states=false
                this.states2=true
            },
            sshow2(){
                this.states=true
                this.states2=false
            }
        },
        components:{
            table_cx_list,
        }
    }
</script>

<style scoped>
 .cxtable{
     margin-top: 45px;
     padding:0 5px

 }
 .cxtable .in{
     background: white;
 }
 .cxtable .in .inquire{
     padding: 25px
 }
 .cxtable .in .inquire .item{
  padding-right:50px ;

 }
 .cxtable .in .inquire .tm{
 border:1px solid rgba(255,255,255,0.5);
 }

 .cxtable .in .inquire .but{
 }
 .cxtable .in .inquire .but Button{
     margin:0 5px;
 }
 .cxtable .in .inquire .but span{
     font-size: 14px ;
     color:#2b85e4;
     cursor: pointer;
 }
.cxtop{

    padding:0 20px;
    margin:-18px -20px;
    background: white;
}
.cxtop .in{
    padding:20px 0;
}
.cxtop .in .nav {
    margin-bottom: 10px;
}
.cxtop .in .nav a{
    color:rgba(0,0,0,.45);
    font-size: 14px;
}
.cxtop .in .nav a:hover{
    color: #2b85e4;
}
.cxtop .in .nav span{
    margin: 0 10px;
    font-size: 14px;
}
.cxtop .in .cxtitle{
    font-size:16px;
    color:black;
    font-weight: 600;
}
</style>