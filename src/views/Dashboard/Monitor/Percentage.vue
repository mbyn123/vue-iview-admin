<template>
  <div>
    <Row>
      <Col span="12">
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
      <Col span="6">
        <div class="hot-search">
          <div class="in">
            <div class="top">
              <span>热门搜索</span>
            </div>
            <div class="imgs">
              <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD8.png" alt />
            </div>
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="resource">
          <div class="in">
            <div class="top">
              <span>资源剩余</span>
            </div>
            <div id="liquidFill" style="width:100% ;height:210px"></div>
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
    });
  },
  methods: {
    liquidFillChart() {
      let liquidFillChart = this.$echarts.init(document.getElementById("liquidFill"));
      let optionliquidFill = {
        series: [
          {
            type: "liquidFill",
            data: [0.34],
            radius: "80%",
            outline: {
              //    show: true , //是否显示轮廓 布尔值
              borderDistance: 0, //外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: "rgb(65, 164, 255)", //边框的颜色
                borderWidth: 4 //边框的宽度
                //   shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                //  shadowColor: '#000' //外部轮廓的阴影颜色
              }
            },
            backgroundStyle: {
              color: "#fff" //图表的背景颜色
            },
            color: ["rgb(65, 164, 255)"],
            waveLength: "90%",
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
    }
  }
};
</script>

<style>
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
