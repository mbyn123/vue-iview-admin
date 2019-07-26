<template>
  <div>
    <div class="safety">
      <div class="in">
        <div class="titless">新消息通知</div>
        <div>
          <Row>
            <Col span="24" v-for="value in informs" :key="value.id">
              <div class="item">
                <div>
                  <div style="margin-bottom: 4px">{{value.password}}</div>
                  <div>{{value.intensity}}</div>
                </div>
                <div>
                  <i-Switch>
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-Switch>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      informs: [
        {
          password: "账户密码",
          intensity: "其他用户的消息将以站内信的形式通知"
        },
        {
          password: "系统消息",
          intensity: "系统消息将以站内信的形式通知"
        },
        {
          password: "待办任务",
          intensity: "待办任务将以站内信的形式通知"
        }
      ]
    };
  }
};
</script>

<style scoped>
.safety {
  padding: 25px 30px 30px 30px;
}

.safety .in .titless {
  margin-bottom: 12px;
  font-size: 18px;
  color: #333;
}
.safety .in .item {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding: 15px 0;
}
</style>