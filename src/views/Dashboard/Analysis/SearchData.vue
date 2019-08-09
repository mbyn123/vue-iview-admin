<template>
  <div>
    <div style="margin: 25px -12px">
      <Row>
        <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" :xxl="12"  style="padding:0 12px;">
          <div style="background: #fff">
            <div style="border-bottom:1px solid #ccc;padding:0 25px">
              <div style="padding:20px 0;display: flex;justify-content: space-between">
                <div style="font-size: 16px;color:#333">线上热门搜索</div>
                <div style="cursor: pointer">
                  <Dropdown>
                    <Icon type="ios-more" size="20" />
                    <DropdownMenu slot="list">
                      <DropdownItem>操作一</DropdownItem>
                      <DropdownItem>操作二</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <Row>
              <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12" style="padding:25px;">
                <div>
                  <div>
                    <span>
                      <span style="margin-right:10px;">搜索用户数</span>
                      <span>
                        <Tooltip content="指示说明" placement="top" offset>
                          <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
                        </Tooltip>
                      </span>
                    </span>
                  </div>
                  <div class="SearchUsers">
                    <span class="num">12,321</span>
                    <span>
                      17.1
                      <Icon type="md-arrow-dropup" color="rgb(237, 64, 20)" />
                    </span>
                  </div>
                  <div style="max-width: 368px;">
                    <div id="SearchUsers" style="width: 100%;;height:45px;"></div>
                  </div>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12" style="padding:25px ;">
                <div style="padding-left: 20px">
                  <div>
                    <span>
                      <span style="margin-right:10px;">人均搜索次数</span>
                      <span>
                        <Tooltip content="指示说明" placement="top" offset>
                          <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
                        </Tooltip>
                      </span>
                    </span>
                  </div>
                  <div class="SearchUsers">
                    <span class="num">2.7</span>
                    <span>
                      26.2
                      <Icon type="md-arrow-dropdown" color="rgb(25, 190, 107)" />
                    </span>
                  </div>
                  <div style="max-width: 368px;">
                    <div id="SearchNumber" style="width: 100%;;height:45px;"></div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="24" style="padding: 0 25px;">
                <Table :columns="historyColumns" :data="historyData"></Table>
              </Col>
            </Row>
            <Row>
              <Col span="24" style="text-align: right;padding: 10px 25px">
                <Page :total="dataCount" :page-size="pageSize" @on-change="changepage"></Page>
              </Col>
            </Row>
          </div>
        </Col>
        <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" :xxl="12" style="padding:0 12px;">
          <div style="background: #fff;" class="saleroom">
            <div style="padding: 16px 25px 0 25px">
              <div>
                <div style="display: flex;justify-content: space-between">
                  <div style="font-size: 16px;color:#333">销售额类别占比</div>
                  <div style="display: inline-block;margin-left: 10px">
                    <div style="cursor: pointer">
                      <Dropdown>
                        <Icon type="ios-more" size="20" />
                        <DropdownMenu slot="list">
                          <DropdownItem>操作一</DropdownItem>
                          <DropdownItem>操作二</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div>
                  <Tabs value="name1">
                    <TabPane label="全部渠道" name="name1">
                      <Row>
                        <Col :xs="16" :sm="14" :md="16" :lg="17" :xl="18" :xxl="18">
                          <div style="padding-bottom: 25px;">
                            <div style="font-size: 14px;padding: 10px 20px;">销售额</div>
                            <div class="saleroom" style="position: relative">
                              <div id="AllChannels" style="width:100%;height:400px;"></div>
                              <div class="saleroom-title" v-for="item in  turnover" :key="item.id">
                                <div class="saleroom-content">销售额</div>
                                <div class="saleroom-num">{{item.num1}}</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col :xs="8" :sm="10" :md="8" :lg="7" :xl="6" :xxl="6">
                          <div style="padding:150px 0px  0 0 ;">
                            <div class="turnover">
                              <div class="in" v-for="list in AllChannels" :key="list.id">
                                <div class="li" >
                                  <div
                                    style="font-size: 14px;color:#333;display: flex;"
                                  >
                                    <div style="margin-right:10px">
                                      <span class="i">|</span>
                                      <span>{{list.num1}}</span>
                                    </div>
                                    <div>
                                      <span>{{list.num2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane label="线上" name="name2">
                      <Row>
                        <Col :xs="16" :sm="14" :md="16" :lg="17" :xl="18" :xxl="18">
                          <div style="padding-bottom: 25px">
                            <div style="font-size: 14px;padding: 10px 20px;">销售额</div>
                            <div class="saleroom" style="position: relative">
                              <div id="Online" style="width:100%;height:400px;"></div>
                              <div class="saleroom-title" v-for="item in  turnover" :key="item.id">
                                <div class="saleroom-content">销售额</div>
                                <div class="saleroom-num">{{item.num2}}</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col :xs="8" :sm="10" :md="8" :lg="7" :xl="6" :xxl="6">
                          <div style="padding-top:150px;">
                            <div class="turnover">
                              <div class="in" v-for="list in Online" :key="list.id">
                                <div class="li">
                                  <div
                                    style="font-size: 14px;color:#333;display: flex;"
                                  >
                                    <div style="margin-right:10px">
                                      <span class="i">|</span>
                                      <span>{{list.num1}}</span>
                                    </div>
                                    <div>
                                      <span>{{list.num2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane label="门店" name="name3">
                      <Row>
                        <Col :xs="16" :sm="14" :md="16" :lg="17" :xl="18" :xxl="18">
                          <div style="padding-bottom: 25px">
                            <div style="font-size: 14px;padding: 10px 20px;">销售额</div>
                            <div class="saleroom" style="position: relative">
                              <div id="shop" style="width:100%;height:400px;"></div>
                              <div class="saleroom-title" v-for="item in  turnover" :key="item.id">
                                <div class="saleroom-content">销售额</div>
                                <div class="saleroom-num">{{item.num3}}</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col :xs="8" :sm="10" :md="8" :lg="7" :xl="6" :xxl="6">
                          <div style="padding-top:150px;">
                            <div class="turnover">
                              <div class="in" v-for="list in shop" :key="list.id">
                                <div class="li">
                                  <div
                                    style="font-size: 14px;color:#333;display: flex;"
                                  >
                                    <div style="margin-right:10px">
                                      <span class="i">|</span>
                                      <span>{{list.num1}}</span>
                                    </div>
                                    <div>
                                      <span>{{list.num2}}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
let testData = {
  histories: [
    {
      name: "1",
      age: "76%",
      address: "搜索关键词-0",
      date: "830"
    },
    {
      name: "2",
      age: "74%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "3",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "4",
      age: "76%",
      address: "	搜索关键词-0",
      date: "840"
    },
    {
      name: "5",
      age: "71%",
      address: "	搜索关键词-0",
      date: "810"
    },
    {
      name: "6",
      age: "74%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "7",
      age: "26%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "8",
      age: "76%",
      address: "	搜索关键词-0",
      date: "430"
    },
    {
      name: "9",
      age: "76%",
      address: "	搜索关键词-0",
      date: "820"
    },
    {
      name: "10",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "11",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "12",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "13",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "14",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "15",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "16",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "11",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "17",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "18",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "19",
      age: "76%",
      address: "	搜索关键词-0",
      date: "830"
    },
    {
      name: "20",
      age: "56%",
      address: "	搜索关键词-0",
      date: "830"
    }
  ]
};

export default {
  data() {
    return {
      turnover: [
        {
          num1: "¥ 15,781"
        },
        {
          num2: "¥ 1,149"
        },
        {
          num3: "¥ 951"
        }
      ],
      AllChannels: [
        {
          title: "家用电器",
          num1: "28.79%",
          num2: "¥ 4,544"
        },
        {
          title: "食用酒水",
          num1: "21.04%",
          num2: "¥ 3,321"
        },
        {
          title: "个护健康",
          num1: "19.73%",
          num2: "¥ 3,113"
        },
        {
          title: "服饰箱包",
          num1: "14.83%",
          num2: "¥ 2,341"
        },
        {
          title: "母婴产品",
          num1: "7.80%",
          num2: "¥ 1,231"
        },
        {
          title: "其他",
          num1: "7.80%",
          num2: "¥ 1,231"
        }
      ],
      Online: [
        {
          title: "家用电器",
          num1: "21.24%",
          num2: "¥ 244"
        },
        {
          title: "食用酒水",
          num1: "27.94%",
          num2: "¥ 321"
        },
        {
          title: "个护健康",
          num1: "27.07%",
          num2: "¥ 311"
        },
        {
          title: "服饰箱包",
          num1: "3.57%",
          num2: "¥ 41"
        },
        {
          title: "母婴产品",
          num1: "10.53%",
          num2: "¥ 121"
        },
        {
          title: "其他",
          num1: "9.66%",
          num2: "¥ 111"
        }
      ],
      shop: [
        {
          title: "家用电器",
          num1: "21.24%",
          num2: "¥ 244"
        },
        {
          title: "食用酒水",
          num1: "27.94%",
          num2: "¥ 321"
        },
        {
          title: "个护健康",
          num1: "27.07%",
          num2: "¥ 311"
        },
        {
          title: "服饰箱包",
          num1: "3.57%",
          num2: "¥ 41"
        },
        {
          title: "其他",
          num1: "6.83%",
          num2: "¥ 65"
        }
      ],
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 5,

      historyColumns: [
        {
          title: "排名",
          key: "name"
        },
        {
          title: "搜索关键词",
          key: "address"
        },
        {
          title: "用户数",
          key: "date",
          sortable: true
        },

        {
          title: "周涨幅",
          key: "age",
          sortable: true
        }
      ],

      historyData: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.drawChartT();
    },10);
  },
  methods: {
    drawChartT() {
      let SearchUsersChart = this.$echarts.init(
        document.getElementById("SearchUsers")
      );
      let SearchNumberChart = this.$echarts.init(
        document.getElementById("SearchNumber")
      );
      let AllChannelsChart = this.$echarts.init(
        document.getElementById("AllChannels")
      );
      let OnlineChart = this.$echarts.init(document.getElementById("Online"));
      let shopChart = this.$echarts.init(document.getElementById("shop"));

      let optionSearchUsers = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: -10,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false //隐藏x坐标轴
        },
        yAxis: {
          type: "value",
          show: false //隐藏y坐标轴
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        series: [
          {
            data: [1, 6, 4, 8, 3, 7, 2],
            type: "line",
            areaStyle: {},
            smooth: true, //圆滑曲线true
            //    showSymbol: false,
            //  symbol:'none', //隐藏圆点
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            }
          }
        ]
      };
      let optionSearchNumber = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: -10,
          containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false //隐藏x坐标轴
        },
        yAxis: {
          type: "value",
          show: false //隐藏y坐标轴
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        series: [
          {
            data: [1, 6, 4, 8, 3, 7, 2],
            type: "line",
            areaStyle: {},
            smooth: true, //圆滑曲线true
            //    showSymbol: false,
            //  symbol:'none',隐藏圆点
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            }
          }
        ]
      };
      let optionAllChannels = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}%",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        color: [
          "rgb(58, 161, 255)",
          "rgb(54, 203, 203)",
          "rgb(78, 203, 115)",
          "rgb(251, 212, 55)",
          "rgb(242, 99, 123)",
          "rgb(151, 95, 229)"
        ],
        legend: {
          orient: "vertical",
          x: "right",
          y: "center",
          data: [
            "家用电器",
            "食用酒水",
            "个护健康",
            "服饰箱包",
            "母婴产品",
            "其他"
          ],
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 20 // 设置间距
        },
        grid: {
          position: ""
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "65%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 28.79, name: "家用电器" },
              { value: 21.04, name: "食用酒水" },
              { value: 19.73, name: "个护健康" },
              { value: 14.73, name: "服饰箱包" },
              { value: 7.8, name: "母婴产品" },
              { value: 7.8, name: "其他" }
            ],
            itemStyle: {
              // 饼图白色间隙
              normal: {
                borderWidth: 4,
                borderColor: "#ffffff"
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      let optionOnline = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}%",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        color: [
          "rgb(58, 161, 255)",
          "rgb(54, 203, 203)",
          "rgb(78, 203, 115)",
          "rgb(251, 212, 55)",
          "rgb(242, 99, 123)",
          "rgb(151, 95, 229)"
        ],
        legend: {
          orient: "vertical",
          x: "right",
          y: "center",
          data: [
            "家用电器",
            "食用酒水",
            "个护健康",
            "服饰箱包",
            "母婴产品",
            "其他"
          ],
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 20 // 设置间距
        },
        grid: {
          position: "center"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "65%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              // 饼图白色间隙
              normal: {
                borderWidth: 4,
                borderColor: "#ffffff"
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              { value: 21.24, name: "家用电器" },
              { value: 27.94, name: "食用酒水" },
              { value: 27.07, name: "个护健康" },
              { value: 3.57, name: "服饰箱包" },
              { value: 10.53, name: "母婴产品" },
              { value: 9.66, name: "其他" }
            ]
          }
        ]
      };
      let optionshop = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}%",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        color: [
          "rgb(58, 161, 255)",
          "rgb(54, 203, 203)",
          "rgb(78, 203, 115)",
          "rgb(251, 212, 55)",
          "rgb(242, 99, 123)",
          "rgb(151, 95, 229)"
        ],
        legend: {
          orient: "vertical",
          x: "right",
          y: "center",
          data: [
            "家用电器",
            "食用酒水",
            "个护健康",
            "服饰箱包",
            "母婴产品",
            "其他"
          ],
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 20 // 设置间距
        },
        grid: {
          position: "center"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "65%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              // 饼图白色间隙
              normal: {
                borderWidth: 4,
                borderColor: "#ffffff"
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: [
              { value: 21.24, name: "家用电器" },
              { value: 27.94, name: "食用酒水" },
              { value: 27.07, name: "个护健康" },
              { value: 3.57, name: "服饰箱包" },
              { value: 10.53, name: "母婴产品" },
              { value: 9.66, name: "其他" }
            ]
          }
        ]
      };
      SearchUsersChart.setOption(optionSearchUsers);
      SearchNumberChart.setOption(optionSearchNumber);
      AllChannelsChart.setOption(optionAllChannels);
      OnlineChart.setOption(optionOnline);
      shopChart.setOption(optionshop);

      setTimeout(() => {
        /*窗口自適應，關鍵代碼*/
        window.onresize = function() {
          SearchUsersChart.resize();
          SearchNumberChart.resize();
          AllChannelsChart.resize();
          OnlineChart.resize();
          shopChart.resize();
        };
      },100);
    },
    // 获取历史记录信息
    handleListApproveHistory() {
      // 保存取到的所有数据
      this.ajaxHistoryData = testData.histories;
      this.dataCount = testData.histories.length;
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (testData.histories.length < this.pageSize) {
        this.historyData = this.ajaxHistoryData;
      } else {
        this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.historyData = this.ajaxHistoryData.slice(_start, _end);
    }
  },

  created() {
    this.handleListApproveHistory();
  }
};
</script>

<style scoped>
.saleroom .ivu-tabs-nav-wrap {
  text-align: right;
}

.saleroom .ivu-tabs-nav-scroll {
  display: inline-block;
  vertical-align: bottom;
}
.turnover .in .li {
  list-style: none;
  height: 22px;
  margin-bottom: 10px;
}

.i {
  margin-right: 10px;
}

.saleroom .saleroom-title {
  position: absolute;
  top: 40%;
  left: 45%;
}

.saleroom .saleroom-content {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.saleroom .saleroom-num {
  font-size: 23px;
  color: rgba(0, 0, 0, 0.45);
  margin-left: -20px;
}

.SearchUsers {
  height: 44px;
  line-height: 44px;
}

.SearchUsers .num {
  font-size: 25px;
  color: #333;
  margin-right: 20px;
}
</style>
