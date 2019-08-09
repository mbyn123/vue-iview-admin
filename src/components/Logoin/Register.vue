<template>
  <div>
    <div class="login-all">
      <Row type="flex" justify="center">
        <Col span="24">
          <div class="inner">
            <div class="login-title">
              <div class="logo">
                <img src="../../assets/layout_images/logo.svg" alt />
                <a href="#">
                  <span class="title">vue-iview-admin</span>
                </a>
              </div>
            </div>

            <div class="logoin-register" v-show="registerstate">
              <div style="font-size:16px;padding:25px 0 20px">注册</div>
              <Form ref="registerCustom" :model="registerCustom" :rules="ruleCustom">
                <FormItem prop="mail">
                  <Input
                    placeholder="邮箱"
                    type="email"
                    v-model="registerCustom.mail"
                    size="large"
                    style="width: 100%"
                  />
                </FormItem>
                <FormItem prop="password">
                  <Input
                    type="password"
                    placeholder="至少六位密码，区分大小写"
                    v-model="registerCustom.password"
                    size="large"
                    style="width: 100%"
                  />
                </FormItem>
                <FormItem prop="passwordCheck">
                  <Input
                    placeholder="确认密码"
                    type="password"
                    v-model="registerCustom.passwordCheck"
                    size="large"
                    style="width: 100%"
                  />
                </FormItem>
                <FormItem prop="PhoneNumber">
                  <Input
                    size="large"
                    v-model="registerCustom.PhoneNumber"
                    type="text"
                    prop="PhoneNumber"
                  >
                    <Select
                      v-model="PhoneNumbermodel"
                      slot="prepend"
                      style="width: 80px"
                      prop="PhoneNumber"
                    >
                      <Option
                        v-for="item in PhoneNumberlist"
                        :value="item.value"
                        :key="item.value"
                      >{{ item.label }}</Option>
                    </Select>
                  </Input>
                </FormItem>
                <FormItem prop="verificationCode">
                  <Input
                    placeholder="验证码"
                    v-model="registerCustom.verificationCode"
                    size="large"
                    style="width:60%;margin-right:5px"
                  />
                  <Button
                    size="large"
                    style="width:38%"
                    v-model="registercodeMsg"
                    :disabled="registercodeDisabled"
                    @click="registergetCode()"
                  >{{registercodeMsg}}</Button>
                </FormItem>
                <div style="display:flex;justify-content: space-between;font-size:14px">
                  <Button
                    type="primary"
                    style="width:50%;font-size:14px"
                    :loading="loading"
                    @click="handeSubmit('registerCustom')"
                  >注册</Button>
                  <Router-link to="/LandingPage">
                    <div style="color:#2d8cf0;line-height:28px;cursor: pointer;">使用已有账号登陆</div>
                  </Router-link>
                </div>
              </Form>
            </div>

            <div style="padding-top:50px;text-align:center" v-show="accountstate">
              <div>
                <Icon type="ios-checkmark-circle" size="80" color="rgb(82, 196, 26)" />
              </div>
              <div style="font-size:32px;font-weight:bold;padding-top:10px">您的账户 :{{account}}注册成功!</div>
              <div
                style="font-size:16px;padding-top:20px"
              >激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。</div>
              <div style="padding-top:30px">
                <Button type="primary" style="font-size:16px;margin-right:10px">查看邮箱</Button>
                <Router-link to="/LandingPage">
                  <Button style="font-size:16px" @click="accounts()">返回首页</Button>
                </Router-link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval, clearTimeout, setTimeout } from "timers";
