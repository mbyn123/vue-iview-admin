<template>
     <Row  gutter="16">
            <Col span="6">
              <div style="background: white;padding:20px;">
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>总销售额</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">¥ 126,560</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;line-height:46px;">
                  <span>周同比</span>
                  <span style="color:black;margin-right:20px">12% <Icon type="md-arrow-dropup" color="red"/></span>
                  <span>日同比</span>
                  <span style="color:black">11% <Icon type="md-arrow-dropdown" color="green"/></span>
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>日销售额</span>
                  <span>￥ 12,423</span>
                </div>
              </div>
            </Col>
            <Col span="6">
                 <div style="background: white;padding:20px; ">
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>访问量</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">8,846</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                 <Row>
                     <Col span="24">

                         <div id="main3" style="width:100%;height:45px;"></div>

                     </Col>
                 </Row>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>日访问量</span>
                  <span>1,234</span>
                </div>
                 </div>
            </Col>
            <Col span="6">
               <div style="background: white;padding:20px;">
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>支付笔数</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">6,560</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                   <Row>
                       <Col span="24">
                           <div style="max-width: 100%;">
                           <div id="main2" style="width:100%;height:45px;"></div>
                           </div>
                       </Col>
                   </Row>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>转化率</span>
                  <span>60%</span>
                </div>
               </div>
            </Col>
            <Col span="6">
              <Card shadow>
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>访问量</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">78%</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;">
                  <Progress :percent="78" :stroke-width="7" stroke-color="#19be6b"/>
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>周同比</span>
                  <span style="color:black;margin-right:20px">12%<Icon type="md-arrow-dropup" color="red"/></span>
                  <span>日同比</span>
                  <span style="color:black">11% <Icon type="md-arrow-dropdown" color="green"/></span>
                </div>
              </Card>
            </Col>

     </Row>
</template>

<script>
export default {
    mounted() {
        setTimeout(()=>{
            this.drawChart();
        })
    },
  methods:{
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
        let myChart116 = this.$echarts.init(document.getElementById("main2"));
        let myChartPV = this.$echarts.init(document.getElementById("main3"));
      // 指定图表的配置项和数据
        let option116 = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor:'#ffffff',
          textStyle:{
            color:'black'
          }
        },
        grid: {
            x: -35,
            y: 0,
            x2:0,
            y2:-10 ,
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['2019-07-13', '2019-07-14', '2019-07-15', '2019-07-16', '2019-07-17', '2019-07-18', '2019-07-17',
              '2019-07-18', '2019-07-19', '2019-07-20', '2019-07-21', '2019-07-22', '2019-07-23', '2019-07-24',
              '2019-07-25', '2019-07-26', '2019-07-27'],
            axisTick: {
              alignWithLabel: true
            },
            show:false
          }
        ],
        yAxis : [
          {
            type: 'value',
            show:false
          }
        ],
        series : [
          {
            name:"",
            type:'bar',
            barWidth: '50%',
            itemStyle:{
              normal:{
                color:'rgb(88, 175, 255)'
              }
            },
            data:[532, 192, 449, 746, 448, 209, 131,462, 848, 218, 702, 803, 209, 431,462, 848, 818,555],
          }
        ]
      };
        let optionPV = {
            grid: {
                x: -20,
                y: 0,
                x2:2,
                y2:-10 ,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show:false//隐藏x坐标轴
            },
            yAxis: {
                type: 'value',
                show:false//隐藏y坐标轴
            },
            tooltip:{
                trigger: 'item',
                backgroundColor:'#ffffff',
                textStyle:{
                    color:'black'
                }
            },
            series: [{
                data: [20, 22, 15, 26, 24, 8, 10,20, 22, 15, 26, 24, 8, 10,20, 22, 15, 26, 24, 8, 10],
                type: 'line',
                //symbol: "circle",//实心圆
                areaStyle: {},
                smooth: true ,//圆滑曲线true
                //    showSymbol: false,
                // symbol:'none',//隐藏圆点
                itemStyle: {
                    normal: {
                        color: "rgb(105, 12, 232)",
                        lineStyle: {
                            color: "rgb(151, 95, 228)"
                        }
                    }
                },
            }]
        };
      // 使用刚指定的配置项和数据显示图表。
        myChartPV.setOption(optionPV);
        window.addEventListener("resize", () => { myChartPV.resize();});

        myChart116.setOption(option116);
        window.addEventListener("resize", () => { myChart116.resize();});
    },
  },

}
</script>

<style>
    *{margin:0;padding: 0;}

</style>
