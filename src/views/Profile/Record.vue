<template>
  <div>
    <div style="padding:25px 0">
      <div class="record">
        <div class="tops">用户近半年来电记录</div>
        <div style="text-align: center;padding:40px 0;color:rgba(0,0,0,.45)">
          <div>
            <Icon type="ios-sad-outline" size="25" />
            <span style="font-size: 16px;margin-left: 10px">暂无数据</span>
          </div>
        </div>
      </div>
    </div>
    <div class="log">
      <div style="padding-left:10px;">
        <Tabs value="操作日志一" :animated="false">
          <TabPane label="操作日志一" name="操作日志一" >
            <div>
              <Row>
                <Col span="24">
                  <Table :columns="columns2" class :data="data2" footer>
                    <template slot-scope="{ row }" slot="type">
                      <div style="font-size: 14px">{{ row.type }}</div>
                    </template>

                    <template slot-scope="{ row }" slot="operator">
                      <span style="font-size: 14px">{{ row.operator }}</span>
                    </template>

                    <template slot-scope="{ row }" slot="result">
                      <span style="font-size: 14px">
                        <Icon type="ios-radio-button-on" size="1" :style="{color:row.color}" />
                      </span>
                      <span class="state">{{ row.result }}</span>
                    </template>

                    <template slot-scope="{ row }" slot="time">
                      <span style="font-size: 14px">{{ row.time }}</span>
                    </template>

                    <template slot-scope="{ row }" slot="remark">
                      <span style="font-size: 14px">{{ row.remark}}</span>
                    </template>
                  </Table>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane label="操作日志二" name="操作日志二">
            <Row>
              <Col span="24">
                <Table :columns="columns2" class :data="data3" footer>
                  <template slot-scope="{ row }" slot="type">
                    <div style="font-size: 14px">{{ row.type }}</div>
                  </template>

                  <template slot-scope="{ row }" slot="operator">
                    <span style="font-size: 14px">{{ row.operator }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="result">
                    <span style="font-size: 14px">
                      <Icon type="ios-radio-button-on" size="1" :style="{color:row.color}" />
                    </span>
                    <span class="state">{{ row.result }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="time">
                    <span style="font-size: 14px">{{ row.time }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="remark">
                    <span style="font-size: 14px">{{ row.remark}}</span>
                  </template>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane label="操作日志三" name="操作日志三">
            <Row>
              <Col span="24">
                <Table :columns="columns2" class :data="data4" footer>
                  <template slot-scope="{ row }" slot="type">
                    <div style="font-size: 14px">{{ row.type }}</div>
                  </template>

                  <template slot-scope="{ row }" slot="operator">
                    <span style="font-size: 14px">{{ row.operator }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="result">
                    <span style="font-size: 14px">
                      <Icon type="ios-radio-button-on" size="1" :style="{color:row.color}" />
                    </span>
                    <span class="state">{{ row.result }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="time">
                    <span style="font-size: 14px">{{ row.time }}</span>
                  </template>

                  <template slot-scope="{ row }" slot="remark">
                    <span style="font-size: 14px">{{ row.remark}}</span>
                  </template>
                </Table>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns2: [
        {
          title: "操作类型",
          slot: "type"
        },
        {
          title: "操作人",
          slot: "operator"
        },
        {
          title: "执行结果",
          slot: "result"
        },
        {
          title: "操作时间",
          slot: "time"
        },
        {
          title: "备注",
          slot: "remark"
        }
      ],

      data2: [
        {
          type: "订购关系生效",
          operator: "曲丽丽",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "-"
        },
        {
          type: "财务复审",
          operator: "付小小",
          result: "驳回",
          color: "#ed4014",
          time: "2017-10-03 19:23:12",
          remark: "不通过原因"
        },
        {
          type: "部门初审",
          operator: "周毛毛",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "-"
        },
        {
          type: "提交订单",
          operator: "周毛毛",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "很棒"
        },
        {
          type: "创建订单",
          operator: "汗牙牙",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "-"
        }
      ],
      data3: [
        {
          type: "订购关系生效",
          operator: "曲丽丽",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "-"
        }
      ],
      data4: [
        {
          type: "创建订单",
          operator: "汗牙牙",
          result: "成功",
          color: "#19be6b",
          time: "2017-10-03 19:23:12",
          remark: "-"
        }
      ]
    };
  }
};
</script>

<style scoped>
.log {
  background: #fff;
  padding-bottom: 15px;
}
.record {
  background: #fff;
}
.record .tops {
  border-bottom: 1px solid #ccc;
  padding: 20px 25px;
  font-size: 16px;
  color: #333;
}
</style>