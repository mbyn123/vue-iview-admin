<template>
  <div>
    <div class="bztables">
      <div class="in">
        <div style="padding: 25px;display: flex;justify-content: space-between ">
          <div style="font-size: 16px;color:#333">基本列表</div>
          <div>
            <div style="display: inline-block">
              <RadioGroup type="button">
                <Radio label="large">全部</Radio>
                <Radio label="default">进行中</Radio>
                <Radio label="small">等待中</Radio>
              </RadioGroup>
            </div>
            <div style="display: inline-block;margin-left: 20px">
              <Input search placeholder="请输入" style="width:272px" />
            </div>
          </div>
        </div>
        <div class="bzadd">
          <span style="font-size: 14px">
            <Icon type="md-add" size="20" class="ico" color="#333" />添加
          </span>
        </div>
        <div class="bzlist">
          <div>
            <div v-for="value in bzdata" :key="value.id">
              <div class="item">
                <div style="border-bottom:1px solid #ccc;padding:18px 5px 16px 5px">
                  <Row>
                    <Col span="13">
                      <div>
                        <span>
                          <img :src="value.img" alt />
                        </span>
                        <div class="imgs">
                          <div class="name">{{value.team}}</div>
                          <div>{{value.title}}</div>
                        </div>
                      </div>
                    </Col>
                    <Col span="11">
                      <div class="content">
                        <div>
                          <div>Owner</div>
                          <div>{{value.name}}</div>
                        </div>
                        <div>
                          <div>开始时间</div>
                          <div>{{value.time}}</div>
                        </div>
                        <Progress
                          :percent="value.number"
                          :status="value.state"
                          :stroke-width="8"
                          style="padding-top: 10px;width:220px; "
                        />
                        <div style="padding-top: 10px;">
                          <span style="color:#2d8cf0;cursor: pointer;">编辑</span>
                          <span
                            style="display: inline-block;width:1px;height:10px;color:#e8e8e8;margin: 0 5px"
                          >|</span>
                          <Dropdown style="display: inline-block">
                            <a href="javascript:void(0)">
                              <span>更多</span>
                              <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem>编辑</DropdownItem>
                              <DropdownItem>删除</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: right;padding:25px 30px 40px 0">
            <Page :total="100" show-elevator show-sizer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bzdata: [
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
          team: "Alipay",
          title: "那是一种内在的东西， 他们到达不了，也无法触及的",
          name: "付小小",
          time: "2019-07-12 17:24",
          state: "normal",
          number: 61
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/p.png",
          team: "Angular",
          title: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
          name: "曲丽丽",
          time: "2019-07-12 15:24",
          state: "wrong",
          number: 99
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/z.png",
          team: "Ant Design",
          title: "生命就像一盒巧克力，结果往往出人意料",
          name: "林东东",
          time: "2019-07-12 13:24",
          state: "normal",
          number: 84
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/n.png",
          team: "Ant Design Pro",
          title: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
          name: "周星星",
          time: "2019-07-12 11:24",
          state: "normal",
          number: 91
        },
        {
          img: "http://pt1mv9q6v.bkt.clouddn.com/opng.png",
          team: "Bootstrap",
          title: "那时候我只会想自己想要什么，从不想自己拥有什么",
          name: "吴加好",
          time: "2019-07-12 09:24",
          state: "wrong",
          number: 66
        }
      ]
    };
  }
};
</script>

<style scoped>
.bzlist .item {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  padding: 0 25px;
}
.bzlist .item .imgs {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}

.bzlist .item .imgs .name {
  margin-bottom: 5px;
}
.bzlist .item .imgs .name:hover {
  color: #2d8cf0;
  cursor: pointer;
}

.bzlist .item .content {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
.bzlist .item img {
  width: 48px;
}
.bztables {
  padding: 25px 5px 0 5px;
}

.bztables .in {
  background: #fff;
}
.bzadd {
  border: 1px dashed #ccc;
  text-align: center;
  padding: 5px 0;
}
.bzadd:hover {
  border: 1px dashed #2d8cf0;
}
.bzadd .ico {
  display: inline-block;
  vertical-align: top;
}
</style>