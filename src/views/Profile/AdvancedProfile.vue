<template>
  <div>
    <div class="senior-details">
      <div class="in">
        <div style="padding:10px 0">
          <Breadcrumb>
            <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">详情页</BreadcrumbItem>
            <BreadcrumbItem>高级详情页</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Row v-for="value in details" :key="value.id">
          <Col span="24">
            <div class="name">
              <span>{{value.content}}</span>
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="8" :lg="10" :xl="10" :xxl="10">
            <div class="user">
              <div>{{value.content2}}</div>
              <div>{{value.content5}}</div>
              <div>{{value.content8}}</div>
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="8" :lg="10" :xl="10" :xxl="10">
            <div class="correlation">
              <div>{{value.content3}}</div>
              <div>
                {{value.content6}}
                <a href="#">{{value.content7}}</a>
              </div>
              <div>{{value.content9}}</div>
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="8" :lg="4" :xl="4" :xxl="4">
            <div class="states">
              <div class="state">{{value.content4}}</div>
              <div class="content">{{value.content10}}</div>
              <div></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="atabs">
      <Tabs style="margin:-30px 0 0 0">
        <TabPane label="详情"></TabPane>
        <TabPane label="规则" disabled></TabPane>
      </Tabs>
      <OrderInformation />
    </div>
  </div>
</template>

<script>
import OrderInformation from "./OrderInformation";
export default {
  data() {
    return {
      details: [
        {
          content: "单号：234231029431",
          content2: "创建人: 曲丽丽",
          content3: "订购产品: XX 服务",
          content4: "状态",
          content5: "创建时间: 2017-07-07",
          content6: "关联单据:",
          content7: "12421",
          content8: "生效日期: 2017-07-07 ~ 2017-08-08",
          content9: "备注: 请于两个工作日内确认",
          content10: "待审批"
        }
      ]
    };
  },
  components: {
    OrderInformation
  }
};
</script>

<style scoped>
.atabs {
  margin: -35px -20px;
  padding: 30px 20px;
 
}
.senior-details {
  margin: -18px -20px;
  padding: 20px 20px 25px 20px;
  background: #fff;
 
}

.senior-details .in .name {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-bottom: 13px;
}

.senior-details .in .user div {
  margin-bottom: 15px;
  font-size: 14px;
}
.senior-details .in .correlation {
  font-size: 14px;
}

.senior-details .in .correlation div {
  margin-bottom: 15px;
}

.senior-details .in .states div {
  margin-bottom: 15px;
}
.senior-details .in .states .state {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.senior-details .in .states .content {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
}
</style>