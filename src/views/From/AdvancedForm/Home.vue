<template>
  <div>
    <Row>
      <Col span="24">
        <div class="title">
          <div class="top">
            <Breadcrumb>
              <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
              <BreadcrumbItem >表单页</BreadcrumbItem>
              <BreadcrumbItem>高级表单</BreadcrumbItem>
            </Breadcrumb>
            <div class="Advancedform">高级表单</div>
            <div class="content">高级表单常见于一次性输入和提交大批量数据的场景。</div>
          </div>
        </div>
      </Col>
    </Row>
    <Form :rules="ruleValidate" :model="formValidate" ref="formValidate">
      <Row>
        <Col span="24">
          <div class="depot">
            <div class="in">
              <div class="manage">
                <span>仓库管理</span>
              </div>
              <div style="padding: 20px">
                <Row :gutter="20">
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="仓库名" prop="Warehouse">
                        <Input placeholder="请输入仓库名称" v-model="formValidate.Warehouse"></Input>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div style="padding:0 ">
                      <FormItem label="仓库域名" prop="domain">
                        <br />
                        <Input placeholder="请输入" v-model="formValidate.domain">
                          <span slot="prepend">http://</span>
                          <span slot="append">.com</span>
                        </Input>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="仓库管理员" prop="Controller">
                        <Select placeholder="请选择管理员" v-model="formValidate.Controller">
                          <Option
                            v-for="item in cityList"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>

                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="审批人" prop="Approver">
                        <Select placeholder="请选择审批员" v-model="formValidate.Approver">
                          <Option
                            v-for="item in cityList2"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div style>
                      <FormItem label="生效日期" prop="date">
                        <br />
                        <DatePicker
                          type="date"
                          placeholder="     开始日期     ~        结束日期"
                          style="width:100%"
                          v-model="formValidate.date"
                        ></DatePicker>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="仓库类型" prop="mold">
                        <Select placeholder="请选择仓库类型" v-model="formValidate.mold">
                          <Option
                            v-for="item in cityList3"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <div class="depot">
            <div class="in">
              <div class="manage">
                <span>任务管理</span>
              </div>
              <div style="padding: 20px">
                <Row :gutter="20">
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="任务名" prop="t1">
                        <Input placeholder="请输入" v-model="formValidate.t1" />
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="任务描述" prop="t2">
                        <Input placeholder="请输入" v-model="formValidate.t2" />
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="执行人" prop="t4">
                        <Select placeholder="请选择管理员" v-model="formValidate.t4">
                          <Option
                            v-for="item in cityList4"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>

                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="责任人" prop="t5">
                        <Select placeholder="请选择审批员" v-model="formValidate.t5">
                          <Option
                            v-for="item in cityList5"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="生效日期" prop="t3">
                        <br />
                        <TimePicker
                          type="time"
                          placeholder="提醒时间"
                          style="width: 100%"
                          v-model="formValidate.t3"
                        ></TimePicker>
                      </FormItem>
                    </div>
                  </Col>
                  <Col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" :xxl="8">
                    <div>
                      <FormItem label="任务类型" prop="t6">
                        <Select placeholder="请选择仓库类型" v-model="formValidate.t6">
                          <Option
                            v-for="item in cityList6"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </FormItem>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <div class="button">
            <Poptip placement="top" width="250" class="Poptip">
              <span class="ico" v-show="ss">
                <Icon type="ios-alert-outline" size="20" color="#ed4014" />
                <span>{{num}}</span>
              </span>
              <div class="api" slot="content">
                <ul class="in">
                  <li class="titles">表单校验信息</li>
                  <li class="item" v-for="(value,index) in verification" :key="index">
                    <div class="content">{{value.title}}</div>
                    <div class="list">{{value.title1}}</div>
                  </li>
                </ul>
              </div>
            </Poptip>
            <Button type="primary" style="margin-right:20px" @click="handleSubmit('formValidate')">
              <span>提交</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
    <list />
    <div style="height:200px;"></div>
  </div>
</template>

