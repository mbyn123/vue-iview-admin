<template>
  <div>
    <Row>
      <Col span="24">
        <div class="cardtop">
          <div class="in">
            <Breadcrumb>
              <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
              <BreadcrumbItem >Dashboard</BreadcrumbItem>
              <BreadcrumbItem>工作台</BreadcrumbItem>
            </Breadcrumb>
            <div class="li">
              <span>工作台</span>
            </div>
            <div class="main">
              <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="14" :xl="15" :xxl="18">
                  <div class="in">
                    <div class="head-portrait">
                      <img src="../../../assets/userlogo_images/users.png" alt />
                    </div>
                    <div class="wen">
                      <span class="greetings">早安，Serati Ma，祝你开心每一天！</span>
                      <span clas="introduce ">交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
                    </div>
                  </div>
                </Col>
                <Col :xs="24" :sm="24" :md="24" :lg="10" :xl="8" :xxl="6">
                  <div class="number-projects">
                    <div class="in">
                      <div class="name">项目数</div>
                      <div class="nums">56</div>
                    </div>
                    <div class="Team-ranking">
                      <div class="name">团队内排名</div>
                      <div style=" text-align: center">
                        <span class="nums">8</span>
                        <span style="margin:0 5px">/</span>
                        <span class="en">24</span>
                      </div>
                    </div>
                    <div class="Project-access">
                      <div class="name">项目访问</div>
                      <div class="nums">2,223</div>
                    </div>
                  </div>
                </Col>
              </Row>
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

<style scoped>
.cardtop {
  background: #fff;
  margin: -17px -20px;
}

.cardtop .in {
  padding: 17px;
}

.cardtop .in .li {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
}

.cardtop .in .content a {
  color: #ccc;
  font-size: 15px;
}

.cardtop .in .content a:hover {
  color: #2db7f5;
}

.cardtop .in .content .i {
  color: #ccc;
  margin: 0 12px;
}

.cardtop .in .main .in {
  display: flex;
  align-items: center;
}

.cardtop .in .main .in .head-portrait {
  display: inline-block;
  margin-right: 20px;
}

.cardtop .in .main .in .head-portrait img {
  width: 72px;
  height: 72px;
}

.cardtop .in .main .in .wen {
  display: inline-block;
}

.cardtop .in .main .in .wen .greetings {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  display: block;
  margin-bottom: 10px;
}

.cardtop .in .main .in .wen .introduce {
  font-size: 20px;
  display: block;
}

.cardtop .in .main .number-projects .in {
  display: inline-block;
}
.cardtop .in .main .number-projects .Team-ranking {
  display: inline-block;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin: 0 25px;
  padding: 0 25px;
}
.cardtop .in .main .number-projects .Project-access {
  display: inline-block;
}
.cardtop .in .main .number-projects .name {
  font-size: 14px;
}
.cardtop .in .main .number-projects .nums {
  font-size: 24px;
  color: #333;
  text-align: center;
}
.cardtop .in .main .number-projects .en {
  font-size: 16px;
  color: #333;
  text-align: center;
}
</style>
