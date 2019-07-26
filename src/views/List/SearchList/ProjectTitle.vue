<template>
  <div>
    <Row>
      <Col span="24">
        <div class="wzy">
          <Row>
            <Col span="24">
              <div class="inner">
                <div class="nav-bar">
                  <Row>
                    <Col span="2">
                      <div style="font-size:14px;color:#333">所属类目:</div>
                    </Col>
                    <Col span="22">
                      <div class="category">
                        <div class="sub">
                          <div>全部</div>
                          <div class="one" v-for="value in items" :key="value.id">{{value}}</div>

                          <a href="#" v-show="scc" @click="shows()">
                            收起
                            <Icon type="ios-arrow-up" />
                          </a>
                          <a href="#" v-show="scc2" @click="shows2()">
                            展开
                            <Icon type="ios-arrow-down" />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div class="inner">
                <div class="nav-bar">
                  <Row>
                    <Col span="2">
                      <div style="font-size:14px;color:#333;line-height: 30px">其他选项:</div>
                    </Col>
                    <Col span="5">
                      <div style>
                        <span
                          style="font-size:14px;color:#333;line-height: 30px;margin-right: 5px"
                        >活跃用户:</span>
                        <Select v-model="model1" style="width:200px" placeholder="不限">
                          <Option
                            v-for="item in cityList2"
                            :value="item.value"
                            :key="item.value"
                          >{{ item.label }}</Option>
                        </Select>
                      </div>
                    </Col>
                    <Col span="5" offset="3">
                      <span
                        style="font-size:14px;color:#333;line-height: 30px;margin-right: 5px"
                      >活跃用户:</span>
                      <Select v-model="model2" style="width:200px" placeholder="不限">
                        <Option
                          v-for="item in cityList3"
                          :value="item.value"
                          :key="item.value"
                        >{{ item.label }}</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ProjectContent />
      </Col>
    </Row>
  </div>
</template>

<script>
import ProjectContent from "./ProjectContent";
export default {
  data() {
    return {
      scc: true,
      scc2: false,
      items: [
        "类目一",
        "类目二",
        "类目三",
        "类目四",
        "类目五",
        "类目六",
        "类目七",
        "类目八",
        "类目九",
        "类目十",
        "类目十一",
        "类目十二"
      ],

      cityList2: [
        {
          value: "李三",
          label: "李三"
        }
      ],
      model1: "",
      cityList3: [
        {
          value: "优秀",
          label: "优秀"
        }
      ],
      model2: ""
    };
  },
  methods: {
    shows() {
      this.scc = false;
      this.scc2 = true;
    },
    shows2() {
      this.scc = true;
      this.scc2 = false;
    }
  },
  components: {
    ProjectContent
  }
};
</script>

<style scoped>
.table-wz .tabs .wzy {
  border-top: 1px solid rgb(245, 247, 249);
  background: rgb(245, 247, 249);
  padding: 25px 25px 0 25px;
}

.table-wz .tabs .wzy .nav-bar {
  padding: 20px;
}

.table-wz .tabs .wzy .inner {
  border-bottom: 1px dashed #ccc;
  background: #fff;
}

.table-wz .tabs .wzy .nav-bar .category {
  margin-left: 22px;
}
.table-wz .tabs .wzy .nav-bar .category .sub {
  display: flex;
  font-size: 14px;
}

.wzy .nav-bar .category .sub div {
  padding: 0 5px;
  border-radius: 4px;
  margin-right: 24px;
}

.wzy .nav-bar .category .sub .one {
  background: #1890ff;
  color: #fff;
}
.wzy .nav-bar .category .sub div:hover {
  color: #2b85e4;
  transition: color 0.3s;
  cursor: pointer;
}
</style>