<template>
  <div>
    <div class="main-part">
      <div class="main-part-inner">
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="7" :xl="7" :xxl="7" >
            <div class="sider">
              <div class="content">
                <div class="personal">
                  <div class="imgs">
                    <img src="../../assets/userlogo_images/users.png" alt />
                  </div>
                  <div class="userss">
                    <div class="name">
                      <span>Serati Ma</span>
                    </div>
                    <div class="motto">
                      <span>海纳百川，有容乃大</span>
                    </div>
                  </div>
                  <div class="message">
                    <div class="line" v-for="item in messages" :key="item.id">
                      <Icon :type=item.icon size="18" />
                      <span class="job-information">{{item.title}}</span>
                    </div>
                 
                  </div>
                </div>
                <div class="label">
                  <div class="ain">
                    <div style="margin-bottom:10px;font-size: 14px">标签</div>
                    <Tag v-for="item in tags" :key="item.id">{{item.title}}</Tag>
                    <Tag
                      v-for="item in count"
                      :key="item"
                      :name="item"
                      closable
                      @on-close="handleClose2"
                    >标签</Tag>
                    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd"></Button>
                  </div>
                </div>
                <div>
                  <Team />
                </div>
              </div>
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="24" :lg="17" :xl="17" :xxl="17">
            <div class="tabs">
              <div class="content">
                <div class="tabs">
                  <div style="padding-top:10px">
                    <Tabs value="4-1" :animated="false">
                      <TabPane label="文章(8)" name="4-1">
                        <Article />
                      </TabPane>
                      <TabPane label="应用(8)" name="4-2">
                        <application />
                      </TabPane>
                      <TabPane label="项目(8)" name="4-3">
                        <Project />
                      </TabPane>
                    </Tabs>
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
import Article from "./Article";
import Project from "./Project";
import application from "./application";
import Team from "./Team";
export default {
  data() {
    return {
      count: [0, 1, 2],
      tags:[
        {
         title:'很有想法的'
        },
         {
         title:'专注设计'
        },
         {
         title:'辣~'
        },
         {
         title:'川妹子'
        },
        {
         title:'海纳百川'
        },
        {
         title:'大长腿'
        },
      ],
      messages:[
        {
          icon:'ios-archive-outline',
          title:'交互专家'
        },
         {
          icon:'ios-git-network',
          title:'蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED'
        },
         {
          icon:'ios-pin-outline',
          title:'浙江省杭州市'
        },
      ]
    };
  },
  methods: {
    handleAdd() {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1);
      } else {
        this.count.push(0);
      }
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    }
  },
  components: {
    Article,
    Project,
    application,
    Team
  }
};
</script>

<style scoped>
.main-part {
  margin: 0 -20px;
}

.main-part .main-part-inner {
  padding: 5px 13px;
}

.main-part .main-part-inner .sider {
  padding: 0 12px;
}

.main-part .main-part-inner .sider .content {
  background: #fff;
}

.main-part .main-part-inner .sider .content .label {
  padding: 0 25px;
}

.main-part .main-part-inner .sider .content .label .ain {
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
  padding: 25px 0 30px 0;
}

.main-part .main-part-inner .tabs {
  padding: 0 12px;
}

.main-part .main-part-inner .tabs .content {
  background: #fff;
}

.main-part .main-part-inner .content .imgs {
  text-align: center;
  padding: 23px 0 3px 0;
}
.main-part .main-part-inner .content .imgs img {
  width: 104px;
  height: 104px;
}

.main-part .main-part-inner .content .personal .userss {
  text-align: center;
  padding: 12px 0;
}
.main-part .main-part-inner .content .personal .userss .name {
  font-size: 20px;
  color: #333;
}
.main-part .main-part-inner .content .personal .userss .motto {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}
.main-part .main-part-inner .content .personal .message {
  font-size: 14px;
  padding: 10px 10px 10px 25px;
}
.main-part .main-part-inner .content .personal .message .line {
  margin-bottom: 10px;
}
.main-part .main-part-inner .content .personal .message .job-information {
  padding-left: 8px;
}
</style>