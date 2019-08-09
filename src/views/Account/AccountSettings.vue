<template>
  <div>
    <div class="setting">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="基本设置">
          <div class="basic">
            <div class="in">
              <div class="names">基本设置</div>
              <Row></Row>
              <Row>
                <Col :xs="24" :sm="24" :md="12" :lg="24" :xl="10" :xxl="10">
                  <div style="padding-right:40px;font-size: 14px;color:#333 ">
                    <div>
                      <div style="font-size: 14px">头像</div>
                      <div>
                        <img src="../../assets/userlogo_images/users.png" alt style="width:144px" />
                      </div>
                      <div style="padding: 10px 0 0 20px">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                          <Button icon="ios-cloud-upload-outline">更换头像</Button>
                        </Upload>
                      </div>
                    </div>
                    <Form :rules="ruleValidate" :model="formValidate" ref="formValidate">
                      <div>邮箱</div>
                      <FormItem prop="email">
                        <Input type="email" v-model="formValidate.email" />
                      </FormItem>
                      <div>昵称</div>
                      <FormItem prop="name">
                        <Input type="text" v-model="formValidate.name" />
                      </FormItem>
                      <div>个人简介</div>
                      <FormItem prop="intro">
                        <Input
                          type="textarea"
                          :rows="4"
                          v-model="formValidate.intro"
                          placeholder="个人简介"
                        />
                      </FormItem>

                      <div>国家/地区</div>
                      <Select v-model="formValidate.model1">
                        <Option
                          v-for="item in cityList"
                          :value="item.value"
                          :key="item.value"
                        >{{ item.label }}</Option>
                      </Select>

                      <div style="padding-top: 20px">所在省市</div>
                      <Select v-model="formValidate.model2" style="width:150px">
                        <Option
                          v-for="item in cityList2"
                          :value="item.value"
                          :key="item.value"
                        >{{ item.label }}</Option>
                      </Select>
                      <Select v-model="formValidate.model3" style="width:150px">
                        <Option
                          v-for="item in cityList3"
                          :value="item.value"
                          :key="item.value"
                        >{{ item.label }}</Option>
                      </Select>

                      <div style="padding-top: 20px;">街道地址</div>
                      <FormItem prop="site">
                        <Input type="text" v-model="formValidate.site" placeholder />
                      </FormItem>

                      <div>联系电话</div>
                      <FormItem prop="phone1" label="">
                        <Input
                          type="text"
                          v-model="formValidate.phone1"
                          placeholder
                          style="width:100px"
                        />
                        <Input
                          type="text"
                          v-model="formValidate.phone2"
                          placeholder
                          style="width:200px;"
                        />
                      </FormItem>

                      <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate')">更新基本信息</Button>
                      </FormItem>
                    </Form>
                  </div>
                </Col>
                <Col :xs="24" :sm="24" :md="12" :lg="24" :xl="14" :xxl="14"></Col>
              </Row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="安全设置">
          <SecuritySettings />
        </el-tab-pane>
        <el-tab-pane label="账号绑定">
          <AccountBinding />
        </el-tab-pane>
        <el-tab-pane label="新消息通知">
          <Inform />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SecuritySettings from "./SecuritySettings";
import AccountBinding from "./AccountBinding";
import Inform from "./Inform";
export default {
  data() {
    return {
      tabPosition: "left",

      formValidate: {
        email: "antdesign@alipay.com",
        name: "Serati Ma",
        intro: "",
        model1: "中国",
        model2: "浙江省",
        model3: "杭州市",
        site: "西湖区工专路 77 号",
        phone1: "0752",
        phone2: "268888888"
      },
      ruleValidate: {
        email: [
          { required: true, message: "请输入您的邮箱!", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入您的昵称!", trigger: "blur" }],
        intro: [
          { required: true, message: "请输入您的个人简介!", trigger: "blur" }
        ],

        site: [
          { required: true, message: "请输入您的街道地址!", trigger: "blur" }
        ],
        phone1: [
          {
            required: true,
            message: "Please input your area code!",
            trigger: "blur"
          }
        ]
      },
      cityList: [
        {
          value: "中国",
          label: "中国"
        }
      ],
      cityList2: [
        {
          value: "北京市",
          label: "北京市"
        },
        {
          value: "天津市",
          label: "天津市"
        },
        {
          value: "河北省",
          label: "河北省"
        },
        {
          value: "福建省",
          label: "福建省"
        },
        {
          value: "浙江省",
          label: "浙江省"
        },
        {
          value: "安徽省",
          label: "安徽省"
        },
        {
          value: "山西省",
          label: "山西省"
        },
        {
          value: "内蒙古自治区",
          label: "内蒙古自治区"
        },
        {
          value: "辽宁省",
          label: "辽宁省"
        },
        {
          value: "吉林省",
          label: "吉林省"
        },
        {
          value: "黑龙江省",
          label: "黑龙江省"
        },
        {
          value: "上海市",
          label: "上海市"
        }
      ],
      cityList3: [
        {
          value: "杭州市",
          label: "杭州市"
        },
        {
          value: "温州市",
          label: "温州市"
        },
        {
          value: "嘉兴市",
          label: "嘉兴市"
        },
        {
          value: "湖州市",
          label: "湖州市"
        },
        {
          value: "绍兴市",
          label: "绍兴市"
        },
        {
          value: "金华市",
          label: "金华市"
        },
        {
          value: "衢州市",
          label: "衢州市"
        },
        {
          value: "舟山市",
          label: "舟山市"
        }
      ]
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功");
        } else {
          this.$Message.error();
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  },
  components: {
    SecuritySettings,
    AccountBinding,
    Inform
  }
};
</script>

<style>
.setting {
  background: #fff;
}
.setting .basic {
  padding: 0 30px;
}

.setting .basic .in .names {
  padding: 30px 0;
  font-size: 20px;
  color: #333;
}
</style>