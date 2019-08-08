<template>
  <div>
    <div class="tdS">
      <div class="inS">
        <div class="topS">
          <span>团队</span>
        </div>
        <div>
          <Row>
            <Col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" :xxl="12" v-for="value in tdarr" :key="value.id">
              <div class="innerS">
                <a href="#">
                  <span class="imgs">
                    <img :src="value.img" alt />
                  </span>
                  <span class="mz">{{value.title}}</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdarr: [
        {
          img: require('../../assets/userlogo_images/pro.png'),
          title: "科学搬砖组"
        },
        {
          img: require('../../assets/userlogo_images/bro.png'),
          title: "全组都是吴彦祖"
        },
        {
          img: require('../../assets/userlogo_images/ant.png'),
          title: "中二少女团"
        },
        {
           img: require('../../assets/userlogo_images/n.png'),
          title: "程序员日常"
        },
        {
           img: require('../../assets/userlogo_images/angular.png'),
          title: "高逼格设计天团"
        },
        {
           img: require('../../assets/userlogo_images/vue.png'),
          title: "骗你来学计算机"
        }
      ]
    };
  }
};
</script>

<style>
.tdS {
  padding-bottom: 40px;
}
.tdS .inS {
  background: #fff;
}
.tdS .inS .topS {
  padding: 30px 25px 0 25px;
  font-size: 14px;
  color: #333;
}

.tdS .inS .innerS {
  padding: 0 16px;
}

.tdS .inS .innerS a {
  padding: 10px;
  display: flex;
  align-items: center;
}
.tdS .inS .innerS a:hover .mz {
  color: #2d8cf0;
}

.tdS .inS .innerS .imgs {
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 10px;
}
.tdS .inS .innerS .imgs img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.tdS .inS .innerS .mz {
  color: #333;
  font-size: 14px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>