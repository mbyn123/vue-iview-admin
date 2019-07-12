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
              <img src="http://ptt5and7y.bkt.clouddn.com/HBWnDEUXCnGnGrRfrpKa.png" alt>
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
            <div class="money">
              <div class="n">1380 亿元</div>
              <div class="n">720 亿元</div>
              <Row>
                <Col span="24">
                  <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD%20%287%29.png" alt>
                  <div class="time">
                    <div>00:00</div>
                    <div>12:00</div>
                    <div>23:00</div>
                  </div>
               
                </Col>
              </Row>
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
                <div class="imgs">
                    <div class="in">  
                  <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD%20%282%29.png" alt>
                  <div class="p">
                    <div class="p1">跳出率</div>
                    <div class="p2">87.00%</div>
                  </div>
                    </div>
                </div>
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
  }
};
</script>

<style>
.bigcard {
  padding: 0 12px;
}
.bigcard .in{
background: #fff;
}

.bigcard .top {
  border-bottom: 1px solid #ccc;
 padding: 10px 20px;
}

.bigcard .top span {
  font-size: 16px;
  color: black;
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
  color: black;
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

.scard1{
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
  color: black;
}

.scard1 .tb .time {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.scard1 .tb .pp {
  padding: 20px;
}

.scard1 .tb .pp .p1 {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.scard1 .tb .pp .p2 {
  color: black;
  font-size: 24px;
}

.scard1 .tb .money {
  padding: 0 20px 20px 20px;
  position: relative;
}

.scard1 .tb .money .n {
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}

.scard1 .tb .money img {
  object-fit: cover;
  width: 100%;
  height: 100px;
  position: absolute;
  top: -60px;
}

.scard2 {
  margin-top: 20px;
   padding:0 12px;
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
  color: black;
}

.scard2 .imgs {

  text-align: center;
  margin-top: 15px;
  margin-bottom: 4px;
  height: 200px;
}


.scard2 .imgs .in{
   
      width:335px;
     height:182px;
     margin: 0 auto;
}

.scard2 .imgs .p {
  width: 100%;
  margin-top: -60px;
  text-align: center;
}

.scard2 .imgs .p1 {
  font-size: 14px;
}

.scard2 .imgs .p2 {
  font-size: 24px;
  color: black;
}
</style>
