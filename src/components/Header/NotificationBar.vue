<template>
  <div>
    <div class="prompt-boxs" @click.stop="show=true">
      <Tabs value="name1" :animated="false">
        <TabPane :label="inform+ informnumber" name="name1">
          <div>
            <Row>
              <div
                :class="informarr.includes(index)?'cols':'col'"
                v-for="(item,index) in informs"
                :key="item.id"
                @click="informstate(index)"
              >
                <div class="user-img">
                  <img :src="item.img" alt />
                </div>
                <div>
                  <div class="content">{{item.title}}</div>
                  <div class="time">{{item.time}}</div>
                </div>
              </div>
              <div v-show="astates">
                <Col span="12">
                  <div class="operation ico" @click="informsDelall">
                    <span>清空 通知</span>
                  </div>
                </Col>
                <Col span="12">
                  <div class="operation" @click="info">
                    <span>查看更多</span>
                  </div>
                </Col>
              </div>
              <div style="text-align: center;padding: 90px 0" v-show="achange">
                <div style="margin-bottom: 10px">
                  <img src="../../assets/layout_images/tz.svg" style="width:80px" />
                </div>
                <div style="font-size: 14px">你已查看所有通知</div>
              </div>
            </Row>
          </div>
        </TabPane>
        <TabPane :label="informationname+informationnumber" name="name2">
          <Row>
            <Col span="24">
              <div
                v-for="(item,index) in informations"
                :key="item.id"
                :class="informationarr.includes(index)?'colxs':'colx'"
                @click.once="informationstate(index)"
              >
                <div class="user-img">
                  <img :src="item.img" />
                </div>
                <div>
                  <h4 style="margin-bottom: 10px">{{item.title}}</h4>
                  <div style="font-size: 12px;color:rgba(0,0,0,.45)">
                    <div  style="margin-bottom: 5px; white-space: normal">{{item.content}}</div>
                    <div>{{item.time}}</div>
                  </div>
                </div>
              </div>
            </Col>
            <div v-show="bstates">
              <Col span="12">
                <div class="operation ico" @click="informationDelall">
                  <span>清空 通知</span>
                </div>
              </Col>
              <Col span="12">
                <div class="operation" @click="info">
                  <span>查看更多</span>
                </div>
              </Col>
            </div>
            <div style="text-align: center;padding: 90px 0" v-show="bchange">
              <div style="margin-bottom: 10px">
                <img src="../../assets/layout_images/tz.svg" style="width:80px" />
              </div>
              <div style="font-size: 14px">您已读完所有消息</div>
            </div>
          </Row>
        </TabPane>
        <TabPane :label="commission+commissionnumber" name="name3">
          <Row>
            <Col span="24">
              <div
                v-for="(item,index) in commissions"
                :key="item.id"
                :class="commissionarr.includes(index)?'Columns':'Column'"
                @click="commissionstate(index)"
              >
                <div class="statevoid">
                  <div>{{item.title}}</div>
                  <Tag :color="item.color">{{item.tag}}</Tag>
                </div>
                <div class="time">{{item.time}}</div>
              </div>
            </Col>
            <div v-show="cstates">
              <Col span="12">
                <div class="operation ico" @click="commissionDelall">
                  <span>清空 通知</span>
                </div>
              </Col>
              <Col span="12">
                <div class="operation" @click="info">
                  <span>查看更多</span>
                </div>
              </Col>
            </div>
            <div style="text-align: center;padding: 90px 0" v-show="cchange">
              <div style="margin-bottom: 10px">
                <img src="../../assets/layout_images/tz.svg" style="width:80px" />
              </div>
              <div style="font-size: 14px">你已完成所有待办</div>
            </div>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      inform: "通知",
      informationname: "消息",
      commission: "代办",
      informarr: [],
      informationarr: [],
      commissionarr: [],
      sum: "",
      informnumber: "",
      informationnumber: "",
      commissionnumber: "",
      astates: true,
      bstates: true,
      cstates: true,
      achange: false,
      bchange: false,
      cchange: false,
      informs: [
        {
          img: require("../../assets/functional_image/sc.png"),
          title: "你收到了 14 份新周报",
          time: "2 年前"
        },
        {
          img: require("../../assets/functional_image/tj.png"),
          title: "你推荐的 曲妮妮 已通过第三轮面试",
          time: "2 年前"
        },

        {
          img: require("../../assets/functional_image/tx.png"),
          title: "这种模板可以区分多种通知类型",
          time: "2 年前"
        },
        {
          img: require("../../assets/functional_image/tz.png"),
          title: "左侧图标用于区分不同的类型",
          time: "2 年前"
        },
        {
          img: require("../../assets/functional_image/xx.png"),
          title: "内容不要超过两行字，超出时自动截断nnnn",
          time: "2 年前"
        }
      ],
      informations: [
        {
          img: require("../../assets/functional_image/hint.jpeg"),
          title: "曲丽丽 评论了你",
          content: "描述信息描述信息描述信息",
          time: "2年前"
        },
        {
          img: require("../../assets/functional_image/hint.jpeg"),
          title: "朱偏右 回复了你",
          content: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
          time: "2年前"
        },
        {
          img: require("../../assets/functional_image/hint.jpeg"),
          title: "标题",
          content: "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像",
          time: "2年前"
        }
      ],
      commissions: [
        {
          title: "任务名称",
          tag: "未开始",
          color: "default",
          time: "任务需要在 2017-01-12 20:00 前启动"
        },
        {
          title: "第三方紧急代码变更",
          tag: "马上到期",
          color: "red",
          time: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务"
        },
        {
          title: "信息安全考试",
          tag: "已耗时 8 天",
          color: "gold",
          time: "指派竹尔于 2017-01-09 前完成更新并发布"
        },
        {
          title: "ABCD 版本发布",
          tag: "进行中",
          color: "blue",
          time: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务"
        }
      ]
    };
  },
  mounted() {
    this.set();
  },
  methods: {
    set() {
      this.informnumber = this.informs.length;
      this.informationnumber = this.informations.length;
      this.commissionnumber = this.commissions.length;
      this.sum =
        this.informnumber + this.informationnumber + this.commissionnumber;
      this.$emit("sum", this.sum);
    },
    informstate(i) {
      this.informnumber = this.informnumber - 1;
      this.sum = this.sum - 1;
      this.$emit("sum", this.sum);
      var idx = this.informarr.indexOf(i);
      if (idx > -1) {
        this.informarr.splice(idx, 1);
      } else {
        this.informarr.push(i);
      }
    },

    informationstate(i) {
      this.informationnumber = this.informationnumber - 1;
      this.sum = this.sum - 1;
      this.$emit("sum", this.sum);
      var idx = this.informationarr.indexOf(i);
      if (idx > -1) {
        this.informationarr.splice(idx, 1);
      } else {
        this.informationarr.push(i);
      }
    },
    commissionstate(i) {
      this.commissionnumber = this.commissionnumber - 1;
      this.sum = this.sum - 1;
      this.$emit("sum", this.sum);
      var idx = this.commissionarr.indexOf(i);
      if (idx > -1) {
        this.commissionarr.splice(idx, 1);
      } else {
        this.commissionarr.push(i);
      }
    },
    info() {
      this.$Message.info("Click on view more");
    },
    informsDelall() {
      this.informs = [];
      this.$Message.success("清空了 通知");
      this.astates = false;
      this.achange = true;
      this.sum = this.sum - this.informnumber;
      this.$emit("sum", this.sum);
      this.informnumber = this.informnumber - this.informnumber;
    },
    informationDelall() {
      this.informations = [];
      this.$Message.success("清空了 通知");
      this.bstates = false;
      this.bchange = true;
      this.sum = this.sum - this.informationnumber;
      this.$emit("sum", this.sum);
      this.informationnumber = this.informationnumber - this.informationnumber;
    },
    commissionDelall() {
      this.commissions = [];
      this.$Message.success("清空了 通知");
      this.cstates = false;
      this.cchange = true;
      this.dnum = this.commissions.length;
      this.sum = this.sum - this.commissionnumber;
      this.$emit("sum", this.sum);
      this.commissionnumber = this.commissionnumber - this.commissionnumber;
    }
  }
};
</script>

