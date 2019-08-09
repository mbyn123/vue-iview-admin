
<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side1"
        breakpoint="md"
        style="background:#fff"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <div class="logo">
          <a href="#">
            <img src="../assets/layout_images/logo.svg" alt />
            <span>vue-iview-admin</span>
          </a>
        </div>
        <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses" accordion>
          <SiderMenu />
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar" style="background:#fff">
          <Row>
            <Col :xs="4" :sm="10" :md="10" :lg="16" :xl="16" :xxl="19">
              <Icon
                @click.native="collapsedSider"
                :class="rotateIcon"
                :style="{margin: '0 20px'}"
                type="md-menu"
                size="24"
              ></Icon>
            </Col>
            <Col :xs="20" :sm="14" :md="14" :lg="8" :xl="8" :xxl="5">
              <HeaderIN />
            </Col>
          </Row>
        </Header>
        <Content :style="{margin: '20px', background: 'rgb(245,247,249)', minHeight: '260px'}">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import HeaderIN from "../components/Header/Header";
import SiderMenu from "../components/SiserMenu";
export default {
  data() {
    return {
      isCollapsed: true
    };
  },
  computed: {
    fun(s) {
      console.log(s);
    },
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  },

  components: {
    SiderMenu,
    HeaderIN
  }
};
</script>
<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 70px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.menu-item i:nth-child(3) {
  display: none;
}

.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}


.collapsed-menu .submenu{
   height:68px;
   overflow: hidden;
  
}



.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.logo {
  height: 64px;
  line-height: 64px;
  margin-left: 20px;
}
.logo img {
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.logo span {
  font-size: 16px;
  vertical-align: middle;
  font-weight: bold;
  color: #333;
}
</style>