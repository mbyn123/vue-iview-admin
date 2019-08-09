<template>
  <div>
    <Row>
      <Col span="24">
        <div class="title">
          <div class="top">
          <Breadcrumb>
              <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
              <BreadcrumbItem >表单页</BreadcrumbItem>
              <BreadcrumbItem>基础表单</BreadcrumbItem>
            </Breadcrumb>
            <div class="Based-from">基础表单</div>
            <div class="content">表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</div>
          </div>
        </div>
      </Col>
    </Row>
    <Register />
  </div>
</template>

<script>
import Register from "./Register";
export default {
  components: {
    Register
  }
};
</script>

<style scoped>
.top {
  background: #fff;
  padding: 20px 20px 30px 20px;
}

.title {
  margin:-19px -20px;
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

.top .Based-from {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin: 10px 0;
}
.top .content {
  font-size: 14px;
}
</style>
