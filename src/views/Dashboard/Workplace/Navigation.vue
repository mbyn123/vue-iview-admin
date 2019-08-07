<template>
  <div>
    <div class="dh">
      <div class="in">
        <div class="top">
          <span>
            快速开始
            <span class="ico">/</span> 便捷导航
          </span>
        </div>
        <div class="operating">
          <Row>
            <Col span="6" v-for="item in operation" :key="item.id">
              <a href="#">{{item}}</a>
            </Col>
            <Col span="6">
              <Button type="primary" size="small" ghost>
                <Icon type="md-add" size="20" />
                <span style="font-size:14px">添加</span>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>

    <Exponent />
    <Team />
  </div>
</template>

<script>
import Exponent from "./Exponent";
import Team from "./Team";
export default {
  data() {
    return {
      operation: ["操作一", "操作二", "操作三", "操作四", "操作五", "操作六"]
    };
  },
  components: {
    Exponent,
    Team
  }
};
</script>

<style scoped>
.dh {
  padding: 40px 12px 12px 12px;
}

.dh .in {
  background: #fff;
}
.dh .in .top {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: #333;
}
.dh .in .top .ico {
  margin: 0 5px;
}

.dh .in .operating {
  padding: 20px 0 8px 24px;
}

.dh .in .operating a {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  margin-bottom: 13px;
  display: inline-block;
}

.dh .in .operating a:hover {
  color: #2d8cf0;
}
</style>

