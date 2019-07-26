<template>
  <div>
    <div class="start">
      <div class="in">
        <div class="picture">
          <img src="http://pt1mv9q6v.bkt.clouddn.com/500.png" alt />
        </div>
        <div class="num">500</div>
        <div class="hint">抱歉，服务器出错了。</div>
        <div class="but">
          <Button type="primary">返回首页</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.start {
  min-height: 100vh;
  padding: 50px;
  margin: -18px -20px;
  background: rgb(240, 242, 245);
}

.start .in .picture {
  text-align: center;
  padding: 20px 0 6px 0;
}

.start .in .num {
  font-size: 24px;
  color: #333;
  text-align: center;
}

.start .in .hint {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  margin-bottom: 40px;
}
.start .in .but {
  text-align: center;
}
</style>