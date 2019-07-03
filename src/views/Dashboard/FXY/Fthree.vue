<template>
  <div>
    <Row>
      <Col span="11" class="card" style="">
       <span style="float:right;margin-right:20px;"> 
         <Dropdown >
        <a href="javascript:void(0)">
           <Icon type="ios-more" size="20" color="#ccc"/>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>操作一</DropdownItem>
            <DropdownItem>操作二</DropdownItem>
            
        </DropdownMenu>
    </Dropdown>
    </Dropdown>
         </span>
        <div>
         <h2 slot="title"> 线上热门搜索</h2>
         <Col span="11" >
         <div >
           <div class="o">
               <span>
                   <span style="margin-right:10px;">搜索用户数</span>
                   <span> <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip></span>
               </span>
           </div>
           <div class="n">
               <span class="l">12,321</span>
               <span class="r">17.1<Icon type="md-arrow-dropup" color="red"/></span>
           </div>
         </div>
         <div class="i">
             <img src="http://ptt5and7y.bkt.clouddn.com/4.png" alt="">
         </div>
         </Col>
          <Col span="11" offset="2" >
          <div >
           <div class="o">
               <span>
                   <span style="margin-right:10px;">人均搜索次数</span>
                   <span> <Tooltip content="指示说明" placement="top" offset>
                        <Icon type="ios-alert-outline" size="16" color="black" class="ico"/>
                      </Tooltip></span>
               </span>
           </div>
           <div class="n">
               <span class="l">2.7</span>
               <span class="r">26.2<Icon type="md-arrow-dropdown" color="green"/></span>
           </div>
         </div>
         <div class="i">
             <img src="http://ptt5and7y.bkt.clouddn.com/4.png" alt="">
         </div>

          </Col>
         </div>
           <Col span="24" >
            <Table :columns="historyColumns" :data="historyData"></Table>
              </Table>
              <Col span="12" offset="15" style="margin-top:10px;">
        <Page :total="dataCount" :page-size="pageSize"   @on-change="changepage"></Page>
              </Col>
           </Col>
      </Col>
      
       
      <Col span="11" offset="2" >
         <div class="card2 clearfix"> 
              <h2>销售额类别占比</h2>
              <span style="float:right;margin-right:20px;">
                <Dropdown >
        <a href="javascript:void(0)">
           <Icon type="ios-more" size="20" color="#ccc"/>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>操作一</DropdownItem>
            <DropdownItem>操作二</DropdownItem>
            
        </DropdownMenu>
    </Dropdown>
    </Dropdown>
         </span>
            <Tabs type="card" >
        <TabPane label="全部渠道" >
             <Col span="16">
            <div  >
             <span class="p">销售额</span >
             <div class="pp" > 
                 <img src="http://ptt5and7y.bkt.clouddn.com/5.png" alt="">
                 <div class="p1"  v-for="(xse,index) in xses" :key="index">
                 <div class="p2">销售额</div>
                <div class="p3"> {{xse.num1}}</div>
                 </div>
             </div>
            </div>
          </Col>
          <Col span="8">
          <div >
              <div>
                  <ul v-for="(list,index) in listsarr" :key="index" >
                    <li  >
                        <span class="n1"></span>
                        <span class="n2">{{list.title}}</span>
                        <span class="n3">|</span>
                        <span class="n4">{{list.num1}}</span>
                        <span class="n5">{{list.num2}}</span>
                    </li>
                  </ul>
              </div>
          </div>
          </Col>
        </TabPane>
        <TabPane label="线上">
             <Col span="16">
            <div  >
             <span class="p">销售额</span >
             <div class="pp" > 
                 <img src="http://ptt5and7y.bkt.clouddn.com/5.png" alt="">
                 <div class="p1"  v-for="(xse,index) in xses" :key="index">
                 <div class="p2">销售额</div>
                <div class="p3"> {{xse.num2}}</div>
                 </div>
             </div>
            </div>
          </Col>
          <Col span="8">
          <div >
              <div>
                  <ul v-for="(list2,index) in listsarr2" :key="index" >
                    <li  >
                        <span class="n1"></span>
                        <span class="n2">{{list2.title}}</span>
                        <span class="n3">|</span>
                        <span class="n4">{{list2.num1}}</span>
                        <span class="n5">{{list2.num2}}</span>
                    </li>
                  </ul>
              </div>
          </div>
          </Col>
        </TabPane>
        <TabPane label="门店">
             <Col span="16">
            <div  >
             <span class="p">销售额</span >
             <div class="pp" > 
                 <img src="http://ptt5and7y.bkt.clouddn.com/5.png" alt="">
                 <div class="p1" v-for="(xse,index) in xses" :key="index">
                 <div class="p2">销售额</div>
                <div class="p3" > {{xse.num3}}</div>
                 </div>
             </div>
            </div>
          </Col>
          <Col span="8">
          <div >
              <div>
                  <ul v-for="(list,index) in listsarr3" :key="index" >
                    <li  >
                        <span class="n1"></span>
                        <span class="n2">{{list.title}}</span>
                        <span class="n3">|</span>
                        <span class="n4">{{list.num1}}</span>
                        <span class="n5">{{list.num2}}</span>
                    </li>
                  </ul>
              </div>
          </div>
          </Col>
        </TabPane>
            </Tabs>
           
         </div>
         
      </Col>
    </Row>
  </div>
