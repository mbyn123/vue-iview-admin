<template>
  <div>
    <div class="safety">
      <div class="in">
        <div class="titless">账号绑定</div>
        <div>
          <Row>
            <Col span="24" v-for="value in account" :key="value.id">
              <div class="item">
                <div class="content">
                  <span>
                    <img :src="value.img" alt />
                  </span>
                  <div class="wenzi">
                    <div style="margin-bottom: 4px">{{value.title}}</div>
                    <div>{{value.state}}</div>
                  </div>
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
      account: [
        {
          img: "http://ptt5and7y.bkt.clouddn.com/30.png",
          title: "绑定淘宝",
          state: "当前未绑定淘宝账号",
          redact: "绑定"
        },
        {
          img: "http://ptt5and7y.bkt.clouddn.com/31.png",
          title: "绑定支付宝",
          state: "当前未绑定支付宝账号",
          redact: "绑定"
        },
        {
          img: "http://ptt5and7y.bkt.clouddn.com/32.png",
          title: "绑定钉钉",
          state: "当前未绑定账号",
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
.safety .in {
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
.safety .in .item .content img {
  width: 48px;
  height: 52px;
}
.safety .in .item .content .wenzi {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
.safety .in .item .modifier {
  color: #2b85e4;
  cursor: pointer;
}
</style>