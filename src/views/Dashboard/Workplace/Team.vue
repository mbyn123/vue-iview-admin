<template>
  <div>
    <Col span="24">
      <div class="td">
        <div class="in">
          <div class="top">
            <span>团队</span>
          </div>
          <div>
            <Row>
              <Col span="12" v-for="item in tdarr" :key="item.id">
                <div class="inner">
                  <a href="#">
                    <span class="imgs">
                      <img :src="item.img" alt />
                    </span>
                    <span class="mz">{{item.title}}</span>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdarr: [
        {
          img: require('../../../assets/userlogo_images/alipay.png'),
          title: "科学搬砖组"
        },
        {
           img: require('../../../assets/userlogo_images/react.png'),
          title: "全组都是吴彦祖"
        },
        {
           img: require('../../../assets/userlogo_images/vue.png'),
          title: "中二少女团"
        },
        {
            img: require('../../../assets/userlogo_images/angular.png'),
          title: "程序员日常"
        },
        {
           img: require('../../../assets/userlogo_images/bro.png'),
          title: "高逼格设计天团"
        },
        {
             img: require('../../../assets/userlogo_images/pro.png'),
          title: "骗你来学计算机"
        }
      ]
    };
  }
};
</script>

<style scoped>
.td {
  padding: 12px;
}
.td .in {
  background: #fff;
  padding-bottom: 20px;
}
.td .in .top {
  padding: 20px;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.td .in .inner {
  padding: 0 16px;
}

.td .in .inner a {
  padding: 10px;
  display: flex;
  align-items: center;
}
.td .in .inner a:hover .mz {
  color: #2d8cf0;
}

.td .in .inner .imgs {
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 10px;
}
.td .in .inner .imgs img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.td .in .inner .mz {
  color: #333;
  font-size: 14px;
  display: inline-block;
}
</style>
