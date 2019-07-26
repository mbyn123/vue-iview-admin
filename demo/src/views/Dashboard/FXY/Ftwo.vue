<template>
  <Row style="margin-top:20px; ">
    <Col span="24"  >
          <div class="clearfix"> 
              <div class="data" >
                 <div class="nav">
                <a href="#">
                  <span>本日</span>
                </a>
                <a href="#">
                  <span>本周</span>
                </a>
                <a href="#">
                  <span>本月</span>
                </a>
                <a href="#">
                  <span>全年</span>
                </a>
              </div>
              <div class="time">
                <DatePicker
                  type="daterange"
                  placement="bottom-end"
                  placeholder="2019-01-01 ~ 2019-12-01"
                  style="width: 200px"
                ></DatePicker>
              </div>        
            </div>
          </div>

         <Tabs value="name1" >
          <TabPane label="销售额" name="name1">
            <div class="main">
              <Row >
                   <Col span="18" style="padding:20px;">

                       <div id="main" style="width: 100%;height:254px;"></div>

                   </Col>
                    <Col span="6" >
                    <div class="Turnover" >     
                    <h4 >门店销售额排名</h4>
                    <ul >
                        <li>
                            <span >1</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >2</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >3</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >4</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >5</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >6</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >7</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                    </ul>
                     </div>
                         </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane label="访问量" name="name2">
                 <div class="main">
              <Row >
                   <Col span="18" style="padding:20px;">
                        <h4 >销售趋势</h4>
                        <img src="http://ptt5and7y.bkt.clouddn.com/3.png" alt="" style="wdith:1000px;height:300px;object-fit:cover;">
                         </Col>
                         <Col span="6" >
                    <div class="Turnover" >     
                    <h4 >门店销售额排名</h4>
                    <ul >
                        <li>
                            <span >1</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >2</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >3</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >4</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >5</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >6</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                        <li>
                            <span >7</span>
                            <span>工专路 0 号店</span>
                            <span>323,234</span>
                        </li>
                    </ul>
                     </div>
                         </Col>
              </Row>
            </div> 
          </TabPane>
        </Tabs>
        </Col>
      </div> 

  </Row>
</template>

<script>
export default {
    methods:{
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            let myChart13 = this.$echarts.init(document.getElementById("main"));
            // 指定图表的配置项和数据
            let option13 = {
                color: ['#3398DB'],
                title: {
                    text: '销售趋势',
                    textStyle:{
                        fontSize:'16px'
                    }
                },
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
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisTick: {
                            alignWithLabel: true
                        },
                       axisLine:{
                            lineStyle:{
                                color:"#ccc"//设置x轴坐标线颜色
                            }
                       },
                        axisLabel:{
                            textStyle:{
                                color:"black",//设置x轴坐标字体颜色
                               // fontSize:'14px'
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{
                            lineStyle:{
                                type:"deshed"//设置刻度线虚线
                            }
                        },
                        axisLine:{show:false,//隐藏y坐标轴线
                            lineStyle:{
                                color:"#ccc"//设置y轴坐标线颜色
                            }
                        },
                        axisLabel:{
                            textStyle:{
                                color:"black",//设置y轴坐标字体颜色
                               // fontSize:'14px'
                            }
                        }

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
                        data:[532, 1092, 449, 746, 448, 209, 1131,462, 848, 218, 702, 803],
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart13.setOption(option13,window.onresize = myChart13.resize)

        },
    },
    mounted() {
        this.drawChart();
    }
};
</script>

<style>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.data{
   float:right;
  margin:0px 20px  -50px 0;
}

.data .nav {
  display: inline-block;
}
.data .nav a {
  display: inherit;
  margin-right: 25px;
  font-size: 14px;
  color: black;
}

.data .time {
  display: inline-block;
 
}

.datas span {
  margin-right: 26px;
}

.main ul li{
    list-style: none;
      margin-top:22px;

}

.main  ul li span{
    display: inline-block;
}


.Turnover{

padding:20px;
}

.main  ul li span:nth-child(1) {
    width:20px;
    height:20px;
    text-align: center;
}

.main  ul li:nth-child(3) span:nth-child(1),
.main  ul li:nth-child(2) span:nth-child(1),
.main  ul li:nth-child(1) span:nth-child(1){
    border-radius: 50%; 
    background: rgb(49,70,89);
    color:white;
}

.main  ul li span:nth-child(2){
margin-left:20px;
width:250px;
}

h4{
  font-size:14px;
  color:block;

}
</style>
