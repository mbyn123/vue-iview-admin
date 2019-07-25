<template>
  <div>
    <Row>
      <Col span="18">
        <div class="bigcard">
          <div class="in">
            <div class="top">
              <span>活动实时交易情况</span>
            </div>
            <div>
              <div class="jy">
                <Row>
                  <Col span="6" v-for="(jy,index) in jyarr" :key="index">
                    <div class="wen">
                      <div class="p1">{{jy.title}}</div>
                      <div class="p2">{{jy.num}}</div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div class="cardimg">
                <img src="http://ptt5and7y.bkt.clouddn.com/HBWnDEUXCnGnGrRfrpKa.png" alt />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="scard1">
          <div class="in">
            <div class="top">
              <span>活动情况预测</span>
            </div>
            <div class="tb">
              <div class="pp">
                <div class="p1">目标评估</div>
                <div class="p2">有望达到预期</div>
              </div>
              <div class="money" style="position: relative;">
                <div class="n">1380 亿元</div>
                <div class="n">720 亿元</div>
                <div id="mainhd" style="width:100%;height:200px;  border:1px solid red"></div>
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
        <Col span="6">
          <div class="scard2">
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
      jyarr: [
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
      let myCharthd = this.$echarts.init(document.getElementById("mainhd"));
      let myCharthdBoard = this.$echarts.init(
        document.getElementById("dash-board")
      );
      let optionhd = {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "30%",
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
          backgroundColor: "#ffffff",
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

      myCharthd.setOption(optionhd);
      myCharthdBoard.setOption(optionhdBoard);
      window.addEventListener("resize", () => {
        myCharthd.resize();
      });
      window.addEventListener("resize", () => {
        myCharthdBoard.resize();
      });
    }
  }
};
</script>

<style>
.bigcard {
  padding: 0 12px;
}
.bigcard .in {
  background: #fff;
}

.bigcard .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.bigcard .top span {
  font-size: 16px;
  color: #333;
}

.bigcard .jy {
  padding: 20px;
}

.bigcard .jy .wen {
  display: inline-block;
}

.bigcard .jy .wen .p1 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.bigcard .jy .wen .p2 {
  font-size: 24px;
  color: #333;
}

.bigcard .cardimg {
  height: 452px;
  padding-top: 10px;
  text-align: center;
}

.bigcard .cardimg img {
  display: inline-block;
  max-width: 100%;
  max-height: 437px;
}

.scard1 {
  padding: 0 12px;
}

.scard1 .in {
  background: #fff;
}

.scard1 .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.scard1 .top span {
  font-size: 16px;
  color: #333;
}

.scard1 .tb .time {
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
}

.scard1 .tb .pp {
  padding: 20px;
}

.scard1 .tb .pp .p1 {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.scard1 .tb .pp .p2 {
  color: #333;
  font-size: 24px;
}

.scard1 .tb .money {
  padding: 0 20px 20px 20px;
}

.scard1 .tb .money .n {
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}

.scard2 {
  padding: 20px 12px 0 12px;
  border: 1px solid red;
}

.scard2 .in {
  background: #fff;
}

.scard2 .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.scard2 .top span {
  font-size: 16px;
  color: #333;
}

.scard2 .imgs {
  margin-bottom: 4px;
  height: 200px;
}

.scard2 .imgs .in {
  border: 1px solid red;
  margin: 0 auto;
}

.scard2 .imgs .p {
  width: 100%;
  text-align: center;
}

.scard2 .imgs .p1 {
  font-size: 14px;
}

.scard2 .imgs .p2 {
  font-size: 24px;
  color: #333;
}
</style>