</template>

<script>
let testData = {
     "histories": [
            {
                        name: '1',
                        age: '76%',
                        address:'	搜索关键词-0',
                        date: '830'
                    },
                     {
                        name: '2',
                        age: '74%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                     {
                        name: '3',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                     {
                        name: '4',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '840'
                    },
                     {
                        name: '5',
                        age: '71%',
                        address: '	搜索关键词-0',
                        date: '810'
                    },
                     {
                        name: '6',
                        age: '74%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                     {
                        name: '7',
                        age: '26%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                     {
                        name: '8',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '430'
                    },
                     {
                        name: '9',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '820'
                    },
                     {
                        name: '10',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '11',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },{
                        name: '12',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '13',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },{
                        name: '14',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '15',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                    {
                        name: '16',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '11',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                    {
                        name: '17',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '18',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                    {
                        name: '19',
                        age: '76%',
                        address: '	搜索关键词-0',
                        date: '830'
                    }, {
                        name: '20',
                        age: '56%',
                        address: '	搜索关键词-0',
                        date: '830'
                    },
                  
        ]
}

export default {
    data(){
        return{
            xses:[
                {
                    num1:'¥ 15,781'
                },
                {
                    num2:'¥ 1,149'
                },
                {
                    num3:'¥ 951'
                },
            ],
           listsarr:[
               {
                   title:"家用电器",
                   num1:"28.79%",
                   num2:"¥ 4,544"
               },
               {
                   title:"食用酒水",
                   num1:"21.04%",
                   num2:"¥ 3,321"
               },
               {
                   title:"个护健康",
                   num1:"19.73%",
                   num2:"¥ 3,113"
               },
               {
                   title:"服饰箱包",
                   num1:"14.83%",
                   num2:"¥ 2,341"
               },
               {
                   title:"母婴产品",
                   num1:"7.80%",
                   num2:"¥ 1,231"
               },
               {
                   title:"其他",
                   num1:"7.80%",
                   num2:"¥ 1,231"
               },
              
           ],
           listsarr2:[
               {
                   title:"家用电器",
                   num1:"21.24%",
                   num2:"¥ 244"
               },
               {
                   title:"食用酒水",
                   num1:"27.94%",
                   num2:"¥ 321"
               },
               {
                   title:"个护健康",
                   num1:"27.07%",
                   num2:"¥ 311"
               },
               {
                   title:"服饰箱包",
                   num1:"3.57%",
                   num2:"¥ 41"
               },
               {
                   title:"母婴产品",
                   num1:"10.53%",
                   num2:"¥ 121"
               },
               {
                   title:"其他",
                   num1:"9.66%",
                   num2:"¥ 111"
               },
              
           ],
             listsarr3:[
            
               {
                   title:"服饰箱包",
                   num1:"26.81%",
                   num2:"¥ 255"
               },
             
               {
                   title:"其他",
                   num1:"6.83%",
                   num2:"¥ 65"
               },
              
           ],
             ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:5,
              
             historyColumns: [
                     {
                        title: '排名',
                        key: 'name'
                    },
                    {
                        title: '搜索关键词',
                        key: 'address'
                    },
                    {
                        title: '用户数',
                        key: 'date',
                        sortable: true
                    },
                    
                    {
                        title: '周涨幅',
                        key: 'age',
                        sortable: true
                    },
                   
                ],
             

                historyData: [ ]
                
        }
    },
          methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                
                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                    
               
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            }
        },
        created(){
             this.handleListApproveHistory();
        }
    
}
</script>

<style>
.card2 ul li{
    list-style: none;
    height:22px;
    margin-top: 20px;
    
  
}

ul li span{
    display: inline-block
}

.n1{
    width:10px;
    height:10px;
    border-radius: 50%;
    margin-right:5px;
    background:#ccc
}

 .n2{
    font-size:14px;
    color:black
}

.n3{
   margin: 0 10px 0 10px;
}

.n4{
    color: rgba(0,0,0,.45);
    margin-right:40px;
}

.card2{
   
     margin-top:20px;
    padding:10px;
   
     
}
.card2 .p{
    font-size: 14px;
    color:black;
     margin-left: 10px
}

.card2 .pp{

}

.card2 .pp img{
   
    margin-left:40px;
    
}

.card2 .p1{
   position: absolute;
   top:45%;
   left:45%;
}

.card2 .p2{
     font-size:14px;
    color:rgba(0,0,0,.45);
   
}

.card2 .p3{
    font-size:23px;
    color:rgba(0,0,0,.45);
      margin-left: -20px
}

.card{

margin-top:20px;
padding:10px;
}

.o{
    height:22px;
    
}

.card h2{
    border-bottom: 1px solid #ccc;
    margin-bottom:20px;
    padding-bottom:20px;
}

.n{
     height:44px;
   
    line-height: 44px;
}
.n .l{
    font-size:25px;
    color:black;
    margin-right: 20px;
}

.i{
    height:50px;
     
}

.i img{
  margin-top: -50px;
}

</style>
