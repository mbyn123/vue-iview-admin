<template>
  <div>
    <Row>
      <Col span="24" >
        <div>
          <div class="stores">
               <span class="next" @click="shang"><Icon type="ios-arrow-back" color="#ccc"/></span>
            <div class="inner">
              <div class="tabs" :style="style">    
                <div class="tab" v-for="(tabs,index) in tabsarr" :key="index">
                  <div class="wen">
                    <div class="p1">{{tabs.title}}</div>
                    <div class="p2">转化率</div>
                    <div class="p3">{{tabs.num1}}</div>
                  </div>
                  <div class="huan">
                    <i-Circle
                      :percent=tabs.num2
                      size="40"
                      stroke-width="20"
                      trail-width="20"
                      stroke-linecap="square"
                    ></i-Circle>
                  </div>
                </div>
              </div>
            </div>
            <span class="last" @click="xia"><Icon type="ios-arrow-forward" color="#ccc"/></span>
          </div>
          <div style="padding-left:50px;">
            <img src="http://ptt5and7y.bkt.clouddn.com/8.png" alt>
          </div>
          <div style="padding-left:50px;">
            <img src="http://ptt5and7y.bkt.clouddn.com/9.png" alt>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
    data(){
        return{
          style:"transform: translate3d(0px, 0px, 0px);",
       
            tabsarr:[
                {
                    title:"Stores1",
                    num1:"80%",
                    num2:"80"
                },
                 {
                    title:"Stores2",
                    num1:"40%",
                    num2:"40"
                },
                 {
                    title:"Stores3",
                    num1:"40%",
                    num2:"40"
                },
                 {
                    title:"Stores4",
                    num1:"60%",
                    num2:"60"
                },
                 {
                    title:"Stores5",
                    num1:"50%",
                    num2:"50"
                },
                {
                    title:"Stores6",
                    num1:"60%",
                    num2:"60"
                },
                {
                    title:"Stores7",
                    num1:"90%",
                    num2:"90"
                },
                {
                    title:"Stores8",
                    num1:"30%",
                    num2:"30"
                },
                {
                    title:"Stores9",
                    num1:"700%",
                    num2:"70"
                },
               
            ]
        }
    },
    methods:{
       shang(){
          this.style="transform: translate3d(0px, 0px, 0px);"
        
       },
       xia(){
       
           this.style="transform: translate3d(-300px, 0px, 0px);"
       }
    }
};
</script>

<style>
.stores {
   position: relative;
    padding:20px 50px 0 50px;;
}

.stores .inner {
  
     overflow: hidden;
     white-space: nowrap;
      display: inline-block;
      width:100%;
}

.stores  .next{
    display: inline-block;
  
    position: absolute;
    top:45%;
    left:30px;
    cursor: pointer
}

.stores  .last{
    display: inline-block;
 
    position: absolute;
    right:30px;
    top:45%;
     cursor: pointer
}

.stores .inner .tabs{
    display:inline-block;
    overflow: hidden;
    transition: 0.3s
  
}

.stores .inner .tab{
  
     display: inline-block;
     margin-right: 80px;
}

.stores .inner .tab .wen{
    display: inline-block;

}
.stores .inner .tab .huan{
    display: inline-block;
    margin-left:30px;
}

.stores .inner .tab .wen .p1{
    font-size:16px;
    color: rgba(0,0,0,.65);
    margin-bottom:16px;
}

.stores .inner .tab .wen .p2{
    font-size:14px;
    color:rgba(0,0,0,.45);
}

.stores .inner .tab .wen .p3{
    color:black;
    font-size:24px;
}
</style>

