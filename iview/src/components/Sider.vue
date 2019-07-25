<template>
    <div>
        <Sider ref="side1" hide-trigger collapsible width="260" v-model="isCollapsed" style="">
            <div class="logo">
                <a href="#">
                    <img src="../assets/5.svg" alt>
                    <span>Ant Design Pro</span>
                </a>
            </div>
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        <span>Dashboard</span>
                    </template>
                    <router-link to="/fenxiye" >
                        <MenuItem name="1-1">分析页</MenuItem>
                    </router-link>
                    <router-link to="/Jiankongye" class="link">
                        <MenuItem name="1-2">监控页</MenuItem>
                    </router-link>
                    <router-link to="/gongzuotai" class="link">
                        <MenuItem name="1-3">工作台</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        <span>表单页</span>
                    </template>
                    <router-link to="/jcbd" class="link">
                        <MenuItem name="2-1">基础表单</MenuItem>
                    </router-link>
                    <router-link to="/fbbdtitle" class="link">
                        <MenuItem name="2-2">分布表单</MenuItem>
                    </router-link>
                    <router-link to="/gjbd" class="link">
                        <MenuItem name="2-3">高级表单</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>列表页</span>
                    </template>
                    <Submenu name="4">
                        <template slot="title">搜索列表</template>
                        <router-link to="/table_wz" class="link">
                            <MenuItem name="4-1">搜索列表(文章)</MenuItem>
                        </router-link>



                    </Submenu>
                    <router-link to="/table_cx" class="link">
                        <MenuItem name="3-2">查询列表</MenuItem>
                    </router-link>
                    <router-link to="/table_bz" class="link">
                        <MenuItem name="3-3">标准列表</MenuItem>
                    </router-link>
                    <router-link to="/table_kp" class="link">
                        <MenuItem name="3-4">卡片列表</MenuItem>
                    </router-link>
                </Submenu>

                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>详情页</span>
                    </template>
                    <router-link to="/JCXQ" class="link">
                        <MenuItem name="5-1">基础详情页</MenuItem>
                    </router-link>
                    <router-link to="/gjXQ" class="link">
                        <MenuItem name="5-2">高级详情页</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>结果页</span>
                    </template>
                    <router-link to="/CGY" class="link">
                        <MenuItem name="6-1">成功页</MenuItem>
                    </router-link>
                    <router-link to="/SBY" class="link">
                        <MenuItem name="6-2">失败页</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>异常页</span>
                    </template>
                    <router-link to="/ycy_403" class="link">
                        <MenuItem name="7-1">403</MenuItem>
                    </router-link>
                    <router-link to="/ycy_404" class="link">
                        <MenuItem name="7-2">404</MenuItem>
                    </router-link>
                    <router-link to="/ycy_500" class="link">
                        <MenuItem name="7-3">505</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>个人页</span>
                    </template>
                    <router-link to="/GRZX" class="link">
                        <MenuItem name="8-1">个人中心</MenuItem>
                    </router-link>
                    <router-link to="/GRPZ" class="link">
                        <MenuItem name="8-2">个人设置</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="9">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        <span>图形编辑器</span>
                    </template>
                    <router-link to="/ProcessEditor" class="link">
                        <MenuItem name="9-1">流程编辑器</MenuItem>
                    </router-link>
                    <router-link to="/BrainMapEditor" class="link">
                        <MenuItem name="9-2">脑图编辑器</MenuItem>
                    </router-link>
                    <router-link to="/TopologyEditor" class="link">
                        <MenuItem name="9-3">拓扑编辑器</MenuItem>
                    </router-link>
                </Submenu>
            </Menu>
        </Sider>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .logo{

        height:64px;
        line-height: 64px;
        margin-left: 20px;
    }
    .logo img{
        height: 32px;
        display: inline-block;
        vertical-align: middle;

        margin-right: 10px;
    }

    .logo span{
        font-size: 20px;
        vertical-align: middle;

        color:#fff;
    }
    .link{
        color:#fff;
    }
</style>