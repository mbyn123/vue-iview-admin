<template>
  <div>
    <div class="bztables">
      <div class="in">
        <div style="padding: 25px;display: flex;justify-content: space-between ">
          <div style="font-size: 16px;color:#333">基本列表</div>
          <div>
            <div style="display: inline-block">
              <RadioGroup v-model="button" type="button">
                <Radio label="全部"></Radio>
                <Radio label="进行中"></Radio>
                <Radio label="等待中"></Radio>
              </RadioGroup>
            </div>
            <div style="display: inline-block;margin-left: 20px">
              <Input search placeholder="请输入" style="width:272px" />
            </div>
          </div>
        </div>
        <div class="bzadd" style="cursor: pointer;" @click="listmodal=true">
          <span style="font-size: 14px;">
            <Icon type="md-add" size="20" class="ico" color="#333" />添加
          </span>
        </div>
        <div class="bzlist">
          <div>
            <div v-for="value in historyData" :key="value.id">
              <div class="item">
                <div style="border-bottom:1px solid #ccc;padding:18px 5px 16px 5px">
                  <Row>
                    <Col span="13">
                      <div>
                        <span>
                          <img :src="value.img" alt />
                        </span>
                        <div class="imgs">
                          <div class="name">{{value.name}}</div>
                          <div>{{value.describe}}</div>
                        </div>
                      </div>
                    </Col>
                    <Col span="11">
                      <div class="content">
                        <div>
                          <div>Owner</div>
                          <div>{{value.person}}</div>
                        </div>
                        <div>
                          <div>开始时间</div>
                          <div>{{value.time}}</div>
                        </div>
                        <Progress
                          :percent="value.number"
                          :status="value.state"
                          :stroke-width="8"
                          style="padding-top: 10px;width:220px; "
                        />
                        <div style="padding-top: 10px;">
                          <span
                            style="color:#2d8cf0;cursor: pointer;"
                            @click="redactitems(value)"
                          >编辑</span>
                          <span
                            style="display: inline-block;width:1px;height:10px;color:#e8e8e8;margin: 0 5px"
                          >|</span>
                          <Dropdown style="display: inline-block">
                            <a href="javascript:void(0)">
                              <span>更多</span>
                              <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem>
                                <div @click="redactitems(value)">编辑</div>
                              </DropdownItem>
                              <DropdownItem>
                                <div @click="clearmodal=true">删除</div>
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <Modal v-model="listmodal" title="任务编辑" width="640">
              <div class="listfrom">
                <Form
                  :label-width="90"
                  :model="formValidate"
                  :rules="ruleValidate"
                  ref="formValidate"
                >
                  <FormItem label="任务名称 :" label-for="name" prop="name">
                    <Input
                      type="text"
                      placeholder="请输入"
                      element-id="name"
                      style="width:350px"
                      v-model.trim="formValidate.name"
                    ></Input>
                  </FormItem>
                  <FormItem label="开始时间 :" label-for="time" prop="time">
                    <DatePicker
                      type="datetime"
                      element-id="time"
                      format="yyyy-MM-dd HH:mm"
                      placeholder="Select date and time"
                      v-model="formValidate.time"
                      style="width: 350px"
                    ></DatePicker>
                  </FormItem>
                  <FormItem label="任务负责人 :" prop="person">
                    <Select v-model="formValidate.person" placeholder="请选择" style="width:350px">
                      <Option
                        v-for="item in personList"
                        :value="item.value"
                        :key="item.value"
                      >{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="产品描述 :" label-for="describe" prop="describe">
                    <Input
                      type="textarea"
                      :rows="4"
                      placeholder="请输入至少五个字符"
                      element-id="describe"
                      v-model.trim="formValidate.describe"
                      style="width:350px"
                    ></Input>
                  </FormItem>
                </Form>
              </div>
              <div slot="footer">
                <Button @click="listmodal=false">取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
              </div>
            </Modal>
            <Modal v-model="hintmodal" width="640" footer-hide>
              <div class="reminderss">
                <Icon
                  type="ios-checkmark-circle"
                  color="rgb(82, 196, 26)"
                  size="90"
                  style="padding-top:45px"
                />
                <h1>操作成功</h1>
                <p>一系列的信息描述，很短同样也可以带标点。</p>
                <Button type="primary" @click="handleSpinShow()">知道了</Button>
              </div>
            </Modal>
            <Modal v-model="redactmodal" title="任务编辑" width="640">
              <div class="listfrom">
                <Form
                  :label-width="90"
                  :model="redactValidate"
                  :rules="redactruleValidate"
                  ref="redactValidate"
                >
                  <FormItem label="任务名称 :" label-for="name" prop="name">
                    <Input
                      type="text"
                      placeholder="请输入"
                      element-id="name"
                      style="width:350px"
                      v-model.trim="redactValidate.name"
                    ></Input>
                  </FormItem>
                  <FormItem label="开始时间 :" label-for="time" prop="time">
                    <el-date-picker
                      v-model="redactValidate.time"
                      type="datetime"
                      placeholder="选择日期时间"
                    ></el-date-picker>
                  </FormItem>
                  <FormItem label="任务负责人 :" prop="person">
                    <Select v-model="redactpersonmodel" placeholder="请选择" style="width:350px">
                      <Option
                        v-for="item in redactpersonList"
                        :value="item.value"
                        :key="item.value"
                      >{{ item.label }}</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="产品描述 :" label-for="describe" prop="describe">
                    <Input
                      type="textarea"
                      :rows="4"
                      placeholder="请输入至少五个字符"
                      element-id="describe"
                      v-model.trim="redactValidate.describe"
                      style="width:350px"
                    ></Input>
                  </FormItem>
                </Form>
              </div>
              <div slot="footer">
                <Button @click="redactmodal=false">取消</Button>
                <Button type="primary" @click="redacthandleSubmit('redactValidate')">保存</Button>
              </div>
            </Modal>
            <Modal v-model="clearmodal" footer-hide width="360">
              <div style="display:flex">
                <div style="margin-right:5px">
                  <Icon type="ios-help-circle-outline" size="20" color="#ff9900" />
                </div>
                <div>
                  <p style="font-size:16px;color:rgba(0,0,0,.85);font-weight:bold">删除任务</p>
                  <p style="font-size:14px">确定删除该任务吗？</p>
                </div>
              </div>
              <div style="text-align:right;padding-top:20px">
                <Button style="margin-right:5px" @click="clearmodal=false">取消</Button>
                <Button type="primary" @click="deleteitem()">确定</Button>
              </div>
            </Modal>
          </div>
          <div style="text-align: right;padding:25px 30px 40px 0">
            <Page
              :total="dataCount"
              :page-size="pageSize"
              show-elevator
              show-sizer
              @on-change="changepage"
              @on-page-size-change="pagesize"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { setTimeout } from "timers";
let testData = {
  histories: [
    {
      img: require('../../../assets/userlogo_images/alipay.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 91
    },
    {
      img: require('../../../assets/userlogo_images/react.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/alipay.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 91
    },
    {
      img: require('../../../assets/userlogo_images/react.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/alipay.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 91
    },
    {
      img: require('../../../assets/userlogo_images/react.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/alipay.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 91
    },
    {
      img: require('../../../assets/userlogo_images/react.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/n.png'),
      name: "Ant Design Pro",
      describe: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
      person: "周星星",
      time: "2019-07-14 11:24",
      state: "normal",
      number: 91
    },
    {
      img:require('../../../assets/userlogo_images/ant.png'),
      name: "Bootstrap",
      describe: "那时候我只会想自己想要什么，从不想自己拥有什么",
      person: "吴加好",
      time: "2019-07-19 09:24",
      state: "wrong",
      number: 66
    },
    {
      img: require('../../../assets/userlogo_images/vue.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "wrong",
      number: 99
    },
    {
      img:  require('../../../assets/userlogo_images/angular.png'),
      name: "Ant Design",
      describe: "生命就像一盒巧克力，结果往往出人意料",
      person: "林东东",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 84
    },
    {
      img:require('../../../assets/userlogo_images/bro.png'),
      name: "Alipay",
      describe: "那是一种内在的东西， 他们到达不了，也无法触及的",
      person: "付小小",
      time: "Tue Jul 16 2019 11:24:00 GMT+0800 (中国标准时间)",
      state: "normal",
      number: 61
    },
    {
      img:require('../../../assets/userlogo_images/pro.png'),
      name: "Angular",
      describe: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
      person: "曲丽丽",
      time: "2019-07-12 15:24",
      state: "wrong",
      number: 99
    },
  ]
};
export default {
  data() {
    return {
      index: 0,
      listmodal: false,
      hintmodal: false,
      redactmodal: false,
      clearmodal: false,
      button: "全部",
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 10,
      page: 1,
      historyData: [],
      personList: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        }
      ],
      personmodel: [],
      redactpersonList: [
        {
          value: "付晓晓",
          label: "付晓晓"
        },
        {
          value: "周毛毛",
          label: "周毛毛"
        },
        {
          value: "周星星",
          label: "周星星"
        },
        {
          value: "吴加好",
          label: "吴加好"
        },
        {
          value: "林东东",
          label: "林东东"
        },
        {
          value: "曲丽丽",
          label: "曲丽丽"
        }
      ],
      redactpersonmodel: [],
      formValidate: {
        name: "",
        time: "",
        describe: "",
        person: ""
      },
      redactValidate: {
        name: "",
        time: "",
        describe: "",
        person: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "请输入规则名称！",
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
        person: [
          {
            required: true,
            message: "请选择任务负责人",
            trigger: "change"
          }
        ]
      },
      redactruleValidate: {
        name: [
          {
            required: true,
            message: "请输入规则名称！",
            trigger: "blur"
          }
        ],
        time: [
          // {
          //   required: true,
          //   // type: "date",
          //   message: "请选择开始日期",
          //   trigger: "change"
          // }
        ],
        person: [
          {
            required: true,
            message: "请选择任务负责人",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    time() {
      for (let v = 0; v < testData.histories.length; v++) {
        testData.histories[v].time = this.dateFormat(
          testData.histories[v].time
        );
      }
    },
    handleSpinShow() {
      this.hintmodal = false;
    },
    deleteitem() {
      this.historyData.splice(this.index, 1);
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 2000);
      this.clearmodal = false;
    },
    redacthandleSubmit(name) {
      const tempdata = Object.assign({}, this.redactValidate);
      tempdata.person = this.redactpersonmodel;
       tempdata.time = this.dateFormat(tempdata.time);
       
      this.$refs[name].validate(valid => {
        if (valid) {
          this.historyData.splice(this.index, 1, tempdata);
        
          this.redactmodal = false;
          this.$Spin.show();
          setTimeout(() => {
            this.$Spin.hide();
            this.hintmodal = true;
          }, 2000);
        } else {
          this.$Message.error();
        }
      });
    },
    redactitems(value) {
      this.redactmodal = true;
      this.redactValidate = Object.assign({}, value);

      this.index = this.historyData.indexOf(value);
      this.redactpersonmodel = value.person;
    },
    //转换时间
    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year + "-" + month + "-" + day + " " + hours + ":" + minutes
        // ":" +
        // seconds
      );
    },
    //当前时间
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
    addlist() {
      let add = {
        img: require("../../../assets/functional_image/defaults.jpg"),
        name: "",
        describe: "",
        person: "",
        time: "",
        state: "wrong",
        number: 0
      };

      add.name = this.formValidate.name;
      add.describe = this.formValidate.describe;
      add.person = this.formValidate.person;
      add.time = this.dateFormat(this.formValidate.time);

      testData.histories.unshift(add);
      //  console.log(testData.histories);
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.addlist();
          this.handleListApproveHistory();

          this.formValidate.name = "";
          this.formValidate.time = "";
          this.formValidate.describe = "";
          this.formValidate.person = "";
          this.listmodal = false;
          this.hintmodal = true;
        } else {
          this.$Message.error();
        }
      });
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
    this.time();
  }
};
</script>

<style scoped>
.reminderss {
  text-align: center;
  padding: 50px;
}

.reminderss h1 {
  padding-top: 30px;
}

.reminderss p {
  padding-bottom: 30px;
  font-size: 16px;
  color: rgb(182, 183, 183);
}
.listfrom {
  padding-left: 50px;
}

.bzlist .item {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  padding: 0 25px;
}
.bzlist .item .imgs {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}

.bzlist .item .imgs .name {
  margin-bottom: 5px;
}
.bzlist .item .imgs .name:hover {
  color: #2d8cf0;
  cursor: pointer;
}

.bzlist .item .content {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
.bzlist .item img {
  width: 48px;
}
.bztables {
  padding: 25px 5px 0 5px;
}

.bztables .in {
  background: #fff;
}
.bzadd {
  border: 1px dashed #ccc;
  text-align: center;
  padding: 5px 0;
}
.bzadd:hover {
  border: 1px dashed #2d8cf0;
}
.bzadd .ico {
  display: inline-block;
  vertical-align: top;
}
</style>