<template>
  <div>
    <div class="login-all">
      <Row type="flex" justify="center">
        <Col :xs="24" :sm="12" :md="10" :lg="8" :xl="6" :xxl="5">
          <div class="inner">
            <div class="login-title">
              <div class="logo">
                <a href="#">
                  <img src="../../assets/layout_images/logo.svg" alt />
                  <span class="title">vue-iview-admin</span>
                </a>
              </div>
            </div>

            <div class="logoin-form">
              <Tabs :animated="false" @on-click="tabsname" value="账户密码登陆">
                <TabPane label="账户密码登陆" name="账户密码登陆">
                  <Form ref="logoinCustom" :model="logoinCustom" :rules="rulesCustom">
                    <div class="promptbox" v-show="accounterror">
                      <Icon type="md-close-circle" color="red" style="margin-right:5px" />账户或密码错误
                    </div>
                    <FormItem prop="userName">
                      <Input
                        placeholder="用户名: admin or user"
                        v-model.trim="logoinCustom.userName"
                        size="large"
                        style="width: 100%"
                      >
                        <Icon type="md-person" slot="prefix" />
                      </Input>
                    </FormItem>
                    <FormItem prop="passwd">
                      <Input
                        type="password"
                        placeholder="密码: ant.design"
                        v-model.trim="logoinCustom.passwd"
                        size="large"
                        style="width: 100%"
                      >
                        <Icon type="md-unlock" slot="prefix" />
                      </Input>
                    </FormItem>
                  </Form>
                </TabPane>
                <TabPane label="手机号登陆" name="手机号登陆">
                  <Form ref="phoneCustom" :model="phoneCustom" :rules="phonerulesCustom">
                    <div class="promptbox" v-show="verificationCodeerror">
                      <Icon type="md-close-circle" color="red" style="margin-right:5px" />验证码错误
                    </div>
                    <FormItem prop="phoneNumber">
                      <Input
                        placeholder="手机号"
                        v-model="phoneCustom.phoneNumber"
                        size="large"
                        style="width: 100%"
                      >
                        <Icon type="ios-phone-portrait" slot="prefix" />
                      </Input>
                    </FormItem>
                    <FormItem prop="verificationCode">
                      <Input
                        placeholder="验证码"
                        size="large"
                        v-model="phoneCustom.verificationCode"
                        style="width:60%;margin-right:5px"
                      >
                        <Icon type="md-mail" slot="prefix" />
                      </Input>
                      <Button
                        size="large"
                        class="button"
                        v-model="codeMsg"
                        :disabled="codeDisabled"
                        @click="getCode(nodesc)"
                      >{{codeMsg}}</Button>
                    </FormItem>
                  </Form>
                </TabPane>
              </Tabs>
              <div>
                <div style="display:flex;justify-content: space-between">
                  <Checkbox>
                    <span style="padding-left:5px;font-size:14px;color:rgba(0, 0, 0, 0.45)">自动登陆</span>
                  </Checkbox>
                  <a href="#" style="font-size:14px" @click="errssors(false)">忘记密码</a>
                </div>
                <div style="padding:20px 0">
                  <Router-link to="/home">
                    <Button
                      type="primary"
                      :loading="loading"
                      long
                      style="font-size:16px"
                      @click="tabname==='账户密码登陆'?handeSubmit('logoinCustom'):phonehandeSubmit('phoneCustom')"
                    >登陆</Button>
                  </Router-link>
                </div>
                <div style="display:flex;justify-content: space-between;padding:20px 0">
                  <div>
                    <span style="font-size:14px;margin-right:5px;color:rgba(0, 0, 0, 0.45)">其他登陆方式</span>

                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-taobao" />
                    </svg>

                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-weixin" />
                    </svg>

                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-zhifubao" />
                    </svg>
                  </div>
                  <div>
                    <Router-link to="/Register">
                      <div style="font-size:14px;cursor: pointer;">注册账户</div>
                    </Router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="footer">
              <div>
                <a href="#" title="Ant Design Pro">Ant Design Pro</a>
                <a href="#" title="github" style="margin:0 30px">
                  <Icon type="logo-github" />
                </a>
                <a href="#" title="Ant Design">Ant Design</a>
              </div>
              <div style="padding:10px 0">Copyrigh &copy; 2019 蚂蚁金服体验技术部出品</div>
            </div>-->
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    const validateuserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名!"));
      } else {
        callback();
      }
    };
    const validatepasswd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
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
      accounterror: false,
      verificationCodeerror: false,
      logoin: false,
      register: true,
      loading: false,
      codeMsg: "获取验证码",
      codeDisabled: false,
      countdown: 60,
      timer: null,
      tabname: "账户密码登陆",
      logoinCustom: {
        userName: "admin",
        passwd: "123456"
      },
      phoneCustom: {
        verificationCode: "",
        phoneNumber: ""
      },
      rulesCustom: {
        userName: [{ validator: validateuserName, trigger: "blur" }],
        passwd: [{ validator: validatepasswd, trigger: "blur" }]
      },
      phonerulesCustom: {
        phoneNumber: [{ validator: validatePhoneNumber, trigger: "blur" }],
        verificationCode: [{ validator: verificationCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    tabsname(s) {
      this.tabname = s;
    },
    getCode(nodesc) {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--;
            if (this.countdown !== 0) {
              this.codeMsg = this.countdown + "秒";
              this.codeDisabled = true;
            } else {
              clearInterval(this.timer);
              this.codeMsg = "获取验证码";
              this.countdown = 60;
              this.timer = null;
              this.codeDisabled = false;
            }
          }
        }, 1000);
      }
      this.$Notice.error({
        title:
          "请求错误 404: https://ant-design-pro.netlify.com/api/login/captcha?mobile=15537095641",
        desc: nodesc
          ? ""
          : "发出的请求针对的是不存在的记录，服务器没有进行操作。 ",
        duration: 3
      });
    },
    handeSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;
          let _this = this;
          setTimeout(function() {
            _this.loading = true;
            _this.$nextTick(() => {
              _this.loading = false;
              // _this.accounterror = true;
            });
          }, 2000);
        } else {
        }
      });
    },
    phonehandeSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;
          let _this = this;
          setTimeout(function() {
            _this.loading = true;
            _this.$nextTick(() => {
              _this.loading = false;
              _this.verificationCodeerror = true;
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
  background-size: 100%;
  background-image: url(../../assets/layout_images/loginbanner.svg);
}
.login-all .inner .promptbox {
  border-radius: 5px;
  font-size: 14px;
  padding: 7px;
  margin-bottom: 20px;
}
.login-all .inner {
  height: 100vh;
}

.login-all .footer {
  width: 100%;
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

.logoin-form .icon:hover {
  color: #2d8cf0;
}

.logoin-form .button {
  width: 38%;
}

.logoin-form .ivu-tabs-bar {
  border-bottom: 1px solid transparent;
}
.logoin-form .ivu-tabs-nav {
  display: table;
  margin: 0 auto;
  float: none;
}

.logoin-form {
  padding: 45px 10px;
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
