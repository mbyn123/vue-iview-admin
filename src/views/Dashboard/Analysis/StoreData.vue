<template>
  <Row >
    <div style="background: #fff;">
      <Tabs value="销售额">
        <TabPane label="销售额" name="销售额">
          <div class="main">
            <Row>
              <Col :xs="24" :sm="24" :md="12" :lg='16' :xl="16" :xxl="16" style="padding:5px 20px 30px 20px;">
                <div id="salestrend" style="width: 100%;height:254px;"></div>
              </Col>
              <Col :xs="24" :sm="24" :md="12" :lg='8' :xl="8" :xxl="8">
                <div class="Turnover" style="padding:10px 20px 20px 70px">
                  <div style="font-size: 14px;color:#333;margin-bottom: 20px">门店销售额排名</div>
                  <div>
                    <div v-for="value in ranking" :key="value.id" style="margin-bottom: 10px">
                      <div style="display:flex;justify-content: space-between">
                        <div style="font-size: 14px;color:#333">
                          <span :class="fun(value)">{{value.num}}</span>
                          <span style="margin-left: 10px">{{value.title}}</span>
                        </div>
                        <div style="font-size: 14px;color:#333">
                          <span>{{value.money}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="访问量" name="访问量">
          <Row>
            <Col :xs="24" :sm="24" :md="12" :lg='16' :xl="16" :xxl="16" style="padding:5px 20px 30px 20px;">
              <div id="Traffictrend" style="width: 100%;height:254px;"></div>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg='8' :xl="8" :xxl="8">
              <div class="Turnover" style="padding:10px 20px 20px 70px">
                <div style="font-size: 14px;color:#333;margin-bottom: 20px">门店销售额排名</div>
                <ul>
                  <li v-for="value in ranking" :key="value.id" style="margin-bottom: 10px">
                    <div style="display:flex;justify-content: space-between">
                      <div style="font-size: 14px;color:#333">
                        <span :class="fun(value)">{{value.num}}</span>
                        <span style="margin-left: 10px">{{value.title}}</span>
                      </div>
                      <div style="font-size: 14px;color:#333">
                        <span>{{value.money}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      ranking: [
        {
          num: "1",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "2",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "3",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "4",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "5",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "6",
          title: "工专路 0 号店",
          money: "323,234"
        },
        {
          num: "7",
          title: "工专路 0 号店",
          money: "323,234"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.salestrendChart();
      this.TraffictrendChart();
    });
  },
  methods: {
    fun(i) {
      if (i.num === "1") {
        return "fxico";
      } else if (i.num === "2") {
        return "fxico";
      } else if (i.num === "3") {
        return "fxico";
      } else {
        return "fxicoS";
      }
    },
    salestrendChart() {
      // 基于准备好的dom，初始化echarts实例
      let salestrendChart = this.$echarts.init(document.getElementById("salestrend"));
      // 指定图表的配置项和数据
      let optionsalestrend = {
        color: ["#3398DB"],
        title: {
          text: "销售趋势",
          textStyle: {
            fontSize: "14",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none" // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "#ccc" //设置x轴坐标线颜色
              }
            },
            axisLabel: {
              textStyle: {
                color: "#333" //设置x轴坐标字体颜色
                // fontSize:'14px'
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "deshed" //设置刻度线虚线
              }
            },
            axisLine: {
              show: false, //隐藏y坐标轴线
              lineStyle: {
                color: "#ccc" //设置y轴坐标线颜色
              }
            },
            axisLabel: {
              textStyle: {
                color: "#333" //设置y轴坐标字体颜色
                // fontSize:'14px'
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "50%",
            itemStyle: {
              normal: {
                color: "rgb(88, 175, 255)"
              }
            },
            data: [532, 1092, 449, 746, 448, 209, 1131, 462, 848, 218, 702, 803]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      salestrendChart.setOption( optionsalestrend);
      window.addEventListener("resize", () => {
        salestrendChart.resize();
      });
    },
    TraffictrendChart() {
      // 基于准备好的dom，初始化echarts实例
      let TraffictrendChart = this.$echarts.init(document.getElementById("Traffictrend"));
      // 指定图表的配置项和数据
      let optionTraffictrend = {
        color: ["#3398DB"],
        title: {
          text: "访问量趋势",
          textStyle: {
            fontSize: "14",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none" // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "#ccc" //设置x轴坐标线颜色
              }
            },
            axisLabel: {
              textStyle: {
                color: "#333" //设置x轴坐标字体颜色
                // fontSize:'14px'
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "deshed" //设置刻度线虚线
              }
            },
            axisLine: {
              show: false, //隐藏y坐标轴线
              lineStyle: {
                color: "#ccc" //设置y轴坐标线颜色
              }
            },
            axisLabel: {
              textStyle: {
                color: "#333" //设置y轴坐标字体颜色
                // fontSize:'14px'
              }
            }
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "50%",
            itemStyle: {
              normal: {
                color: "rgb(88, 175, 255)"
              }
            },
            data: [532, 1092, 449, 746, 448, 209, 1131, 462, 848, 218, 702, 803]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      TraffictrendChart.setOption(optionTraffictrend);
      window.addEventListener("resize", () => {
       TraffictrendChart.resize();
      });
    }
  }
};
</script>

<style scoped>
.fxicoS {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  background: #fff;
  color: #333;
  border-radius: 50%;
}

.fxico {
  display: inline-block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  background: #333;
  color: #fff;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.data {
  margin: 0px 20px -50px 0;
}

.data .nav {
  display: inline-block;
}

.data .nav a {
  display: inherit;
  margin-right: 25px;
  font-size: 14px;
  color: #333;
}

.data .nav span:hover {
  color: #2d8cf0;
}

.data .time {
  display: inline-block;
}

</style>
