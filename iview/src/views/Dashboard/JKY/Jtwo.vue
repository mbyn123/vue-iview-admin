<template>
  <div>
    <Row>
      <Col span="12">
        <div class="cardone">
          <div class="in">
            <div class="top">
              <span>各品类占比</span>
            </div>
            <div class="huan">
              <Row>
                <Col span="8" v-for="(par,index) in   parameter" :key="index">
                  <div class="one">
                    <i-Circle
                      :percent=par.num1
                      :size="120"
                      :stroke-width="10"
                      :trail-width="10"
                      stroke-linecap="square"
                      :stroke-color=par.color
                    >
                      <span class="demo-Circle-inner" style="font-size:24px">{{par.title}}</span>
                    </i-Circle>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="cardtwo">
          <div class="in">
              <div class="top">
                  <span>
                      热门搜索
                  </span>
              </div>
              <div class="imgs">
                  <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD8.png" alt="">
              </div>
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="cardthree">
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
    data(){
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
                },
            ],

        }
    },
    methods:{
        drawChart12(){
            let myChart12  = this.$echarts.init(document.getElementById("liquidFill"));
            let option12 = {
                series: [{
                    type: 'liquidFill',
                    data: [0.34],
                    radius: '80%',
                    outline: {
                    //    show: true , //是否显示轮廓 布尔值
                        borderDistance: 0, //外部轮廓与图表的距离 数字
                        itemStyle:{
                            borderColor:'rgb(65, 164, 255)', //边框的颜色
                            borderWidth: 2,  //边框的宽度
                         //   shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                          //  shadowColor: '#000' //外部轮廓的阴影颜色
                        }
                    },
                    backgroundStyle: {
                        color:'#fff',//图表的背景颜色
                    },
                    color: ['rgb(65, 164, 255)'],
                    waveLength:'90%',
                    amplitude: 9,//振幅
                    label: {
                        normal: {
                            textStyle: {
                                color: '#333',
                                fontSize: 20
                            }
                        }
                    }
                }]
            };

            myChart12.setOption(option12);


        }
    },
    mounted() {
        this.drawChart12();
    }
};
</script>

<style>
.cardone {
  padding: 0 12px;
  margin-top: 20px;
}
.cardone .in {
  background: #fff;
}

.cardone .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.cardone .in .top span {
  font-size: 16px;
  color: black;
}


.cardone .huan .one {
  text-align: center;
  padding:50px 0 40px 0;
}

.cardtwo {
  padding: 0 12px;
  margin-top: 20px;
}
.cardtwo .in {
  background: #fff;
}

.cardtwo .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.cardtwo .in .top span {
  font-size: 16px;
  color: black;
}

.cardtwo .in .imgs{
    text-align: center;
    padding-top: 11px ;
}

.cardthree {
  padding: 0 12px;
  margin-top: 20px;
}

.cardthree .in {
  background: #fff;
}

.cardthree .in .top {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.cardthree .in .top span {
  font-size: 16px;
  color: black;
}

.cardthree .in .imgs{
    text-align: center;
     padding: 25px 0;
}


</style>
