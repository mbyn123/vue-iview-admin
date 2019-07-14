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
              <Col span="12" v-for="(td,index) in tdarr" :key="index">
                <div class="inner">
                  <a href="#">
                    <span class="imgs">
                      <img :src="td.img" alt />
                    </span>
                    <span class="mz">{{td.title}}</span>
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
          img: "http://pt1mv9q6v.bkt.clouddn.com/fpng.png",
          title: "科学搬砖组"
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/opng.png",
          title: "全组都是吴彦祖"
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/p.png",
          title: "中二少女团"
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
          title: "程序员日常"
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/z.png",
          title: "高逼格设计天团"
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/spng.png",
          title: "骗你来学计算机"
        }
      ]
    };
  }
};
</script>

<style>
.td {
  padding: 12px;
}
.td .in {
  background: white;
}
.td .in .top {
  padding: 20px;
  font-size: 16px;
  color: black;
  border-bottom: 1px solid #ccc;
}

.td .in .inner {
  padding: 0 16px;
}

.td .in .inner a {
  display: block;
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
  color: black;
  font-size: 14px;
  display: inline-block;
}
</style>
