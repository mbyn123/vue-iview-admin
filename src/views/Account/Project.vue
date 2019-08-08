<template>
  <div>
    <div class="project">
      <div class="inside">
        <Row>
          <Col  :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="8" v-for="value in messages" :key="value.id">
            <div class="card">
              <div class="content">
                <Row>
                  <Col span="24">
                    <div class="imgs">
                      <img :src="value.img1" alt />
                    </div>
                  </Col>
                </Row>
                <div class="pln">
                  <h4>{{value.user}}</h4>
                  <div class="p">{{value.p}}</div>
                  <div class="userss">
                    <div>{{value.time}}</div>
                    <div>
                      <span v-for="value in comment" :key="value.id">
                        <Tooltip :content="value.user" placement="top">
                          <img :src="value.img" alt />
                        </Tooltip>
                      </span>
                    </div>
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
      messages: [
        {
          img1: require('../../assets/projiect_images/paojecta.png'),
          user: "Alipay",
          time: "几秒前",
          p: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
           img1: require('../../assets/projiect_images/paojectb.png'),
          user: "Angular",
          time: "2小时前",
          p: "希望是一个好东西，也许是最好的，好东西是不会消亡的"
        },
        {
         img1: require('../../assets/projiect_images/paojectc.png'),
          user: "Ant Design",
          time: "4小时前",
          p: "生命就像一盒巧克力，结果往往出人意料"
        },
        {
          img1: require('../../assets/projiect_images/paojectd.png'),
          user: "Ant Design Pro",
          time: "6小时前",
          p: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
        },
        {
          img1: require('../../assets/projiect_images/paojecta.png'),
          user: "Alipay",
          time: "几秒前",
          p: "那是一种内在的东西， 他们到达不了，也无法触及的"
        },
        {
           img1: require('../../assets/projiect_images/paojectb.png'),
          user: "Angular",
          time: "2小时前",
          p: "希望是一个好东西，也许是最好的，好东西是不会消亡的"
        },
        {
         img1: require('../../assets/projiect_images/paojectc.png'),
          user: "Ant Design",
          time: "4小时前",
          p: "生命就像一盒巧克力，结果往往出人意料"
        },
        {
          img1: require('../../assets/projiect_images/paojectd.png'),
          user: "Ant Design Pro",
          time: "6小时前",
          p: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
        },
       
      ],
      comment:[
        {
          user:'曲丽丽',
          img: require('../../assets/userlogo_images/usera.png')
        },
        {
          user:'王昭君',
          img: require('../../assets/userlogo_images/userb.png')
        },
        {
          user:'董拉拉',
          img: require('../../assets/userlogo_images/userc.png')
        },

      ]
    };
  }
};
</script>

<style scoped>
.project {
padding: 0
}


.project .inside .card {
  padding: 10px;

}

.project .inside .card .content .imgs img {
  width: 100%;
}

.project .inside .card .content {
  cursor: pointer;
    border:1px solid #ccc
}

.project .inside .card .content .pln {
  padding: 20px;
  background: #fff;
}
.inside .card .content .pln h4 {
  cursor: pointer;
  margin-bottom: 10px;
}
.inside .card .content .pln h4:hover {
  color: #2b85e4;
}
.inside .card .content .pln .p {
  height: 44px;
  overflow: hidden;
  font-size: 14px;
  color: rgba(0, 0, 0, 65);
}

.inside .card .content .pln .userss {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: -5px;
}
.inside .card .content .pln .userss span {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-left: -7px;
}
.content .pln .userss span img {
  width: 100%;
}
</style>