<style >
.prompt-boxs .Columns {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  pointer-events: none;
  opacity: 0.5;
}

.prompt-boxs .Column {
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}

.prompt-boxs .ivu-tabs-nav {
  display: table;
  margin: 0 auto;
  float: none;
}

.prompt-boxs .Column:hover {
  background: rgb(230, 247, 255);
}

.prompt-boxs .Columns .statevoid {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
}

.prompt-boxs .Column .statevoid {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
}

.prompt-boxs .Column .time {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);

  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis
}

.prompt-boxs .operation {
  text-align: center;
  padding: 15px 0;
}

.prompt-boxs .ico {
  border-right: 1px solid #ccc;
}

.prompt-boxs {
  background: #fff;
  z-index: 9;
  width: 340px;
  box-shadow: -1px 1px 5px 0px rgba(209, 198, 209, 1);
}

.prompt-boxs .user-img img {
  padding-top: 5px;
  width: 32px;
  border-radius: 50%;
  margin-right: 20px;
}

.prompt-boxs .col .content {
  max-width: 240px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
}

.prompt-boxs .col .time {
  font-size: 12px;
}

.prompt-boxs .colx {
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 15px 0 20px 20px;
}
.prompt-boxs .colxs {
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 15px 0 20px 20px;
  opacity: 0.5;
}
.prompt-boxs .cols {
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 15px 0 20px 20px;
  pointer-events: none;
  opacity: 0.5;
}
.prompt-boxs .col {
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 15px 0 20px 20px;
}

.prompt-boxs .col:hover {
  background: rgb(230, 247, 255);
}
</style>