<template>
    <div>
        <div class="main-part">
              <div class="in">
                  <Row>
                      <Col span="7">
                          <div class="sider">
                              <div class="content">
                                  <div class="personal">
                                  <div class="imgs"><img src="http://ptt5and7y.bkt.clouddn.com/10.png" alt=""></div>
                                  <div class="userss">
                                      <div class="name"><span>Serati Ma</span></div>
                                      <div class="ti"><span>海纳百川，有容乃大</span></div>
                                  </div>
                                  <div class="message ">
                                      <div><Icon type="ios-archive-outline" size="18" /><span>交互专家</span></div>
                                      <div><Icon type="ios-git-network" size="18" /><span>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span></div>
                                      <div><Icon type="ios-pin-outline" size="18" /><span>浙江省杭州市</span></div>
                                  </div>
                                  </div>
                                  <div class="label">
                                      <div class="ain" >
                                          <div style="margin-bottom:10px;font-size: 14px">标签</div>
                                          <Tag>很有想法的</Tag>
                                          <Tag>专注设计</Tag>
                                          <Tag>辣~</Tag>
                                          <Tag>大长腿</Tag>
                                          <Tag>川妹子</Tag>
                                          <Tag>海纳百川</Tag>
                                      <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签</Tag>
                                      <Button icon="ios-add" type="dashed" size="small" @click="handleAdd"></Button>
                                      </div>
                                  </div>
                                  <div class="tiem">
                                      <GRZX_item/>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col span="17">
                          <div class="tabs">
                              <div class="content">
                                  <div class="tabs">
                                      <div style="padding-top:10px">
                                      <Tabs value="4-1" >
                                          <TabPane label="文章(8)" name="4-1" >
                                              <GRZX_wz/>
                                          </TabPane>
                                          <TabPane label="应用(8)" name="4-2">
                                              <GRZX_yy/>
                                          </TabPane>
                                          <TabPane label="项目(8)" name="4-3">
                                              <GRZX_xm/>
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
    import GRZX_wz from './GRZX_wz.vue'
    import GRZX_xm from './GRZX_xm.vue'
    import GRZX_yy from './GRZX_yy.vue'
    import GRZX_item from './GRZX_item'
    export default {
        data () {
            return {
                count: [0, 1, 2]
            }
        },
        methods: {
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        },
      components:{
          GRZX_wz,
          GRZX_xm,
          GRZX_yy,
          GRZX_item
      }
    }
</script>

<style scoped>



.main-part{
   margin:0 -20px;
}

.main-part .in{
    padding:5px 13px
}

.main-part .in .sider{
    padding: 0 12px;

}

.main-part .in .sider .content{

    background: white;
}

.main-part .in .sider .content .label{
    padding:0 25px
}

.main-part .in .sider .content .label .ain{
    border-top:1px dashed #ccc;
    border-bottom:1px dashed #ccc;
    padding:25px 0 30px 0
}

.main-part .in .tabs{
    padding: 0 12px;
}

.main-part .in .tabs .content{
    background: white;
}

.main-part .in  .content .imgs{
    text-align: center;
    padding:23px 0 3px 0
}
.main-part .in  .content .imgs img{
    width:104px;
    height:104px;
}
.main-part .in  .content  .personal{

}
.main-part .in  .content  .personal .userss{
    text-align: center;
    padding:12px 0
}
.main-part .in  .content  .personal .userss .name{
    font-size:20px;
    color:black;
}
.main-part .in  .content  .personal .userss .ti{
    font-size: 14px;
    color:rgba(0,0,0,.65)
}
.main-part .in  .content  .personal .message{
    font-size: 14px;
    padding:10px 10px 10px 25px;

}
.main-part .in  .content  .personal .message div{
   margin-bottom: 10px;
}
.main-part .in  .content  .personal .message span{
    padding-left: 8px;
}
</style>