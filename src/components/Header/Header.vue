<template>
  <div>
    <div class="header-bar">
      <div class="Control-Strip">
        <div>
          <Icon type="md-search" size="26" />
        </div>
        <div class="prd">
          <Tooltip content="使用文档" placement="bottom">
            <Icon type="md-help-circle" size="20" />
          </Tooltip>
        </div>
        <div class="remind">
          <Poptip placement="bottom-end" width="auto">
            <div>
              <span>
                <Icon type="md-notifications-outline" size="20" style />
                <Badge :count="count"></Badge>
              </span>
            </div>
            <div class="api" slot="content">
               <NotificationBar @sum="num" />
            </div>
          </Poptip>
        </div>
        <div class="user-control">
          <Dropdown>
            <img src="../../assets/userlogo_images/users.png" alt style="width:24px" />
            <span>Serati Ma</span>
            <DropdownMenu slot="list">
              <router-link to="/AccountCenter" class="link">
                <DropdownItem>
                  <Icon type="md-person" size="20" class="ico" />个人中心
                </DropdownItem>
              </router-link>
              <router-link to="/AccountSettings" class="link">
                <DropdownItem>
                  <Icon type="md-settings" size="20" class="ico" />个人设置
                </DropdownItem>
              </router-link>
              <router-link to="/LandingPage" class="link">
                <DropdownItem divided>
                  <Icon type="md-exit" size="20" class="ico" />退出登录
                </DropdownItem>
              </router-link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="language">
          <Dropdown>
            <Icon type="ios-globe" size="20" />
            <DropdownMenu slot="list">
              <DropdownItem>
                <span class="nano">CN</span>
                <span class="kind">简体中文</span>
              </DropdownItem>
              <DropdownItem>
                <span class="nano">HK</span>
                <span class="kind">繁体中文</span>
              </DropdownItem>
              <DropdownItem>
                <span class="nano">GB</span>
                <span class="kind">English</span>
              </DropdownItem>
              <DropdownItem>
                <span class="nano">BR</span>
                <span class="kind">Português</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationBar from "./NotificationBar";
export default {
  data() {
    return {
      state: false,
      count: 0
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    num(i) {
      this.count = i;
    }
  },
  components: {
    NotificationBar
  }
};
</script>

<style scoped>
.header-bar {
  background: #fff;
  height:64px;
  overflow: hidden;
}

.remind {
  padding: 0 10px;
  cursor: pointer;
}

.prd {
  padding: 0 10px;
  cursor: pointer;
}

.user-control {
  font-size: 13px;
  padding: 0 10px 0 15px;
  cursor: pointer;
}

.user-control .ico {
  margin-right: 8px;
}
.user-control img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.Control-Strip {
  display: flex;
}
.language {
  padding: 0 10px;
  cursor: pointer;
}

.language .kind {
  font-size: 14px;
}
.language .nano {
  font-size: 10px;
  margin-right: 5px;
}
</style>