<template>
  <div>
    <div class="cxtop">
      <div class="in">
        <Breadcrumb>
          <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
          <BreadcrumbItem >列表页</BreadcrumbItem>
          <BreadcrumbItem>查询表格</BreadcrumbItem>
        </Breadcrumb>
        <div class="cxtitle">
          <span>查询表格</span>
        </div>
      </div>
    </div>
    <div class="cxtable">
      <div class="in">
        <div class="inquire">
          <Form :label-width="72">
            <Row>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="规则名称：">
                    <Input type="text" placeholder="请输入" />
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="使用状态： ">
                    <Input type="text" placeholder="请选择" />
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="调用次数：" v-show="states">
                    <Input type="number" placeholder="请输入" />
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="更新日期：" v-show="states">
                    <DatePicker
                      type="date"
                      show-week-numbers
                      placeholder="Select date"
                      style="width: 100%"
                    ></DatePicker>
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="使用状态：" v-show="states">
                    <Select placeholder="请选择">
                      <Option value="beijing">关闭</Option>
                      <Option value="shanghai">运行中</Option>
                    </Select>
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="8" :xxl="8">
                <div class="item">
                  <FormItem label="使用状态：" v-show="states">
                    <Select placeholder="请选择">
                      <Option value="beijing">关闭</Option>
                      <Option value="shanghai">运行中</Option>
                    </Select>
                  </FormItem>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="20" :xxl="20" v-show="states">
                <div class="tm"></div>
              </Col>
              <Col :sm="24" :md="24" :lg="24" :xl="6" :xxl="4">
                <div class="but">
                  <Button type="primary">查询</Button>
                  <Button>重置</Button>
                  <span v-show="states" @click="sshow()">
                    收起
                    <Icon type="ios-arrow-up" color="#2b85e4" />
                  </span>
                  <span v-show="states2" @click="sshow2()">
                    展开
                    <Icon type="ios-arrow-down" color="#2b85e4" />
                  </span>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
    <Content />
  </div>
</template>

<script>
import Content from "./Content";
export default {
  data() {
    return {
      states: false,
      states2: true
    };
  },
  methods: {
    sshow() {
      this.states = false;
      this.states2 = true;
    },
    sshow2() {
      this.states = true;
      this.states2 = false;
    }
  },
  components: {
    Content
  }
};
</script>

<style scoped>
.cxtable {
  padding: 45px 5px 0 5px;
}
.cxtable .in {
  background: #fff;
}
.cxtable .in .inquire {
  padding: 25px;
}
.cxtable .in .inquire .item {
  padding-right: 50px;
}
.cxtable .in .inquire .tm {
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.cxtable .in .inquire .but button {
  margin: 0 5px;
}
.cxtable .in .inquire .but span {
  font-size: 14px;
  color: #2b85e4;
  cursor: pointer;
}
.cxtop {
  padding: 0 20px;
  margin: -18px -20px;
  background: #fff;
}
.cxtop .in {
  padding: 20px 0;
}

.cxtop .in .cxtitle {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  padding-top: 10px;
}
</style>