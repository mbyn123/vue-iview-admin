<template>
  <div>
    <div class="safety">
      <div class="in">
        <div class="titless">安全设置</div>
        <div>
          <Row>
            <Col span="24" v-for="value in configuration" :key="value.id">
              <div class="item">
                <div>
                  <div style="margin-bottom: 4px">{{value.password}}</div>
                  <div>{{value.intensity}}</div>
                </div>
                <div class="modifier">{{value.redact}}</div>
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
      configuration: [
        {
          password: "账户密码",
          intensity: "当前密码强度：：强",
          redact: "修改"
        },
        {
          password: "密保手机",
          intensity: "已绑定手机：：138****8293",
          redact: "修改"
        },
        {
          password: "密保问题",
          intensity: "未设置密保问题，密保问题可有效保护账户安全",
          redact: "设置"
        },
        {
          password: "备用邮箱",
          intensity: "已绑定邮箱：：ant***sign.com",
          redact: "修改"
        },
        {
          password: "MFA 设备",
          intensity: "未绑定 MFA 设备，绑定后，可以进行二次确认",
          redact: "绑定"
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
.safety .in .item .modifier {
  color: #2b85e4;
  cursor: pointer;
}
</style>