<template>
  <div>
    <div class="bztop">
      <div class="in">
      <Breadcrumb>
          <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
          <BreadcrumbItem >列表项</BreadcrumbItem>
          <BreadcrumbItem>标准列表</BreadcrumbItem>
        </Breadcrumb>
        <div class="bztitle">
          <span>标准列表</span>
        </div>
      </div>
    </div>
    <div class="bzbar">
      <div class="in">
        <Row>
          <Col span="8">
            <div class="bzcard">
              <div class="bzt">我的待办</div>
              <div class="bzr">8个任务</div>
            </div>
          </Col>
          <Col span="8">
            <div class="bzcard border">
              <div class="bzt">本周任务平均处理时间</div>
              <div class="bzr">32分钟</div>
            </div>
          </Col>
          <Col span="8">
            <div class="bzcard">
              <div class="bzt">本周完成任务数</div>
              <div class="bzr">24个任务</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <Content />
  </div>
</template>

<script>
import Content from "./Content";
export default {
  components: {
    Content
  }
};
</script>

<style scoped>
.border {
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
}
.bzbar {
  padding: 45px 5px 0 5px;
}
.bzbar .in {
  background: #fff;
  padding: 25px 0;
}
.bzbar .in .bzcard {
  text-align: center;
}
.bzbar .in .bzcard .bzt {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 5px;
}
.bzbar .in .bzcard .bzr {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.85);
}
.bztop {
  padding: 0 20px;
  margin: -18px -20px;
  background: #fff;
}
.bztop .in {
  padding: 20px 0;
}

.bztop .in .bztitle {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  padding-top:10px
}
</style>