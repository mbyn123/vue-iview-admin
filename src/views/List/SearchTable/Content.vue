<template>
  <div>
    <div class="cxlist">
      <div class="in">
        <div class="xjbut">
          <Button type="primary" style="margin-right: 10px" @click="modal1 = true">
            <Icon type="md-add" size="20" class="ico" />
            <span style="font-size: 14px">新建</span>
          </Button>
          <Modal v-model="modal1" title="新建规则" width="480">
            <Form :label-width="90" :model="formValidate" :rules="ruleValidate" ref="formValidate">
              <FormItem label="描述：" label-for="describe" prop="describe">
                <Input
                  type="text"
                  placeholder="请输入"
                  element-id="describe"
                  v-model="formValidate.describe"
                  style="width:300px;"
                ></Input>
              </FormItem>
            </Form>
            <div slot="footer">
              <Button @click="modal1 = false">取消</Button>
              <Button type="primary" @click="ok('formValidate')">确认</Button>
            </div>
          </Modal>
          <Modal v-model="modal2" title="规则配置" width="640">
            <div>
              <Steps :current="current">
                <Step title="基本信息"></Step>
                <Step title="配置规则属性"></Step>
                <Step title="设定调度周期"></Step>
              </Steps>
              <div style="padding:60px 0 60px 90px" v-show="stepone">
                <Form
                  :label-width="90"
                  :model="tablesValidate"
                  :rules="tablerulesValidate"
                  ref="tablesValidate"
                >
                  <FormItem label="规则名称：" label-for="name" prop="name">
                    <Input
                      type="text"
                      placeholder="请输入"
                      element-id="name"
                      v-model="tablesValidate.name"
                      style="width:300px;"
                    ></Input>
                  </FormItem>
                  <FormItem label="描述：" label-for="describe" prop="describe">
                    <Input
                      type="textarea"
                      :cl:rows="4"
                      placeholder="请输入"
                      element-id="describe"
                      v-model="tablesValidate.describe"
                      style="width:300px;"
                    ></Input>
                  </FormItem>
                </Form>
              </div>
            </div>
            <div style="padding:60px 0 60px 90px" v-show="steptwo">
              <Form :label-width="90">
                <FormItem label="监控对象：">
                  <Select style="width:300px" v-model="MonitoringObjectModel">
                    <Option
                      v-for="item in MonitoringObject"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>
                <FormItem label="规则模板：">
                  <Select style="width:300px" v-model="ruletemplatemodel">
                    <Option
                      v-for="item in ruletemplate"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>
                <FormItem label="规则类型：">
                  <RadioGroup v-model="weak">
                    <Radio label="强"></Radio>
                    <Radio label="弱"></Radio>
                  </RadioGroup>
                </FormItem>
              </Form>
            </div>
            <div style="padding:60px 0 60px 90px" v-show="stepthree">
              <Form
                :label-width="100"
                :model="dispatchValidate"
                :rules="dispatchruleValidate"
                ref="dispatchValidate"
              >
                <FormItem label="开始时间：" label-for="time" prop="time">
                  <DatePicker
                    type="datetime"
                    placeholder="选择开始时间"
                    style="width:300px"
                    v-model="dispatchValidate.time"
                    element-id="time"
                  ></DatePicker>
                </FormItem>
                <FormItem label="设定调度日期：">
                  <Select v-model="Datedispatchmodel" style="width:300px">
                    <Option
                      v-for="item in Datedispatch"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </Form>
            </div>
            <div slot="footer" class="step-button">
              <span>
                <Button v-show="LastStep" @click="last">上一步</Button>
              </span>
              <span>
                <Button @click="clear()">取消</Button>
                <Button type="primary" @click="next('tablesValidate')" v-show="nexts">下一步</Button>
                <Button
                  type="primary"
                  v-show="accomplish"
                  @click="handleSubmit('dispatchValidate')"
                >完成</Button>
              </span>
            </div>
          </Modal>
          <Button style="margin-right: 10px" v-show="state3">批量操作</Button>
          <Dropdown>
            <Button v-show="state3">
              更多操作
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem>删除</DropdownItem>
              <DropdownItem>批量操作</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div class="statistics">
          <span>
            <Icon type="ios-information-circle" size="16" class="ico" />已选择
            <span class="one">{{num}}</span>项
          </span>
          <span>
            服务调用次数总计
            <span class="two">{{nums}} 万</span>
          </span>
          <span class="three" @click="handleSelectAll(false)">清空</span>
        </div>

        <div class="cxtables">
          <Row>
            <Col span="24">
              <Table
                :columns="historyColumns"
                :data="historyData"
                @on-select="select"
                @on-select-cancel="cancel"
                @on-select-all="all"
                @on-select-all-cancel="can"
                ref="selection"
              >
                <template slot-scope="{ row }" slot="name">
                  <span>{{row.name}}</span>
                </template>

                <template slot-scope="{ row }" slot="describe">
                  <span>{{row.describe}}</span>
                </template>

                <template slot-scope="{ row }" slot="numbers">
                  <span>{{row.numbers}} 万</span>
                </template>

                <template slot-scope="{ row }" slot="state">
                  <span class="dot" :style="{'background':color(row)}"></span>
                  <span>{{row.state}}</span>
                </template>
                <template slot-scope="{ row }" slot="time">
                  <span>{{row.time}}</span>
                </template>

                <template slot-scope="{ row }" slot="operation">
                  <div class="cz">
                    <span class="pz" @click="allocation(row)">配置</span>
                    <span>订阅警报</span>
                  </div>
                </template>
              </Table>
            </Col>
            <Col span="24">
              <div style="text-align: right;padding-top: 20px;">
                <Page
                  :total="dataCount"
                  :page-size="pageSize"
                  show-elevator
                  show-sizer
                  @on-change="changepage"
                  @on-page-size-change="pagesize"
                ></Page>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let testData = {
  histories: [
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    },
    {
      name: "TradeCode 0",
      describe: "这是一段描述",
      numbers: 247,
      state: "运行中",
      time: "2017-07-01 08:00:00",
      operation: ""
    },
    {
      name: "TradeCode 1",
      describe: "这是一段描述",
      numbers: 438,
      state: "异常",
      time: "2017-07-02 01:00:00",
      operation: ""
    },
    {
      name: "TradeCode 2",
      describe: "这是一段描述",
      numbers: 827,
      state: "已上线",
      time: "2017-07-04 07:00:00",
      operation: ""
    },
    {
      name: "TradeCode 3",
      describe: "这是一段描述",
      numbers: 322,
      state: "关闭",
      time: "2017-07-14 04:00:00",
      operation: ""
    },
    {
      name: "TradeCode 4",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 5",
      describe: "这是一段描述",
      numbers: 312,
      state: "关闭",
      time: "2017-07-14 10:00:00",
      operation: ""
    },
    {
      name: "TradeCode 6",
      describe: "这是一段描述",
      numbers: 542,
      state: "异常",
      time: "2017-07-06 16:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 7",
      describe: "这是一段描述",
      numbers: 372,
      state: "已上线",
      time: "2017-07-12 04:00:00",
      operation: "",
      _disabled: true
    },
    {
      name: "TradeCode 8",
      describe: "这是一段描述",
      numbers: 542,
      state: "运行中",
      time: "2017-07-06 11:00:00",
      operation: ""
    },
    {
      name: "TradeCode 9",
      describe: "这是一段描述",
      numbers: 548,
      state: "运行中",
      time: "2017-07-09 11:11:00",
      operation: ""
    },
    {
      name: "TradeCode 10987",
      describe: "这是一段描述",
      numbers: 942,
      state: "异常",
      time: "2017-07-10 14:26:00",
      operation: ""
    }
  ]
};

