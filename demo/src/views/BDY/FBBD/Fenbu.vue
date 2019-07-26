<template>
  <Row>
    <col span="24" />
    <div class="fbfrom">
      <div class="in">
        <Row>
          <Col span="16" offset="6">
            <div >
             <div class="step"> 
                <Steps :current="current">
                  <Step title="填写转账信息"></Step>
                  <Step title="确认转账信息"></Step>
                  <Step title="完成"></Step>
                </Steps>
             </div>
             <div class="fill" v-if="show">
                <Form :label-width="80">
                <FormItem label="付款账户 :">
                  <Select v-model="model1" style="width:370px">
                    <Option
                      v-for="item in cityList"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>

                <FormItem label="收款账户 :" placeholder="test@example.com">
                  <Input v-model="value13"  type="text" style="width:370px">
                    <Select slot="prepend" v-model="select3" style="width: 80px" >
                      <Option value="zfb">支付宝</Option>
                      <Option  value="yh">银行账户</Option>
                    </Select>
                  </Input>
                </FormItem>

                <FormItem label="收款人姓名 :" label-for="user">
                  <Input v-model="user" element-id="user" type="text" style="width:370px"/>
                </FormItem>

                <FormItem label="转账金额 :" label-for=" sum">
                  <Input v-model="sum" element-id="sum" type="text" prefix="logo-yen" style="width:370px"/>
                </FormItem>
                <Button type="primary" @click="next" >下一步</Button>
              </Form>
              </div>
            </div>
             <Fenbu2 v-if="fill2" :next="next"/>
          </Col>
        </Row>
        <Row>
          <Col span="24" v-show="show">
            <div class="explain">
              <span>说明</span>
              <p>转账到支付宝账户</p>
              <p class="p1">
                如果需要，这里可以放一些关于产品的常见问题说明。如果需要，
                这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
              </p>
              <p>转账到银行卡</p>
              <p>
                如果需要，这里可以放一些关于产品的常见问题说明。如果需要，
                这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <col />
  </Row>
</template>
<script>
import Fenbu2 from "./Fenbu2"
export default {
  data() {
    return {
      show:true, 
      fill2:false,
      user: "Alex",
      sum:"50",
      current: 0,
      value13:'test@example.com',
      select3: "zfb",
      cityList: [
        {
          value: "ant-design@alipay.com",
          label: "ant-design@alipay.com"
        }
      ],
      model1: "ant-design@alipay.com"
    };
  },
  methods: {
    next() {
      if (this.current == 2) {
        this.current = 0;
      } else {
        this.current += 1;
      }

      this.show=false
      this.fill2=true
  }
  },
  components:{
      Fenbu2
  }
};
</script>

<style>
.fbfrom {
  margin-top: 43px;
}

.fbfrom .in {
  background: white;
  padding: 20px;

}

.fbfrom .in .step{
   
    margin-bottom: 30px
}

.fbfrom .in .fill{
  
    padding-left:100PX;
}

.fbfrom .explain {
  border-top: 1px solid #ccc;
  margin-top: 30px;
  padding: 20px 50px;
}

.fbfrom .explain span {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 10px;
}

.fbfrom .explain p {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 28px;
}

.fbfrom .explain .p1 {
  margin-bottom: 10px;
}
</style>
