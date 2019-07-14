<template>
  <div>
    <Col span="24">
      <div class="zs">
        <div class="in">
          <div class="top">
            <span>XX 指数</span>
          </div>
          <div class="index">
            <Row>
              <Col span="24">
                <div class="imgs">
                  <img src="http://ptt5and7y.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD%20%2811%29.png" alt />
                </div>
              </Col>
              <div class="source">
                <Col span="8">
                 <div class="personal">
                   <p>
                     <span class="p1"></span><span class="ren">个人</span>
                   </p>
                   <h6>34</h6>
                 </div>
                </Col>
                <Col span="8">
                 <div class="personal team">
                   <p>
                     <span class="p2"></span><span class="ren">团队</span>
                   </p>
                   <h6>22</h6>
                 </div>
                </Col>
                <Col span="8">
                 <div class="personal">
                   <p>
                     <span class="p3"></span><span class="ren">部门</span>
                   </p>
                   <h6>32</h6>
                 </div>
                </Col>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  </div>
</template>

<script>
export default {};
</script>

<style>
.zs {
  padding: 12px;
}
.zs .in {
  background: white;
}
.zs .in .top {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: black;
}

.zs .in .index .imgs {
 
  padding-left: 40px;
}

.zs .in .index  .personal{
 
  text-align: center;
  padding:10px
}

.zs .in .index  .personal .p1{
  display: inline-block;
  width:7px;
  height:7px;
  background: #2d8cf0;
  border-radius: 50%;
  margin-right:6px 
}

.zs .in .index  .personal .p2{
  display: inline-block;
  width:7px;
  height:7px;
  background: #ff9900;
  border-radius: 50%;
  margin-right:6px 
}

.zs .in .index  .personal .p3{
  display: inline-block;
  width:7px;
  height:7px;
  background: #19be6b;
  border-radius: 50%;
  margin-right:6px 
}

.zs .in .index  .personal .ren{
      color: rgba(0,0,0,.45);
    line-height: 22px;
    cursor: pointer;
    font-size: 14px
}
.zs .in .index h6{
  font-size:24px;
  color: black
}

.zs .in .index .team::after{
  position: absolute;
    top: 8px;
    right: 0;
    width: 1px;
    height: 40px;
    background-color: #e8e8e8;
    content: "";
}

.zs .in .index .team::before{
  position: absolute;
    top: 8px;
    left: 0px;
    width: 1px;
    height: 40px;
    background-color: #e8e8e8;
    content: "";
}
</style>
