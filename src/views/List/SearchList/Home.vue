<template>
  <div>
    <div class="table-wz">
      <div class="in">
        <Breadcrumb>
          <BreadcrumbItem to="/Exception_403">首页</BreadcrumbItem>
          <BreadcrumbItem>列表项</BreadcrumbItem>
          <BreadcrumbItem>卡片列表</BreadcrumbItem>
          <BreadcrumbItem>搜索列表({{name}})</BreadcrumbItem>
        </Breadcrumb>
        <div class="tit">
          <span>搜索列表({{name}})</span>
        </div>
        <Row type="flex" justify="center">
          <Col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :xxl="8">
            <div class="search">
              <Input search enter-button="搜索" placeholder="请输入" size="large" />
            </div>
          </Col>
        </Row>
      </div>
      <div class="tabs">
        <Tabs value="文章" @on-click="names" :animated="false">
          <TabPane label="文章" name="文章">
            <Article />
          </TabPane>
          <TabPane label="项目" name="项目">
            <ProjectTitle />
          </TabPane>
          <TabPane label="应用" name="应用">
            <ApplicationTitle />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "./ArticleTitle";
import ProjectTitle from "./ProjectTitle";
import ApplicationTitle from "./ApplicationTitle";

export default {
  data() {
    return {
      name: "文章"
    };
  },
  methods: {
    names(s) {
      this.name = s;
    }
  },
  components: {
    Article,
    ProjectTitle,
    ApplicationTitle
  }
};
</script>

<style >
.table-wz .ivu-tabs-bar {
  margin-bottom: 0px;
  padding: 0 25px;
}
.table-wz {
  margin: -18px -20px 0 -20px;
  background: #fff;
}

.table-wz .in {
  padding: 20px;
}



.table-wz .tit {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  margin: 15px 0;
}
</style>