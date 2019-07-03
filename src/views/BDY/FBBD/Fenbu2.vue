<template>
  <div>
      <Row v-show="fill2">
          <Col span="12" offset="2">
           <Form  :label-width="80">
            <div class="affirm">
                 <div class="warn" v-if="fill3">
                      <Icon type="ios-alert-outline" size="20" color="blue"/>
                      <div>   确认转账后，资金将直接打入对方账户，无法退回。</div>
                     <Icon type="ios-close" size="22" color="blue" style="cursor:pointer" @click="fill3=false"/>
                 </div>
                  <div style="border-bottom:1px solid #ccc;padding:20px 0">
                 <Row v-for="(user ,index) in message" :key="index" style="margin-bottom:20px">
                     <Col span="5" >
                        <div class="account ">
                             <label title="付款账户 :">{{user.title}}</label>
                        </div>
                     </Col>
                     <Col  span="19" >
                        <div class="number">
                        <span>{{user.name}}</span>
                         </div>
                     </Col>
                 </Row>
    
                  <Row  v-for="(user ,index) in money" :key="index">
                     <Col span="5" >
                        <div class="account ">
                             <label title="付款账户 :">付款账户 :</label>
                        </div>
                     </Col>
                     <Col  span="19" >
                        <div class="number">
                        <span style="font-size:20px;line-height: 22px;">{{user}}</span>
                         </div>
                     </Col>
                 </Row>
                 </div>
                 <div style="padding:20px 0 0 38px">  
               <FormItem label="支付密码 :" label-for="passwords">
               <Input v-model="value"  type="password" element-id="passwords" style="width:300px"/>
              </FormItem>  
                </div>
                 <div style="padding:5px 0 20px 115px"> 
                <Button type="primary" style="margin-right:5px" @click="next">提交</Button>
                 <Button>上一步</Button>
                 
                 </div>

            </div>
       
              </Form>
          </Col>
      </Row>
  </div>
</template>

<script>
export default {
   props:['current'],
  data() {
    return {
      value:"45646",
      fill2:true,
      fill3:true,
      message:[
          {
              title:"付款账户:",
              name:"ant-design@alipay.com",
             
          },
           {
              title:"收款账户:",
              name:"test@example.com",
             
          },
           {
              title:"收款人姓名:",
              name:"Alex",
             
          },  
      ],
      money:["500"]
    };
  },
    methods: {
    next() {
      this.current=this.current
      if (this.current == 2) {
        this.current = 0;
      } else {
        this.current += 1;
      }

     this.fill2=false
  }
  },
};
</script>

<style>
.affirm{
  
    
} 

.affirm .warn{
    width:500px;
    height: 40px;
    border:1px solid #5cadff;
    background: rgb(230, 247, 255);
    padding:8px;
    border-radius: 5px;
    margin: 0 auto;
}

.affirm .warn div{
     vertical-align: middle;
     display: inline-block;
     width:420px;
     margin-right:15px;
     margin-left:5px; 
    color: rgba(0,0,0,.65);
    font-size: 14px;
}
.affirm .account{
font-size:14px;   
 text-align: right;
color:black
}
.affirm .number{
margin-left: 5px;
}
</style>

