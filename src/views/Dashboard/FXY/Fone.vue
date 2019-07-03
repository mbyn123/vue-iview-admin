<template>
     <Row :gutter="16" >
            <Col span="6">
              <Card shadow>
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>总销售额</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">¥ 126,560</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;line-height:46px;">
                  <span>周同比</span>
                  <span style="color:black;margin-right:20px">12% <Icon type="md-arrow-dropup" color="red"/></span>
                  <span>日同比</span>
                  <span style="color:black">11% <Icon type="md-arrow-dropdown" color="green"/></span>
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>日销售额</span>
                  <span>￥ 12,423</span>
                </div>
              </Card>
            </Col>
            <Col span="6">
              <Card shadow>
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>访问量</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">8,846</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;padding-bottom:5px">
                  <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD.png" alt style="margin-top:-50px;object-fit:cover;">
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>日访问量</span>
                  <span>1,234</span>
                </div>
              </Card>
            </Col>
            <Col span="6">
              <Card shadow>
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>支付笔数</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">6,560</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;">
                  <img src="http://ptt5and7y.bkt.clouddn.com/2.png" alt style="object-fit:cover;margin-top:-50px;">
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>转化率</span>
                  <span>60%</span>
                </div>
              </Card>
            </Col>
            <Col span="6">
              <Card shadow>
                <div style="font-size:14px;color:rgba(0,0,0,.45);  position: relative;">
                  <div>
                    <span>访问量</span>
                  </div>
                  <div>
                    <span style="font-size:30px;color:black">78%</span>
                    <span style="position: absolute;right:4px;top:0px;">
                      <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip>
                    </span>
                  </div>
                </div>
                <div style="height:46px;">
                  <Progress :percent="78" :stroke-width="7" stroke-color="#19be6b"/>
                </div>
                <div style="border-top:1px solid #ccc;padding-top:10px;">
                  <span>周同比</span>
                  <span style="color:black;margin-right:20px">12%<Icon type="md-arrow-dropup" color="red"/></span>
                  <span>日同比</span>
                  <span style="color:black">11% <Icon type="md-arrow-dropdown" color="green"/></span>
                </div>
              </Card>
            </Col>
          </Row>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
