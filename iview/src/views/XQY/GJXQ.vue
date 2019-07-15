<template>
    <div >
      <div class="gj-top">
       <div class="in">
           <div class="links">
               <div style="padding-top:0px">
                   <span class="link">首页</span>
                   <span  class="one">/</span>
                   <span class="link">详情页</span>
                   <span class="one">/</span>
                   <span class="link">高级详情页</span>
               </div>
               <div>
                    <RadioGroup  type="button">
                        <Radio label="large">操作</Radio>
                        <Radio label="default">操作</Radio>
                        <Dropdown>
                            <Radio label="small"><Icon type="ios-more" /></Radio>
                            <DropdownMenu slot="list">
                                <DropdownItem>选项一</DropdownItem>
                                <DropdownItem>选项二</DropdownItem>
                                <DropdownItem>选项三</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    </RadioGroup>
                    <Button type="primary">主操作</Button>
                </div>
           </div>

           <Row v-for="(value,index) in details" :key="index">
               <Col span="24">
                   <div class="name"><span>{{value.content}}</span></div>
               </Col>
               <Col span="8">
                   <div class="user">
                       <div>{{value.content2}}</div>
                       <div>{{value.content5}}</div>
                       <div>{{value.content8}}</div>
                   </div>
               </Col>
               <Col span="8">
                   <div class="correlation">
                       <div>{{value.content3}}</div>
                       <div>{{value.content6}} <a href="#">{{value.content7}}</a> </div>
                       <div>{{value.content9}}</div>
                   </div>
               </Col>
               <Col span="8">
                   <div class="states" >
                       <div class="state">{{value.content4}}</div>
                       <div class="state2">{{value.content10}}</div>
                       <div></div>
                   </div>
               </Col>
           </Row>

       </div>
      </div>
        <div class="atabs" >
            <Tabs >
                <TabPane label="详情" > </TabPane>
                <TabPane label="规则" disabled ></TabPane>
            </Tabs>
            <GJXQ_list/>
        </div>
    </div>
</template>

<script>
    import GJXQ_list from "./GJXQ_list"
    export default {
       data(){
           return{
               details:[
                   {
                       content:"单号：234231029431",
                       content2:"创建人: 曲丽丽",
                       content3:"订购产品: XX 服务",
                       content4:"状态",
                       content5:"创建时间: 2017-07-07",
                       content6:"关联单据:",
                       content7:"12421",
                       content8:"生效日期: 2017-07-07 ~ 2017-08-08",
                       content9:"备注: 请于两个工作日内确认",
                       content10:"待审批"
                   },

               ]
           }
       },
        components:{
            GJXQ_list
        }
    }
</script>

<style scoped>
    .atabs{
        margin:-35px -20px;
      padding:0 20px
    }
.gj-top{
    margin: -18px -20px;
    padding:0 25px;
    background:#ffffff;
}
.gj-top .in{

}
.gj-top .in .links{
    font-size:14px;
    color:rgba(0,0,0,.45);
    display: flex;
    justify-content: space-between;
    padding-top:15px;

}
.gj-top .in .links .link:hover{
    color:#2b85e4;
    cursor: pointer;
}
.gj-top .in .links .one{
   margin: 10px;
}
.gj-top .in .name{
    font-size: 16px;
    color:black;
    font-weight: 600;
    margin-bottom:13px ;
}

.gj-top .in .user{
    margin-bottom:70px;
}
.gj-top .in .user div{
    margin-bottom: 15px;
    font-size: 14px;
}
.gj-top .in .correlation{
    padding-left:80px;
    font-size: 14px;
}

.gj-top .in .correlation div{
    margin-bottom: 15px;
}

.gj-top .in .states{
    text-align: right;
    padding-right:40px ;
}
.gj-top .in .states div{
    margin-bottom: 15px;
}
.gj-top .in .states .state{
    font-size: 14px;
   color:rgba(0,0,0,.45)
}
.gj-top .in .states .state2{
    font-size: 20px;
    color:rgba(0,0,0,.85);;

    margin-top: -20px;
}
</style>