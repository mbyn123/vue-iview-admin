<template>
  <Row :gutter="16">
    <Col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" :xxl="6">
      <div style="background: #fff;padding:20px;margin-bottom:20px">
        <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
          <div>
            <span>总销售额</span>
          </div>
          <div>
            <span style="font-size:30px;color:#333">¥ 126,560</span>
            <span style="position: absolute;right:4px;top:0px;">
              <Tooltip content="指示说明" placement="top" offset>
                <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
              </Tooltip>
            </span>
          </div>
        </div>
        <div style="height:46px;line-height:46px;">
          <span>周同比</span>
          <span style="color:#333;margin-right:20px">
            12%
            <Icon type="md-arrow-dropup" color="#ed4014" />
          </span>
          <span>日同比</span>
          <span style="color:#333">
            11%
            <Icon type="md-arrow-dropdown" color="rgb(25, 190, 107)" />
          </span>
        </div>
        <div style="border-top:1px solid #ccc;padding-top:10px;">
          <span>日销售额</span>
          <span>￥ 12,423</span>
        </div>
      </div>
    </Col>
    <Col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" :xxl="6">
      <div style="background:#fff ;padding:20px;border:1px solid transparent;margin-bottom:20px">
        <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
          <div>
            <span>访问量</span>
          </div>
          <div>
            <span style="font-size:30px;color:#333">8,846</span>
            <span style="position: absolute;right:4px;top:0px;">
              <Tooltip content="指示说明" placement="top" offset>
                <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
              </Tooltip>
            </span>
          </div>
        </div>

        <Row>
          <Col span="24">
            <div id="Visits" style="width:100%;height:45px;"></div>
          </Col>
        </Row>
        <div style="border-top:1px solid #ccc;padding-top:10px;">
          <span>日访问量</span>
          <span>1,234</span>
        </div>
      </div>
    </Col>
    
    <Col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" :xxl="6">
      <div style="background: #fff;padding:20px;margin-bottom:20px">
        <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
          <div>
            <span>支付笔数</span>
          </div>
          <div>
            <span style="font-size:30px;color:#333">6,560</span>
            <span style="position: absolute;right:4px;top:0px;">
              <Tooltip content="指示说明" placement="top" offset>
                <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
              </Tooltip>
            </span>
          </div>
        </div>
        <Row>
          <Col span="24">
            <div style="max-width: 100%;">
              <div id="FrequencyPayment" style="width:100%;height:45px;"></div>
            </div>
          </Col>
        </Row>
        <div style="border-top:1px solid #ccc;padding-top:10px;">
          <span>转化率</span>
          <span>60%</span>
        </div>
      </div>
    </Col>
    <Col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" :xxl="6">
    <div style="background:#fff;padding:20px">
      <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
        <div>
          <span>访问量</span>
        </div>
        <div>
          <span style="font-size:30px;color:#333">78%</span>
          <span style="position: absolute;right:4px;top:0px;">
            <Tooltip content="指示说明" placement="top" offset>
              <Icon type="ios-alert-outline" size="16" color="#333" class="ico" />
            </Tooltip>
          </span>
        </div>
      </div>
      <div style="height:46px;">
        <Progress :percent="78" :stroke-width="7" stroke-color="#19be6b" />
      </div>
      <div style="border-top:1px solid #ccc;padding-top:10px;">
        <span>周同比</span>
        <span style="color:#333;margin-right:20px">
          12%
          <Icon type="md-arrow-dropup" color="#ed4014" />
        </span>
        <span>日同比</span>
        <span style="color:#333">
          11%
          <Icon type="md-arrow-dropdown" color="rgb(25, 190, 107)" />
        </span>
      </div>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.drawChart();
    },);
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let FrequencyPaymentChart = this.$echarts.init(
        document.getElementById("FrequencyPayment")
      );
      let VisitsmyChart = this.$echarts.init(document.getElementById("Visits"));
      // 指定图表的配置项和数据
      let optionFrequencyPayment = {
        color: ["#3398DB"],
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
          x: -30,
          y: 0,
          x2: 0,
          y2: -10,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2019-07-13",
              "2019-07-14",
              "2019-07-15",
              "2019-07-16",
              "2019-07-17",
              "2019-07-18",
              "2019-07-17",
              "2019-07-18",
              "2019-07-19",
              "2019-07-20",
              "2019-07-21",
              "2019-07-22",
              "2019-07-23",
              "2019-07-24",
              "2019-07-25",
              "2019-07-26",
              "2019-07-27"
            ],
            axisTick: {
              alignWithLabel: true
            },
            show: false
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
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
            data: [
              532,
              192,
              449,
              746,
              448,
              209,
              131,
              462,
              848,
              218,
              702,
              803,
              209,
              431,
              462,
              848,
              818,
              555
            ]
          }
        ]
      };
      let optionVisits = {
        grid: {
          x: -20,
          y: 0,
          x2: 2,
          y2: -10,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ],
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
            data: [
              20,
              22,
              15,
              26,
              24,
              8,
              10,
              20,
              22,
              15,
              26,
              24,
              8,
              10,
              20,
              22,
              15,
              26,
              24,
              8,
              10
            ],
            type: "line",
            //symbol: "circle",//实心圆
            areaStyle: {},
            smooth: true, //圆滑曲线true
            //  symbol:'circle',
            //   showSymbol:false,
            itemStyle: {
              normal: {
                color: "rgb(105, 12, 232)",
                lineStyle: {
                  color: "rgb(151, 95, 228)"
                }
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      VisitsmyChart.setOption(optionVisits);
      window.addEventListener("resize", () => {
        VisitsmyChart.resize();
      });

      FrequencyPaymentChart.setOption(optionFrequencyPayment);
      window.addEventListener("resize", () => {
        FrequencyPaymentChart.resize();
      });
    }
  }
};
</script>

<style scoped>
</style>
