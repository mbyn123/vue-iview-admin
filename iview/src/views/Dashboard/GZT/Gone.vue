<template>
  <div>
    <Row>
      <Col span="24">
        <div class="cardtop">
          <div class="in">
            <div class="lis">
              <a href="#">首页</a>
              <span>/</span>
              <a href="#">Dashboard</a>
              <span>/</span>
              <a href="#">工作台</a>
            </div>
            <div class="li">
              <span>工作台</span>
            </div>
            <div class="main">
              <div class="le">
                <div class="imgs">
                  <img src="http://ptt5and7y.bkt.clouddn.com/10.png" alt />
                </div>
                <div class="wen">
                  <span class="p1">早安，Serati Ma，祝你开心每一天！</span>
                  <span clas="p2">交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
                </div>
              </div>
              <div class="ri">
                <div class="one">
                  <div class="nn">项目数</div>
                  <div class="nn2">56</div>
                </div>
                <div class="two">
                  <div class="nn">团队内排名</div>
                  <div style=" text-align: center">
                    <span class="nn2">8</span>
                    <span style="margin:0 5px">/</span>
                    <span class="nn3">24</span>
                  </div>
                </div>
                <div class="three">
                  <div class="nn">项目访问</div>
                  <div class="nn2">2,223</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cardtop {
  background: white;
  margin: -17px -20px;
}

.cardtop .in {
  padding: 17px;
}

.cardtop .in .li {
  font-size: 16px;
  color: black;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
}

.cardtop .in .lis a {
  color: #ccc;
  font-size: 15px;
}

.cardtop .in .lis a:hover {
  color: #2db7f5;
}

.cardtop .in .lis span {
  color: #ccc;
  margin: 0 12px;
}

.cardtop .in .main {
  display: flex;
  justify-content: space-between;
}

.cardtop .in .main .le{
    display: flex;
    align-items: center
}

.cardtop .in .main .le .imgs {
  display: inline-block;
  margin-right:20px 
}

.cardtop .in .main .le .imgs img {
  width: 72px;
  height: 72px;
}

.cardtop .in .main .le .wen {
  display: inline-block;
}

.cardtop .in .main .le .wen .p1 {
  font-size: 18px;
color: rgba(0,0,0,.85);
  font-weight: 500;
  display: block;
  margin-bottom: 10px
}

.cardtop .in .main .le .wen .p2 {
  font-size: 20px;
  display: block;
}

.cardtop .in .main .ri .one {
  display: inline-block;
}
.cardtop .in .main .ri .two {
  display: inline-block;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin: 0 25px;
  padding: 0 25px;
}
.cardtop .in .main .ri .three {
  display: inline-block;
}
.cardtop .in .main .ri .nn {
  font-size: 14px;
}
.cardtop .in .main .ri .nn2 {
  font-size: 24px;
  color: black;
  text-align: center;
}
.cardtop .in .main .ri .nn3 {
  font-size: 16px;
  color: black;
  text-align: center;
}
</style>