export default {
  data() {
    const validatepass = (rule, value, callback) => {
      const passreg = /^[A-Za-z0-9]{1,30}$/;
      if (value === "") {
        callback(new Error("请输入密码!"));
      } else if (value.length < 6) {
        callback(new Error("请输入至少6位密码!"));
      } else if (!passreg.test(value)) {
        callback(new Error("请输入字母或数字组成的密码!"));
      } else {
        if (this.registerCustom.passwordCheck !== "") {
          this.$refs.registerCustom.validateField("passwordCheck");
        }
        callback();
      }
    };
    const validatepassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"));
      } else if (value !== this.registerCustom.password) {
        callback(new Error("两次输入的密码不匹配!"));
      } else {
        callback();
      }
    };
    const validatemail = (rules, value, callback) => {
      const mailreg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (value === "") {
        callback(new Error("请输入邮箱地址！"));
      } else if (mailreg.test(value)) {
        callback();
      } else {
        callback(new Error("邮箱地址格式错误！"));
      }
    };
    const validatePhoneNumber = (rules, value, callback) => {
      const PhoneNumberreg = /^1[3456789]\d{9}$/;
      if (value === "") {
        callback(new Error("请输入手机号!"));
      } else if (!PhoneNumberreg.test(value)) {
        callback(new Error("手机号格式错误！"));
      } else callback();
    };
    const verificationCode = (rules, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码!"));
      } else {
        callback();
      }
    };
    return {
      registercodeMsg: "获取验证码",
      registercodeDisabled: false,
      registercountdown: 60,
      registertimer: null,
      loading: false,
      account: "",
      accountstate: false,
      registerstate: true,
      registerCustom: {
        mail: "",
        password: "",
        passwordCheck: "",
        PhoneNumber: "",
        verificationCode: ""
      },
      ruleCustom: {
        mail: [{ validator: validatemail, trigger: "blur" }],
        password: [{ validator: validatepass, trigger: "blur" }],
        passwordCheck: [{ validator: validatepassCheck, trigger: "blur" }],
        PhoneNumber: [{ validator: validatePhoneNumber, trigger: "blur" }],
        verificationCode: [{ validator: verificationCode, trigger: "blur" }]
      },
      PhoneNumberlist: [
        {
          value: "+86",
          label: "+86"
        },
        {
          value: "+87",
          label: "+87"
        }
      ],
      PhoneNumbermodel: ["+86"]
    };
  },

  methods: {
    accounts() {
      console.log("1111");
      this.accountstate = false;
      this.registerstate = true;
    },
    registergetCode() {
      if (!this.registertimer) {
        this.timer = setInterval(() => {
          if (this.registercountdown > 0 && this.registercountdown <= 60) {
            this.registercountdown--;
            if (this.registercountdown !== 0) {
              this.registercodeMsg = this.registercountdown + "秒";
              this.registercodeDisabled = true;
            } else {
              clearInterval(this.registertimer);
              this.registercodeMsg = "获取验证码";
              this.registercountdown = 60;
              this.registertimer = null;
              this.registercodeDisabled = false;
            }
          }
        }, 1000);
      }
    },
    handeSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;

          this.account = this.registerCustom.mail;
          let _this = this;
          setTimeout(function() {
            _this.loading = true;
            _this.$nextTick(() => {
              _this.loading = false;
              _this.accountstate = true;
              _this.registerstate = false;
              _this.$Message.success("注册成功");
            });
          }, 2000);
        } else {
        }
      });
    }
  }
};
</script>

<style >
.login-all {
  background-position: center 110px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #f0f2f5;
  background-image: url(../../assets/layout_images/loginbanner.svg);
}

.login-all .inner .logoin-register {
  padding: 25px 10px;
  width: 360px;
  margin: 0 auto;
}

.login-all .inner {
  height: 100vh;
}

.login-all .footer {
  padding-top: 20vh;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.login-all .footer a {
  color: rgba(0, 0, 0, 0.45);
}

.login-all .footer a:hover {
  color: rgba(0, 0, 0, 0.65);
}
.login-all .icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 0 7px;
  color: rgba(0, 0, 0, 0.45);
}

.login-title {
  padding-top: 70px;
}
.login-title .logo {
  text-align: center;
}
.login-title .logo img {
  height: 44px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.login-title .logo .title {
  vertical-align: middle;
  color: #333;
  font-weight: bold;
  font-size: 32px;
  margin-left: 5px;
}
.login-title .logo .subheading {
  padding-top: 10px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.45);
}
</style>

