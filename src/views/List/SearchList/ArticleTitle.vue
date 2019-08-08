<template>
  <div>
    <div class="application">
      <div class="inner">
        <div style="border-bottom:1px dashed #ccc;padding-bottom:20px">
          <Row>
            <Col :xs="6" :sm="4" :md="4" :lg="4" :xl="2" :xxl="2">
              <div class="category-name">所属类目:</div>
            </Col>
            <Col :xs="14" :sm="16" :md="16" :lg="16" :xl="20" :xxl="20">
              <div class="option">
                <div class="option-inner" :style="{'height':height}">
                  <span
                    :class="isCheckAll?'check-alls':'check-all'"
                    @click="letsGetThisFuckingCheck()"
                  >全部</span>
                  <span
                    :class="checkbox.includes(index)?'subitems':'subitem'"
                    v-for="(value,index) in menu"
                    :key="value.id"
                    @click="check(index)"
                  >{{value.title}}</span>
                </div>
              </div>
            </Col>
            <Col :xs="4" :sm="4" :md="4" :lg="4" :xl="2" :xxl="2">
              <div class="option-operation">
                <div class="unfold" v-show="unfoldShow" @click="unfoldShows">
                  <span class="unfold-inner">
                    展开
                    <Icon type="ios-arrow-down" />
                  </span>
                </div>
                <div class="pack-up" v-show="packupShow" @click="packupShows">
                  <span class="pack-up-inner">
                    收起
                    <Icon type="ios-arrow-up" />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

    <div class="owner">
      <div class="owner-inner">
        <div style="border-bottom:1px dashed #ccc;padding-bottom:20px">
          <Row>
            <Col :xs="24" :sm="3" :md="3" :lg="2" :xl="2" :xxl="2">
              <div class="owner-name">owner:</div>
            </Col>
            <Col :xs="24" :sm="20" :md="12" :lg="6" :xl="6" :xxl="6">
              <div style>
                <Select v-model="modelme" multiple placeholder="选择 owner">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </div>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" :xxl="4">
              <div class="checkme" @click="seach(me)">只看自己的</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

    <div class="option-group">
      <div class="inner">
        <Row>
          <Col :xs="24" :sm="12" :md="12" :lg="2" :xl="2" :xxl="2">
            <div class="option-group-name">其他选项:</div>
          </Col>
          <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
            <div class="writer">
              <span>作者:</span>
              <Select v-model="writermodel" style="width:200px;margin-left:10px">
                <Option
                  v-for="item in writerList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
            <div class="active-user">
              <span>活跃用户:</span>
              <Select v-model="usermodel" style="width:200px;margin-left:10px">
                <Option
                  v-for="item in usercityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <ArticleContent />
  </div>
</template>

<script>
import ArticleContent from "./ArticleContent";
export default {
  data() {
    return {
      height:'22px',
      me: "我自己",
      unfoldShow: true,
      packupShow: false,
      checkbox: [],
      menu: [
        {
          title: "类目一"
        },
        {
          title: "类目二"
        },
        {
          title: "类目三"
        },
        {
          title: "类目四"
        },
        {
          title: "类目五"
        },
        {
          title: "类目六"
        },
        {
          title: "类目七"
        },
        {
          title: "类目八"
        },
        {
          title: "类目九"
        },
        {
          title: "类目十"
        },
        {
          title: "类目十一"
        },
        {
          title: "类目十二"
        }
      ],
      cityList: [
        {
          value: "我自己",
          label: "我自己"
        },
        {
          value: "吴家豪",
          label: "吴家豪"
        },
        {
          value: "周星星",
          label: "周星星"
        },
        {
          value: "赵丽颖",
          label: "赵丽颖"
        },
        {
          value: "姚明",
          label: "姚明"
        }
      ],
      modelme: [],

      writerList: [
        {
          value: "李三",
          label: "李三"
        }
      ],
      writermodel: "",
      usercityList: [
        {
          value: "优秀",
          label: "优秀"
        }
      ],
      usermodel: ""
    };
  },
  computed: {
    isCheckAll() {
      if (this.checkbox.length == this.menu.length) {
        return true;
      }
      return false;
    }
  },
  methods: {
    maxTagPlaceholder(num) {
      return "more " + num;
    },

    seach(me) {
      this.modelme.splice(0, 100, me);
    },
    check(i) {
      var idx = this.checkbox.indexOf(i);
      if (idx > -1) {
        this.checkbox.splice(idx, 1);
      } else {
        this.checkbox.push(i);
      }
    },
    letsGetThisFuckingCheck() {
      if (this.isCheckAll) {
        this.clearCheckbox();
      } else {
        this.checkAll();
      }
    },
    //选中全部
    checkAll() {
      var len = this.menu.length;
      this.checkbox = [];
      for (var i = 0; i < len; i++) {
        this.checkbox.push(i);
      }
    },
    //清空选择
    clearCheckbox() {
      this.checkbox = [];
    },
    unfoldShows() {
      this.unfoldShow = false;
      this.packupShow = true;
      this.height='auto'
    },
    packupShows() {
      this.unfoldShow = true;
      this.packupShow = false;
      this.height='22px'
    }
  },
  components: {
    ArticleContent
  }
};
</script>

<style scoped>
.owner {
  background: #f5f7f9;
  padding: 0 20px;
}
.owner .owner-inner {
  background: #fff;
  padding: 20px 20px 0 20px;
}

.owner .owner-inner .owner-name {

  font-size: 14px;
  padding-top: 3px;
}

.owner .owner-inner .checkme {
  font-size: 14px;

  padding-top: 3px;
  cursor: pointer;
  color: #2d8cf0;
}
.option-group {
  padding: 0 20px;
  background: #f5f7f9;
}

.option-group .inner {
  background: #fff;
  padding: 20px;
}
.option-group .inner .option-group-name {
  font-size: 14px;

  padding-top: 3px;
}
.option-group .inner .writer {
  font-size: 14px;
}

.option-group .inner .active-user {
  font-size: 14px;
}
.application {
  padding: 20px 20px 0 20px;
  background: #f5f7f9;
}
.application .inner {
  padding: 20px 20px 0 20px;
  background: #fff;
}
.application .inner .category-name {
  font-size: 14px;

}
.application .inner .option {
  font-size: 14px;
  overflow: hidden;
 
}

.application .inner .option .check-alls {
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 7px;
  background: #2d8cf0;
  color: #fff;
  margin-right: 5px
}
.application .inner .option .check-all {
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 7px;
  margin-right: 5px
}
.application .inner .option .check-all:hover {
  color: #2d8cf0;
}
.application .inner .option .subitem {
  border-radius: 5px;
  padding: 1px 7px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right:31px;
}
.application .inner .option .subitem:hover {
  color: #2d8cf0;
}
.application .inner .option .subitems {
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  padding: 1px 7px;
  background: #2d8cf0;
  color: white;
   margin-right:31px;
}
.application .inner .option-operation {
  text-align: center;
  font-size: 14px;
}
.option-operation .unfold .unfold-inner {
  cursor: pointer;
  color:#2d8cf0
}
.option-operation .pack-up .pack-up-inner {
  cursor: pointer;
  color:#2d8cf0
}
</style>