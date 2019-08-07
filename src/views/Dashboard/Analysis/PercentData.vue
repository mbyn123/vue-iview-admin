<template>
  <div>
    <Row>
      <Col span="24">
        <div style="background:#fff;">
          <div class="stores">
            <span class="next" @click="shang">
              <Icon type="ios-arrow-back" color="#ccc" />
            </span>
            <div class="inner">
              <div class="tabs" :style="style">
                <div class="tab" v-for="tabs in tabsarr" :key="tabs.id">
                  <div class="topic">
                    <div class="topic-title">{{tabs.title}}</div>
                    <div class="topic-efficiency">转化率</div>
                    <div class="topic-num">{{tabs.num1}}</div>
                  </div>
                  <div class="huan">
                    <i-Circle
                      :percent="tabs.num2"
                      :size="40"
                      :stroke-width="20"
                      :trail-width="20"
                      stroke-linecap="square"
                    ></i-Circle>
                  </div>
                </div>
              </div>
            </div>
            <span class="last" @click="xia">
              <Icon type="ios-arrow-forward" color="#ccc" />
            </span>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="24" style="background: #fff;">
        <div style="max-width:100%">
          <div id="footfall" style="width:100% ;height:400px"></div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: "transform: translate3d(0px, 0px, 0px);",

      tabsarr: [
        {
          title: "Stores1",
          num1: "80%",
          num2: 80
        },
        {
          title: "Stores2",
          num1: "40%",
          num2: 40
        },
        {
          title: "Stores3",
          num1: "40%",
          num2: 40
        },
        {
          title: "Stores4",
          num1: "60%",
          num2: 60
        },
        {
          title: "Stores5",
          num1: "50%",
          num2: 50
        },
        {
          title: "Stores6",
          num1: "60%",
          num2: 60
        },
        {
          title: "Stores7",
          num1: "90%",
          num2: 90
        },
        {
          title: "Stores8",
          num1: "30%",
          num2: 30
        },
        {
          title: "Stores9",
          num1: "70%",
          num2: 70
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.footfalldrawChart();
    });
  },
  methods: {
    shang() {
      this.style = "transform: translate3d(0px, 0px, 0px);";
    },
    xia() {
      this.style = "transform: translate3d(-300px, 0px, 0px);";
    },
    footfalldrawChart() {
      window.addEventListener("resize", () => {
        footfallChart.resize();
      });
      let footfallChart = this.$echarts.init(
        document.getElementById("footfall")
      );

      let optionfootfall = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "#333"
          }
        },
        xAxis: {
          type: "category",
          data: [
            "16:12",
            "",
            "17:12",
            "",
            "18:12",
            "",
            "19:12",
            "",
            "20:12",
            "",
            "21:12",
            "",
            "22:12",
            "",
            "23:12",
            "",
            "00:12",
            ""
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 100,
            startValue: "15:12",
            endValue: "00:42"
          },

          {
            type: "inside",
            xAxisIndex: [0],
            start: 1,
            end: 100,
            startValue: "15:12",
            endValue: "00:42"
          }
        ],
        yAxis: {
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
        },
        legend: {
          x: "center",
          data: ["客流量", "支付笔数"],
          icon: "rect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 2.5, // 设置高度
          itemGap: 10 // 设置间距
        },

        series: [
          {
            name: "客流量",
            data: [
              85,
              11,
              32,
              23,
              97,
              30,
              79,
              48,
              49,
              34,
              35,
              36,
              27,
              15,
              100,
              107,
              20,
              86,
              55
            ],
            type: "line",
            showSymbol: false,
           
            symbol: "none", //隐藏圆点,
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            }
          },
          {
            name: "支付笔数",
            data: [
              63,
              46,
              33,
              52,
              84,
              109,
              81,
              29,
              84,
              103,
              89,
              100,
              68,
              82,
              97,
              17,
              32,
              34,
              98
            ],
            type: "line",
            itemStyle: {
              normal: {
                color: "#2fc25b",
                lineStyle: {
                  color: "#2fc25b"
                }
              }
            }
          }
        ]
      };
      footfallChart.setOption(optionfootfall);
    }
  }
};
</script>

<style scoped>
.stores {
  position: relative;
  padding: 20px 50px 0 50px;
}

.stores .inner {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}

.stores .next {
  display: inline-block;

  position: absolute;
  top: 45%;
  left: 30px;
  cursor: pointer;
}

.stores .last {
  display: inline-block;

  position: absolute;
  right: 30px;
  top: 45%;
  cursor: pointer;
}

.stores .inner .tabs {
  display: inline-block;
  overflow: hidden;
  transition: 0.3s;
}

.stores .inner .tab {
  display: inline-block;
  margin-right: 80px;
}

.stores .inner .tab .topic {
  display: inline-block;
}
.stores .inner .tab .huan {
  display: inline-block;
  margin-left: 30px;
}

.stores .inner .tab .topic .topic-title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 16px;
}

.stores .inner .tab .topic .topic-efficiency {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.stores .inner .tab .topic .topic-num {
  color: #333;
  font-size: 24px;
}
</style>

