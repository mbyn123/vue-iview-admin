<template>
  <div>
    <div class="project">
      <div class="inside">
        <Row>
          <Col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="6" v-for="value in mssg" :key="value.id">
            <div style="padding-top:10px">
              <div class="card" style="padding: 10px 12px ; ">
                <div class="content">
                  <div style="padding:20px;background: #fff">
                    <div class="iner">
                      <span class="picture i">
                        <img :src="value.img" />
                      </span>
                      <span class="i">
                        <h4>{{value.user}}</h4>
                      </span>
                    </div>
                    <div class="user">
                      <div style="width:50%">
                        <div class="name">活跃用户</div>
                        <div>
                          <span class="num">{{value.num1}}</span>
                          <span class="wen">万</span>
                        </div>
                      </div>
                      <div style="width:50%">
                        <div class="name">新增用户</div>
                        <div class="num">{{value.num2}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="palette">
                    <span class="in em">
                      <Tooltip content="下载" placement="top">
                        <Icon type="ios-download-outline" size="22" color="grey" />
                      </Tooltip>
                    </span>
                    <span class="in em">
                      <Tooltip content="编辑" placement="top">
                        <Icon type="ios-create-outline" size="22" color="grey" />
                      </Tooltip>
                    </span>
                    <span class="in em">
                      <Tooltip content="分享" placement="top">
                        <Icon type="md-share" size="22" color="grey" />
                      </Tooltip>
                    </span>
                    <span class="in">
                      <Dropdown>
                        <a href="javascript:void(0)">
                          <Icon type="ios-more" size="22" color="grey" />
                        </a>
                        <DropdownMenu slot="list">
                          <DropdownItem>1st menu item</DropdownItem>
                          <DropdownItem>2st menu item</DropdownItem>
                          <DropdownItem>3st menu item</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </span>
                  </div>
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
          img: require('../../../assets/userlogo_images/pro.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Angular",
          img: require('../../../assets/userlogo_images/bro.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Ant Design",
          img:require('../../../assets/userlogo_images/ant.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Ant Design Pro",
          img: require('../../../assets/userlogo_images/n.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Bootstrap",
          img: require('../../../assets/userlogo_images/angular.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "React",
          img:require('../../../assets/userlogo_images/vue.png'),
          num2: "1,026"
        },
        {
          user: "Vue",
         img:require('../../../assets/userlogo_images/alipay.png'),
          num1: "16",
          num2: "1,026"
        },
        {
          user: "Webpack",
          img:require('../../../assets/userlogo_images/vue.png'),
          num1: "16",
          num2: "1,026"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.project {
  background: rgb(245, 247, 249);
 
  padding: 0;
}
.project .inside {
  padding: 0 15px 70px 15px;
 
}

.project .inside .card .content {
  cursor: pointer;
}
.project .inside .card .content:hover {
  box-shadow: 1px 4px 5px 0px rgba(212, 205, 212, 1);
  transition: 0.5s;
}
.inside .card .content .iner .i {
  display: inline-block;
  font-size:16px;
}

.inside .card .content .iner .picture {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}
.inside .card .content .iner .picture img {
  width: 100%;
  border-radius: 50%;
}
.inside .card .content .user {
  padding-top: 15px;
  display: flex;
  padding-left: 40px;
}
.inside .card .content .user .num {
  font-size: 24px;
}
.inside .card .content .user .name {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 20px;
}
.inside .card .content .user .wen {
  font-size: 14px;
}
.inside .card .content .palette {
  border-top: 1px solid #ccc;
  background: #FAFAFA;

}
.em {
  border-right: 1px solid #e8e8e8;
}
.inside .card .content .palette .in {
  width: 25%;
  display: inline-block;
  text-align: center;
  padding: 10px 0
}

.top,
.bottom {
  text-align: center;
}
.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
</style>