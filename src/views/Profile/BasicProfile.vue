<template>
  <div>
    <div class="top-nav">
      <div class="in">
        <Breadcrumb>
          <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">详情页</BreadcrumbItem>
          <BreadcrumbItem>基础详情页</BreadcrumbItem>
        </Breadcrumb>
        <div class="titles">
          <span>基础详情页</span>
        </div>
      </div>
    </div>
    <div style="padding-top:40px">
      <div class="jc-main">
        <Refund />
        <SalesReturn />
      </div>
    </div>
  </div>
</template>

<script>
import Refund from "./Refund";
import SalesReturn from "./SalesReturn";
export default {
  components: {
    Refund,
    SalesReturn
  }
};
</script>

<style scoped>
.top-nav {
  background: #fff;
  margin: -18px -20px;
  padding: 15px 20px;
}

.top-nav .in .titles {
  font-size: 16px;
  color: #333;
  font-weight:bold;
  padding-top:10px
}
.jc-main {
  background: #fff;
}
</style>