<template>
  <div>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="18" :xxl="18">
        <div class="banner">
          <div class="in">
            <div class="top">
              <span>活动实时交易情况</span>
            </div>
            <div>
              <div class="deal">
                <Row>
                  <Col
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="6"
                    :xl="6"
                    :xxl="6"
                    v-for="deal in dealarr"
                    :key="deal.id"
                  >
                    <div class="wen">
                      <div class="wen-title">{{deal.title}}</div>
                      <div class="wen-num">{{deal.num}}</div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div class="cardimg">
                <img src="../../../assets/deal_images/deal.png" alt />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="6" :xxl="6">
        <div class="forecast">
          <div class="in">
            <div class="top">
              <span>活动情况预测</span>
            </div>
            <div class="tb">
              <div class="target">目标评估</div>
              <div class="expect">有望达到预期</div>
              <div class="money" style="position: relative;">
                <div id="trend" style="width:100%;height:100px;"></div>
                <div style="position: absolute;top:10px">
                  <div class="n">1380 亿元</div>
                  <div class="n">720 亿元</div>
                </div>
                <div class="time">
                  <div>00:00</div>
                  <div>12:00</div>
                  <div>23:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Row>
        <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="6" :xxl="6">
          <div class="efficiency">
            <div class="in">
              <div class="top">
                <span>券核效率</span>
              </div>
              <Row>
                <Col span="24">
                  <div id="dash-board" style="width:100%;height:240px"></div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dealarr: [
        {
          title: "今日交易总额",
          num: "124,543,233元"
        },
        {
          title: "销售目标完成率",
          num: "92%"
        },
        {
          title: "活动剩余时间",
          num: "0"
        },
        {
          title: "每秒交易总额",
          num: "234元"
        }
      ]
    };
  },

  mounted() {
    setTimeout(() => {
      this.drawCharthd();
    });
  },
  methods: {
    drawCharthd() {
      let trendCharthd = this.$echarts.init(document.getElementById("trend"));
      let myCharthdBoard = this.$echarts.init(
        document.getElementById("dash-board")
      );
      let optiontrend = {
        grid: {
          x: -20,
          y: 50,
          x2: 0,
          y2: 0,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false //隐藏x坐标轴
        },
        yAxis: {
          type: "value",
          data: ["11", "12"],
          show: false //隐藏y坐标轴
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "transparency",
          textStyle: {
            color: "#333"
          }
        },
        series: [
          {
            data: [
              10,
              8,
              12,
              14,
              16,
              18,
              16,
              22,
              20,
              24,
              26,
              30,
              35,
              32,
              33,
              35,
              33,
              36,
              34,
              36,
              38,
              39,
              40,
              38
            ],
            type: "line",
            areaStyle: {},
            smooth: true, //圆滑曲线true
            //  showSymbol: false,
            // symbol:'none',隐藏圆点
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
      let optionhdBoard = {
        series: [
          {
            name: "业务指标",
            type: "gauge",
            min: 0, // 最小值
            max: 100, // 最大值
            precision: 10, // 小数精度，默认为0，无小数点
            //  splitNumber: 10,             // 分割段数，默认为5
            detail: { formatter: "{value}%" },
            axisLine: {
              // 坐标轴线(即最外层的圆环)
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, "#2d8cf0"]],
                width: 10
              }
            },
            title: {
              offsetCenter: [0, 40],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#ccc"
              }
            },
            detail: {
              show: true,
              backgroundColor: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "#ccc",
              width: 100,
              height: 40,
              offsetCenter: [0, 70], // x, y，单位px
              formatter: "{value}%",
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#333",
                fontSize: 20
              }
            },
            axisTick: {
              // 控制仪表盘的刻度线样式
              length: 0,
              lineStyle: {
                color: "",
                shadowColor: "", //默认透明
                shadowBlur: 10
              }
            },
            splitLine: {
              // 控制分隔线样式(即表盘上长的刻度线)
              length: 10, // 属性length控制线长
              lineStyle: {
                width: 3,
                color: "transparent",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10 //阴影模糊大小
              }
            },
            axisLabel: {
              // 控制坐标轴刻度的数字样式
              show: true,
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#333"
              },
              formatter: function(v) {
                switch (v + "") {
                  case "20":
                    return "差";
                  case "40":
                    return "中";
                  case "60":
                    return "良";
                  case "80":
                    return "优";
                  default:
                    return "";
                }
              }
            },
            pointer: {
              //控制指针样式
              shadowColor: "#fff", //默认透明
              shadowBlur: 15,
              width: 1, //控制指针宽度
              borderWidth: 100
            },
            data: [{ value: 87.01, name: "跳出率" }]
          }
        ]
      };

      trendCharthd.setOption(optiontrend);
      myCharthdBoard.setOption(optionhdBoard);

      window.addEventListener("resize", () => {
        trendCharthd.resize();
      });
      window.addEventListener("resize", () => {
        myCharthdBoard.resize();
      });
    }
  }
};
</script>

<style scoped>
.banner {
  padding: 0 12px;
}
.banner .in {
  background: #fff;
}

.banner .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.banner .top span {
  font-size: 16px;
  color: #333;
}

.banner .deal {
  padding: 20px;
}

.banner .deal .wen {
  display: inline-block;
}

.banner .deal .wen .wen-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.banner .deal .wen .wen-num {
  font-size: 24px;
  color: #333;
}

.banner .cardimg {
  padding-bottom: 10px;
  text-align: center;
   margin-bottom: 20px
}

.banner .cardimg img {
  display: inline-block;
  max-width: 100%;
  max-height: 437px;
}

.forecast {
  padding: 0 12px;
}

.forecast .in {
  background: #fff;
}

.forecast .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
}

.forecast .top span {
  font-size: 16px;
  color: #333;
}

.forecast .tb .time {
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
}

.forecast .tb {
  padding: 20px;
}

.forecast .tb .target {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.forecast .tb .expect {
  color: #333;
  font-size: 24px;
}

.forecast .tb .money .n {
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}

.efficiency {
  padding: 20px 12px 0 12px;
}

.efficiency .in {
  background: #fff;
}

.efficiency .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.efficiency .top span {
  font-size: 16px;
  color: #333;
}

.efficiency .imgs .in {
  margin: 0 auto;
}
</style>
