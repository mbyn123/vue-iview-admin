<template>
  <div>
    <Submenu name="1" class="submenu">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        <span>Dashboard</span>
      </template>
      <MenuItem name="1-1" to="/Analysis">分析页</MenuItem>
      <MenuItem name="1-2" to="/Monitor">监控页</MenuItem>
      <MenuItem name="1-3" to="/Workplace">工作台</MenuItem>
    </Submenu>
    <Submenu name="2" class="submenu">
      <template slot="title">
        <Icon type="ios-create" />
        <span>表单页</span>
      </template>
      <MenuItem name="2-1" to="/BasicForm">基础表单</MenuItem>
      <MenuItem name="2-2" to="/StepForm">分布表单</MenuItem>
      <MenuItem name="2-3" to="/AdvancedForm">高级表单</MenuItem>
    </Submenu>
    <Submenu name="3" class="submenu">
      <template slot="title">
        <Icon type="ios-list-box-outline" />
        <span>列表页</span>
      </template>
      <Submenu name="4">
        <template slot="title">搜索列表</template>
        <MenuItem name="4-1" to="/SearchList">搜索列表</MenuItem>
      </Submenu>
      <MenuItem name="3-2" to="/SearchTable">查询列表</MenuItem>
      <MenuItem name="3-3" to="/BasicList">标准列表</MenuItem>
      <MenuItem name="3-4" to="/CardList">卡片列表</MenuItem>
    </Submenu>
    <Submenu name="5" class="submenu">
      <template slot="title">
        <Icon type="md-list-box" />
        <span>详情页</span>
      </template>
      <MenuItem name="5-1" to="/BasicProfile">基础详情页</MenuItem>
      <MenuItem name="5-2" to="/AdvancedProfile">高级详情页</MenuItem>
    </Submenu>
    <Submenu name="6" class="submenu">
      <template slot="title">
        <Icon type="ios-checkmark-circle-outline" />
        <span>结果页</span>
      </template>
      <MenuItem name="6-1" to="/Success">成功页</MenuItem>
      <MenuItem name="6-2" to="/Fail">失败页</MenuItem>
    </Submenu>
    <Submenu name="7" class="submenu">
      <template slot="title">
        <Icon type="md-nuclear" />
        <span>异常页</span>
      </template>
      <MenuItem name="7-1" to="/Exception_403">403</MenuItem>
      <MenuItem name="7-2" to="/Exception_404">404</MenuItem>
      <MenuItem name="7-3" to="/Exception_500">505</MenuItem>
    </Submenu>
    <Submenu name="8" class="submenu">
      <template slot="title">
        <Icon type="md-person" />
        <span>个人页</span>
      </template>
      <MenuItem name="8-1" to="/AccountCenter">个人中心</MenuItem>
      <MenuItem name="8-2" to="/AccountSettings">个人设置</MenuItem>
    </Submenu>
    <Submenu name="9" class="submenu">
      <template slot="title">
        <Icon type="md-moon" />
        <span>富文本编辑器</span>
      </template>

      <MenuItem name="9-1" to="/ProcessEditor">流程编辑器</MenuItem>
    </Submenu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
