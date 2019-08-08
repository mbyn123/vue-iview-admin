<template>
  <div>
    <div class="project">
      <div class="inside" >
        <Row>
          <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="8" v-for="value in mssg" :key="value.id">
            <div class="card">
              <div class="content">
                <div style="background: #fff;padding: 20px">
                  <div class="titl">
                    <span class="imgs">
                      <img :src="value.img" alt />
                    </span>
                    <span>
                      <h4>{{value.user}}</h4>
                    </span>
                  </div>
                  <div class="user">
                    <div style="width:50%">
                      <div class="active-user">活跃用户</div>
                      <div>
                        <span class="nums">{{value.num1}}</span>
                        <span class="wen">万</span>
                      </div>
                    </div>
                    <div style="width:50%">
                      <div class="active-user">新增用户</div>
                      <div class="nums">{{value.num2}}</div>
                    </div>
                  </div>
                </div>
                <div class="palette">
                  <span class="ico aicon">
                    <Tooltip content="下载" placement="top">
                      <Icon type="ios-download-outline" size="22" color="grey" />
                    </Tooltip>
                  </span>
                  <span class="ico aicon">
                    <Tooltip content="编辑" placement="top">
                      <Icon type="ios-create-outline" size="22" color="grey" />
                    </Tooltip>
                  </span>
                  <span class="ico aicon">
                    <Tooltip content="分享" placement="top">
                      <Icon type="md-share" size="22" color="grey" />
                    </Tooltip>
                  </span>
                  <span class="ico">
                    <Tooltip content="下载" placement="bottom" theme="light">
                      <Icon type="ios-more" size="22" color="grey" />
                      <div slot="content" theme="light">
                        <p>1st menu item</p>
                        <p>2nd menu item</p>
                        <p>3d menu item</p>
                      </div>
                    </Tooltip>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mssg: [
        {
          user: "Alipay",
          img: require('../../assets/userlogo_images/alipay.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Angular",
         img: require('../../assets/userlogo_images/react.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Ant Design",
          img: require('../../assets/userlogo_images/vue.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Ant Design Pro",
        img: require('../../assets/userlogo_images/angular.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Bootstrap",
          img: require('../../assets/userlogo_images/bro.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "React",
         img: require('../../assets/userlogo_images/pro.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Vue",
          img: require('../../assets/userlogo_images/n.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Webpack",
           img: require('../../assets/userlogo_images/ant.png'),
          num1: "16",
          num2: "1,026"
        },
        
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.project {
  padding: 0
}

.project .inside {
  padding: 0 3px;
}

.project .inside .card {
  padding: 10px;
}

.project .inside .card .content {
  cursor: pointer;
  border: 1px solid #e8e8e8;
}

.project .inside .card .content:hover {
  box-shadow: 1px 4px 5px 0px rgba(212, 205, 212, 1);
  transition: 0.5s;
}

.inside .card .content .titl span {
  display: inline-block;
}

.inside .card .content .titl .imgs {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}

.inside .card .content .titl .imgs img {
  width: 100%;
  border-radius: 50%;
}

.inside .card .content .user {
  padding-top: 15px;
  display: flex;
  padding-left: 40px;
}

.inside .card .content .user .nums {
  font-size: 24px;
}

.inside .card .content .user .active-user {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 20px;
}

.inside .card .content .user .wen {
  font-size: 14px;
}

.inside .card .content .palette {
  border-top: 1px solid #ccc;
  background: #fafafa;
}

.aicon {
  border-right: 1px solid #e8e8e8;
}

.inside .card .content .palette .ico {
  width: 25%;
  display: inline-block;
  text-align: center;
  margin: 13px 0;
}
</style>