export default {
  data() {
    return {
      weak: "弱",
      LastStep: false,
      stepone: true,
      steptwo: false,
      stepthree: false,
      accomplish: false,
      nexts: true,
      current: 0,
      modal1: false,
      modal2: false,
      value: "",
      state3: false,
      num: 0,
      nums: 0,
      a: 100000,
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 1,
      // 每页显示多少条
      pageSize: 10,
      page: 1,
      historyColumns: [
        {
          type: "selection",
          width: 50,
          align: "center"
        },
        {
          title: "规则名称",
          slot: "name"
        },
        {
          title: "描述",
          slot: "describe",
         
        },
        {
          title: "服务调用次数",
          slot: "numbers",
          key: "numbers",
          sortable: true,
          align: "center"
        },
        {
          title: "状态",
          slot: "state",
          filters: [
            {
              label: "关闭",
              value: 1
            },
            {
              label: "运行中",
              value: 2
            },
            {
              label: "已上线",
              value: 3
            },
            {
              label: "异常",
              value: 4
            }
          ],
          filterMultiple: true,
          filterMethod(value, row) {
            if (value === 1) {
              return row.state === "关闭";
            } else if (value === 2) {
              return row.state === "运行中";
            } else if (value === 3) {
              return row.state === "已上线";
            } else if (value === 4) {
              return row.state === "异常";
            }
          }
        },
        {
          title: "上次调度时间",
          slot: "time",
          key: "time",
          sortable: true
        },
        {
          title: "操作",
          slot: "operation"
        }
      ],
      historyData: [],
      formValidate: {
        describe: ""
      },
      tablesValidate: {},
      ruleValidate: {
        describe: [
          {
            required: true,
            message: "请输入至少五个字符的规则描述！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 5,
            message: "请输入至少五个字符的规则描述！",
            trigger: "blur"
          }
        ],
        time: [
          {
            required: true,
            type: "date",
            message: "请选择开始日期",
            trigger: "change"
          }
        ],
        name: [
          {
            required: true,
            message: "请输入规则名称！",
            trigger: "blur"
          }
        ]
      },
      tablerulesValidate: {
        describe: [
          {
            required: true,
            message: "请输入至少五个字符的规则描述！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 5,
            message: "请输入至少五个字符的规则描述！",
            trigger: "blur"
          }
        ],

        name: [
          {
            required: true,
            message: "请输入规则名称！",
            trigger: "blur"
          }
        ]
      },
      dispatchruleValidate: {
        time: [
          {
            required: true,
            type: "date",
            message: "请选择开始日期",
            trigger: "change"
          }
        ]
      },
      dispatchValidate: {
        time: ""
      },
      MonitoringObject: [
        {
          value: "表一",
          label: "表一"
        },
        {
          value: "表二",
          label: "表二"
        }
      ],
      MonitoringObjectModel: ["表一"],
      ruletemplate: [
        {
          value: "规则模板一",
          label: "规则模板一"
        },
        {
          value: "规则模板二",
          label: "规则模板二"
        }
      ],
      ruletemplatemodel: ["规则模板二"],
      Datedispatch: [
        {
          value: "月",
          label: "月"
        },
        {
          value: "周",
          label: "周"
        }
      ],
      Datedispatchmodel: ["月"]
    };
  },
  created() {},
  methods: {
    allocation(row) {
      this.tablesValidate = Object.assign({}, row);
      console.log(row);
      this.current = 0;
      this.state();
      this.modal2 = true;
    },
    clear() {
      this.current = 0;
      this.state();
      this.modal2 = false;
    },
    state() {
      if (this.current == 0) {
        (this.stepone = true), (this.steptwo = false), (this.stepthree = false);
        this.LastStep = false;
        this.accomplish = false;
        this.nexts = true;
      } else if (this.current == 1) {
        (this.stepone = false), (this.steptwo = true), (this.stepthree = false);
        this.LastStep = true;
        this.accomplish = false;
        this.nexts = true;
      } else if (this.current == 2) {
        (this.stepone = false), (this.steptwo = false), (this.stepthree = true);
        this.nexts = false;
        this.accomplish = true;
        this.LastStep = true;
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          const tempdata = Object.assign({}, this.tablesValidate);
          this.historyData.splice(tempdata._index, 1, tempdata);
          console.log(tempdata._index);
          this.modal2 = false;
          this.current = 0;
          this.state();
          this.dispatchValidate.time = "";
          this.$Message.success("配置成功");
        } else {
          this.$Message.error();
        }
      });
    },
    next(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.current++;
          this.state();
        } else {
          this.$Message.error();
        }
        console.log();
      });
    },
    last() {
      this.current = this.current - 1;
      this.state();
    },

    CurentTime() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (h >= 0 && h <= 9) {
        h = "0" + h;
      }
      if (m >= 0 && m <= 9) {
        m = "0" + m;
      }
      if (s >= 0 && s <= 9) {
        s = "0" + s;
      }
      var currentdate =
        date.getFullYear() +
        "-" +
        month +
        "-" +
        strDate +
        " " +
        h +
        ":" +
        m +
        ":" +
        s;

      return currentdate;
    },

    ok(name) {
      let formValidates = {
        name: "TradeCode" + Math.floor(Math.random() * 100),
        describe: "",
        numbers: Math.floor(Math.random() * 1000),
        state: "运行中",
        time: this.CurentTime(),
        operation: ""
      };
      formValidates.describe = this.formValidate.describe;
      testData.histories.unshift(formValidates);
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功");
          this.formValidate.describe = "";
          this.modal1 = false;
          this.handleListApproveHistory();
        } else {
          this.$Message.error();
        }
      });
    },
    color(col) {
      if (col.state === "运行中") {
        return "#2db7f5";
      } else if (col.state === "异常") {
        return "#f10909";
      } else if (col.state === "已上线") {
        return "#19be6b";
      } else if (col.state === "关闭") {
        return "#c5c8ce";
      }
    },
    select(selection, row) {
      this.state3 = true;
      this.num = selection.length;
      this.nums += row.numbers;
      if (this.num !== 0) {
        this.state3 = true;
      } else {
        this.state3 = false;
      }
    },
    cancel(selection, row) {
      this.num = selection.length;
      this.nums -= row.numbers;
      if (this.num !== 0) {
        this.state3 = true;
      } else {
        this.state3 = false;
      }
    },
    all(selection) {
      this.num = selection.length;
      if (this.num !== 0) {
        this.state3 = true;
      } else {
        this.state3 = false;
      }
      for (var i in selection) {
        this.nums += selection[i].numbers;
      }
    },
    can(selection) {
      this.num = selection.length;
      this.nums = 0;
      if (this.num !== 0) {
        this.state3 = true;
      } else {
        this.state3 = false;
      }
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
      this.num = 0;
    },

    handleListApproveHistory() {
      this.ajaxHistoryData = testData.histories;
      this.dataCount = testData.histories.length;
      if (testData.histories.length < this.pageSize) {
        this.historyData = this.ajaxHistoryData;
      } else {
        this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      this.page = index;
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.historyData = this.ajaxHistoryData.slice(_start, _end);
    },
    pagesize(index) {
      let _start = (this.page - 1) * index;
      let _end = this.page * index;
      this.historyData = this.ajaxHistoryData.slice(_start, _end);
      this.pageSize = index;
    }
  },
  created() {
    this.handleListApproveHistory();
  }
};
</script>

<style scoped>
.step-button {
  display: flex;
  justify-content: space-between;
}
.cxlist {
  padding: 0 5px;
}

.cxlist .in {
  background: #fff;
  padding: 0 25px;
}

.cxlist .in .xjbut .ico {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  size: 16px;
}

.cxlist .in .statistics {
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  font-size: 14px;
}

.cxlist .in .statistics .one {
  color: #2d8cf0;
}

.cxlist .in .statistics .two {
  color: rgba(0, 0, 0, 0.85);
}

.cxlist .in .statistics .three {
  color: #2d8cf0;
  margin-left: 20px;
  cursor: pointer;
}

.cxlist .in .statistics .ico {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;

  color: #2b85e4;
}
.cxlist .cxtables {
  padding-bottom: 20px;
}

.cxlist .cxtables .dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 5px;
}

.cxlist .cxtables .cz {
  color: #2d8cf0;
  cursor: pointer;
  display: inline-block;
}

.cxlist .cxtables .cz .pz {
  border-right: 1px solid #ccc;
  margin-right: 10px;
  padding-right: 10px;
}

.cxlist .cxtables .ico {
  display: inline-block;
  vertical-align: text-top;
  margin-right: 5px;
}
</style>


 