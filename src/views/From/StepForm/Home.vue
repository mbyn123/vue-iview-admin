<template>
  <div>
    <Row>
      <Col span="24">
        <div class="title">
          <div class="top">
            <div class="link">
              <a href="#">首页</a>
              <span class="i">/</span>
              <a href="#">表单页</a>
              <span class="i">/</span>
              <a href="#">分布表单</a>
            </div>
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

<style>
.top {
  background: #fff;

  padding: 20px 20px 30px 20px;
}

.title {
  margin: -20px;
}

.top .link a {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.top .link a:hover {
  color: #2d8cf0;
}

.top .link .i {
  font-size: 14px;
  margin: 0 10px;
  color: rgba(0, 0, 0, 0.45);
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
