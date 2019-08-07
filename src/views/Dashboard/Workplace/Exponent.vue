<template>
  <div>
    <Col span="24">
      <div class="zs">
        <div class="in">
          <div class="top">
            <span>XX 指数</span>
          </div>
          <div class="index">
            <Row>
              <Col span="24">
                <div id="mainld" style="width:100%;height:300px;"></div>
              </Col>
            </Row>
            <div class="ld">
              <div class="nums">34</div>
              <div class="nums">22</div>
              <div class="nums">23</div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.drawChartld();
    });
  },
  methods: {
    drawChartld() {
      let myChartld = this.$echarts.init(document.getElementById("mainld"));
      let optionld = {
        tooltip: {},
        color: ["rgb(101, 181, 255)", "rgb(250, 204, 20)", "rgb(47, 194, 91)"],
        legend: {
          data: ["个人", "团队", "部门"],
          x: "center",
          y: "bottom",
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 65 // 设置间距
        },
        grid: {
          position: "center"
        },
        radar: {
          //  shape: 'circle',
          splitNumber: 6,
          name: {
            textStyle: {
              color: "#333"
            }
          },
          indicator: [
            { name: "引用", max: 10 },
            { name: "热度", max: 10 },
            { name: "贡献", max: 10 },
            { name: "产量", max: 10 },
            { name: "口碑", max: 10 }
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ccc",
              type: "dashed"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#ccc", // 设置网格的颜色
              type: "dashed",
              shape: "circle"
            }
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: "rgba(255,0,0,0)" // 图表背景的颜色
            }
          }
        },

        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",

            // areaStyle: {normal: {}},
            data: [
              {
                value: [10, 7, 5, 4, 8],
                name: "个人",
                lineStyle: {
                  normal: {
                    color: "rgb(101, 181, 255)"
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: "rgb(101, 181, 255)"
                  }
                }
              },
              {
                value: [3, 1, 3, 6, 9],
                name: "团队",
                lineStyle: {
                  normal: {
                    color: "rgb(250, 204, 20)"
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: "rgb(250, 204, 20)"
                  }
                }
              },
              {
                value: [4, 7, 5, 6, 1],
                name: "部门",
                lineStyle: {
                  normal: {
                    color: "rgb(47, 194, 91)"
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: "rgb(47, 194, 91)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChartld.setOption(optionld);
      window.addEventListener("resize", () => {
        myChartld.resize();
      });
    }
  }
};
</script>

<style scoped>
.ld {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
}
.ld .nums {
  font-size: 20px;
  color: #333;
  font-weight: 600;
}
.zs {
  padding: 12px;
}
.zs .in {
  background: #fff;
}
.zs .in .top {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: #333;
}
</style>
