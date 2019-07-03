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
        <Col span="24">
         <Tabs value="name1" >
          <TabPane label="销售额" name="name1">
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
    </Col>
  </Row>
</template>

<script>
export default {};
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