<script>
import list from "./list";
export default {
  data() {
    return {
      ss: "",
      verification: [
        {
          title: "请输入仓库名称",
          title1: "仓库名"
        },
        {
          title: "请选择",
          title1: "仓库域名"
        },
        {
          title: "请选择审批员",
          title1: "审批人"
        },
        {
          title: "请选择生效日期",
          title1: "生效日期"
        },
        {
          title: "请选择仓库类型",
          title1: "仓库类型"
        },
        {
          title: "请输入",
          title1: "任务名"
        },
        {
          title: "请选择",
          title1: "任务描述"
        },
        {
          title: "请选择管理员",
          title1: "执行人"
        },
        {
          title: "请选择审批员",
          title1: "责任人"
        },
        {
          title: "请输入",
          title1: "生效日期"
        },
        {
          title: "请选择仓库类型",
          title1: "任务类型"
        }
      ],
      cityList: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        }
      ],
      cityList2: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        }
      ],
      cityList3: [
        {
          value: "公开",
          label: "公开"
        },
        {
          value: "私密",
          label: "私密"
        }
      ],
      cityList4: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        }
      ],
      cityList5: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        }
      ],
      cityList6: [
        {
          value: "公开",
          label: "公开"
        },
        {
          value: "私密",
          label: "私密"
        }
      ],

      formValidate: {
        Warehouse: "",
        domain: "",
        Controller: "",
        Approver: "",
        data: "",
        mold: "",
        t1: "",
        t2: "",
        t3: "",
        t4: "",
        t5: "",
        t6: ""
      },
      ruleValidate: {
        Warehouse: [
          { required: true, message: "请输入仓库名称", trigger: "blur" }
        ],
        domain: [{ required: true, message: "请输入", trigger: "blur" }],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择开始日期",
            trigger: "change"
          }
        ],
        Controller: [
          { required: true, message: "请选择管理员", trigger: "change" }
        ],
        Approver: [
          { required: true, message: "请选择审批员", trigger: "change" }
        ],
        mold: [
          { required: true, message: "请选择仓库类型", trigger: "change" }
        ],
        t1: [{ required: true, message: "请输入仓库名称", trigger: "change" }],
        t2: [
          { required: true, message: "请输入", trigger: "blur" }
          // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        t3: [
          {
            required: true,
            type: "string",
            message: "请选择开始日期",
            trigger: "change"
          }
        ],
        t4: [{ required: true, message: "请选择管理员", trigger: "change" }],
        t5: [{ required: true, message: "请选择审批员", trigger: "change" }],
        t6: [{ required: true, message: "请选择仓库类型", trigger: "change" }]
      }
    };
  },
  components: {
    list
  },
  computed: {
    num() {
      var formValidate = [].slice.call(this.formValidate);

      //  console.log( valid)
      return formValidate.reduce((sum, value) => sum + (value.ss ? 1 : 0), 12);
    },
    all: {
      get() {
        //当勾选的数量等于所有任务的数量 此复选框的值为true
        return this.num === this.formValidate.length && this.num > 0;
      }
    }
  },
  methods: {
    handleSubmit(name) {
      //  const arr=Object.keys(this.formValidate)
      //      this.arr=arr.length-1

      this.$refs[name].validate(valid => {
        //  console.log( name)
        this.ss = !valid;
        //   console.log(this.ss)

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
  }
};
</script>

<style scoped>
.Poptip .in {
  height: 320px;
}

.Poptip .in .titles {
  border-bottom: 1px solid #ccc;
  text-align: left;
  color: #333;
  font-size: 14px;
  padding: 5px;
}

.Poptip .in .item {
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding: 10px 20px;
  cursor: pointer;
}
.Poptip .in .item:hover {
  background-color: rgb(230, 247, 255);
}
.Poptip .in .item .content {
  font-size: 14px;
}

.Poptip .in .item .list {
  padding-top: 2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}

.button {
  background: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: calc(100% - 261px);
  padding: 0 20px;
  line-height: 56px;
  text-align: right;
}

.button .ico {
  margin-right: 10px;
  font-size: 14px;
  color: #ed4014;
  cursor: pointer;
}

.depot {
  margin-bottom: 25px;
}

.depot .in {
  background: #fff;
}

.depot .in .manage {
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.top {
  background: #fff;
  padding: 20px 20px 30px 20px;
}

.title {
  margin: -19px -20px 25px -20px;
}


.top .Advancedform {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin: 10px 0;
}

.top .content {
  font-size: 14px;
}
</style>
