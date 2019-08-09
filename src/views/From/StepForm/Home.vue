<template>
  <div>
    <Row>
      <Col span="24">
        <div class="title">
          <div class="top">
            <Breadcrumb>
              <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
              <BreadcrumbItem>表单页</BreadcrumbItem>
              <BreadcrumbItem>分步表单</BreadcrumbItem>
            </Breadcrumb>
            <div class="Distribution-from">分布表单</div>
            <div class="content">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>
          </div>
        </div>
      </Col>
    </Row>
    <StepStart />
  </div>
</template>

<script>
import StepStart from "./StepStart";
export default {
  components: {
    StepStart
  }
};
</script>

<style scoped>
.top {
  background: #fff;
  padding: 20px 20px 30px 20px;
 

}

.title {
  margin: -19px -20px 0 -20px;
  
}

.top .Distribution-from {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin: 10px 0;
}
.top .content {
  font-size: 14px;
}
</style>
