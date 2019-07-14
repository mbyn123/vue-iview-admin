<template>
    <div>
     <Col span="24">
         <div class="dt">
           <div class="in">
                 <div class="top">
                     <span>动态</span>
                 </div>
                 <Row>
                 <Col span="24">
                 <div class="mains">
                   <ul>
                      <li class="tabs" v-for="(dt,index) in dtarr" :key="index">
                        <div class="lists">
                            <div class="imgs">
                               <img :src=dt.img alt="">
                            </div>
                            <div>
                                <div class="content"><span>{{dt.content1}}</span>&nbsp;<a href="">{{dt.src1}}</a>&nbsp;<span>{{dt.content2}}</span>&nbsp;<a href="">{{dt.src2}}</a></div>
                                <div class="time">{{dt.time}}</div>
                            </div>
                        </div>
                      </li>
                   </ul>
                 </div>
                 
                 </Col>
                 </Row>
           </div>
          </div>
        </col>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dtarr:[
                {
                    img:"http://ptt5and7y.bkt.clouddn.com/10.png",
                    content1:"曲丽丽 在",
                    content2:"新建项目",
                    src1:"高逼格设计天团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img:"http://ptt5and7y.bkt.clouddn.com/WhxKE.png",
                    content1:"付小小 在",
                    content2:"新建项目",
                    src1:"高逼格设计天团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img:"http://ptt5and7y.bkt.clouddn.com/gaO.png",
                    content1:"林东东 在",
                    content2:"新建项目",
                    src1:"中二少女团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img:"http://ptt5and7y.bkt.clouddn.com/jZUIxm.png",
                    content1:"周星星 将",
                    content2:"更新至已发布状态",
                    src1:"5 月日常迭代",
                    src2:"",
                    time:"3 小时前"
                },
                {
                    img:"http://ptt5and7y.bkt.clouddn.com/zz.png",
                    content1:"朱偏右 在",
                    content2:"发布了",
                    src1:"工程效能",
                    src2:"留言",
                    time:"3 小时前"
                },
                 {
                    img:"http://ptt5and7y.bkt.clouddn.com/ubnK.png",
                    content1:"乐哥 在",
                    content2:"新建项目",
                    src1:"程序员日常",
                    src2:"品牌迭代",
                    time:"3 小时前"
                },
                
            ]
        }
    }
    
}
</script>

<style>
.dt{
    padding: 12px 12px 12px 3px;
}
.dt .in{
    background: white
}

.dt .in .top{
    padding:20px;
    font-size: 16px;
    color: black;
    border-bottom: 1px solid #ccc
}

.dt .in .mains{
    padding:0 20px;
}

.dt .in .mains .lists{

    display: flex;
    align-items: flex-start;
    padding:17px 0
}

.dt .in .mains .lists .imgs{
    width:32px;
    height:32px;
    margin-right:15px
}

.dt .in .mains .lists .imgs img{
    width:100%;
    height:100%;
}

.dt .in .mains .lists .content{
   
    font-size:14px;
    margin-bottom:5px;
}

.dt .in .mains .lists .time{
    color:rgba(0,0,0,.25)
}

.dt .in .mains .tabs{
    border-bottom:1px solid #ccc
}

ul li{
    list-style: none;
}
</style>
