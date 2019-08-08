<template>
  <div>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" :xxl="12">
        <div class="category">
          <div class="in">
            <div class="top">
              <span>各品类占比</span>
            </div>
            <div class="huan">
              <Row>
                <Col span="8" v-for="value in   parameter" :key="value.id">
                  <div class="one">
                    <i-Circle
                      :percent="value .num1"
                      :size="120"
                      :stroke-width="10"
                      :trail-width="10"
                      stroke-linecap="square"
                      :stroke-color="value .color"
                    >
                      <span class="demo-Circle-inner" style="font-size:24px">{{value .title}}</span>
                    </i-Circle>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" :xxl="6">
        <div class="hot-search">
          <div class="in">
            <div class="top">
              <span>热门搜索</span>
            </div>
            <div id="main7" style="width:100%;height:210px;"></div>
          </div>
        </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" :xxl="6">
        <div class="resource">
          <div class="in">
            <div class="top">
              <span>资源剩余</span>
            </div>
            <Row>
              <Col span="24">
                <div id="liquidFill" style="width:100% ;height:210px;"></div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import "echarts-liquidfill/src/liquidFill.js";
export default {
  data() {
    return {
      parameter: [
        {
          title: "28%",
          num1: 28,
          color: "#2d8cf0"
        },
        {
          title: "22%",
          num1: 22,
          color: "#2db7f5"
        },
        {
          title: "32%",
          num1: 32,
          color: "#19be6b"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.liquidFillChart();
      this.cloudchart();
    });
  },
  methods: {
    liquidFillChart() {
      let liquidFillChart = this.$echarts.init(
        document.getElementById("liquidFill")
      );
      let optionliquidFill = {
        series: [
          {
            type: "liquidFill",
            data: [0.34],
            radius: "80%",
            //  center: ['60%', '50%'],
            outline: {
              //    show: true , //是否显示轮廓 布尔值
              borderDistance: 0, //外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: "rgb(65, 164, 255)", //边框的颜色
                borderWidth: 6 //边框的宽度
                //   shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                //  shadowColor: '#000' //外部轮廓的阴影颜色
              }
            },
            backgroundStyle: {
              color: "#fff" //图表的背景颜色
            },
            color: ["rgb(65, 164, 255)"],
            waveLength: "100%",
            amplitude: 9, //振幅
            label: {
              normal: {
                textStyle: {
                  color: "#333",
                  fontSize: 20
                }
              }
            }
          }
        ]
      };

      liquidFillChart.setOption(optionliquidFill);
       window.addEventListener("resize", () => {
        liquidFillChart.resize();
      });
    },
    cloudchart() {
      let myChart7 = this.$echarts.init(document.getElementById("main7"));

      let option7 = {
        // title: {
        //   text: "词云图"
        // },
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 10,
            sizeRange: [10, 16],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                fontSize: 20,
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: [
              {
                name: "上海",
                value: 200
                // textStyle: {
                //   normal: {
                //     color: "black"
                //   },
                //   emphasis: {
                //     color: "red"
                //   }
                // }
              },
              {
                name: "定西市",
                value: 618
              },
              {
                name: "克拉玛依市",
                value: 243
              },
              {
                name: "淮安市",
                value: 305
              },
              {
                name: "三亚市",
                value: 246
              },
              {
                name: "惠州市",
                value: 224
              },
              {
                name: "临夏回族自治州",
                value: 289
              },
              {
                name: "广州市",
                value: 248
              },
              {
                name: "苏州市",
                value: 111
              },
              {
                name: "德阳市",
                value: 196
              },
              {
                name: "赣州市",
                value: 184
              },
              {
                name: "海口市",
                value: 158
              },
              {
                name: "海东市",
                value: 255
              },
              {
                name: "百色市",
                value: 550
              },
              {
                name: "株洲市",
                value: 46
              },
              {
                name: "秦皇岛市",
                value: 366
              },
              {
                name: "延安市",
                value: 361
              },
              {
                name: "保山市",
                value: 282
              },
              {
                name: "北京市",
                value: 273
              },
              {
                name: "雅安市",
                value: 265
              },
              {
                name: "日照市",
                value: 36
              },
              {
                name: "攀枝花市",
                value: 282
              },
              {
                name: "资阳市",
                value: 273
              },

              {
                name: "株洲市",
                value: 360
              },
              {
                name: "泉州市",
                value: 282
              },
              {
                name: "武汉市",
                value: 273
              },
              {
                name: "长治县",
                value: 265
              },
              {
                name: "资阳市",
                value: 273
              },
              {
                name: "海南藏族自治州",
                value: 260
              },
              {
                name: "株洲市",
                value: 360
              },
              {
                name: "泉州市",
                value: 282
              },
              {
                name: "武汉市",
                value: 273
              },
              {
                name: "长治县",
                value: 265
              },
              {
                name: "海南市",
                value: "100"
              }
            ]
          }
        ]
      };
      myChart7.setOption(option7);
      window.addEventListener("resize", () => {
        myChart7.resize();
      });
    }
  }
};
</script>

<style scoped>
.category {
  padding: 20px 12px 0 12px;
}
.category .in {
  background: #fff;
}

.category .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.category .in .top {
  font-size: 16px;
  color: #333;
}

.category .huan .one {
  text-align: center;
  padding: 50px 0 40px 0;
}

.hot-search {
  padding: 20px 12px 0 12px;
}
.hot-search .in {
  background: #fff;
}

.hot-search .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.hot-search .in .top {
  font-size: 16px;
  color: #333;
}

.hot-search .in .imgs {
  text-align: center;
  padding-top: 11px;
}

.resource {
  padding: 20px 12px 0 12px;
}

.resource .in {
  background: #fff;
}

.resource .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.resource .in .top {
  font-size: 16px;
  color: #333;
}

.resource .in .imgs {
  text-align: center;
  padding: 25px 0;
}
</style>
