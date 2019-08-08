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
                   <div>
                      <div class="tabs" v-for="item in dtarr" :key="item.id">
                        <div class="lists">
                            <div class="imgs">
                               <img :src=item.img alt="">
                            </div>
                            <div>
                                <div class="content"><span>{{item.content1}}</span>&nbsp;<a href="">{{item.src1}}</a>&nbsp;<span>{{item.content2}}</span>&nbsp;<a href="">{{item.src2}}</a></div>
                                <div class="time">{{item.time}}</div>
                            </div>
                        </div>
                      </div>
                   </div>
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
                     img: require('../../../assets/userlogo_images/alipay.png'),
                    content1:"曲丽丽 在",
                    content2:"新建项目",
                    src1:"高逼格设计天团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img: require('../../../assets/userlogo_images/react.png'),
                    content1:"付小小 在",
                    content2:"新建项目",
                    src1:"高逼格设计天团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img:require('../../../assets/userlogo_images/vue.png'),
                    content1:"林东东 在",
                    content2:"新建项目",
                    src1:"中二少女团",
                    src2:"六月迭代",
                    time:"3 小时前"
                },
                {
                    img:require('../../../assets/userlogo_images/angular.png'),
                    content1:"周星星 将",
                    content2:"更新至已发布状态",
                    src1:"5 月日常迭代",
                    src2:"",
                    time:"3 小时前"
                },
                {
                    img:require('../../../assets/userlogo_images/bro.png'),
                    content1:"朱偏右 在",
                    content2:"发布了",
                    src1:"工程效能",
                    src2:"留言",
                    time:"3 小时前"
                },
                 {
                    img:require('../../../assets/userlogo_images/pro.png'),
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

<style scoped>
.dt{
    padding: 12px 12px 12px 3px;
}
.dt .in{
    background: #fff
}

.dt .in .top{
    padding:20px;
    font-size: 16px;
    color: #333;
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


</style>
