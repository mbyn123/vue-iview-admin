<template>
<div>
   <Row>
     <col span="24">
      <div class="mainfrom">
          <Row>
              <Col span="10" offset="6" >
              <div class="in">
        <Form  :label-width="90" :rules="ruleValidate" :model="formValidate" ref="formValidate">
            <FormItem label="标题 :" label-for="title" prop="title" >
                <Input  type="text"  placeholder="给目标起个名字" element-id="title"  v-model="formValidate.title"></Input>
           </FormItem>
             <FormItem label="起止日期 :" label-for="time" prop="time" > 
                <DatePicker type="date" split-panels placeholder="开始日期" size="default" element-id="time" v-model="formValidate.time" ></DatePicker>   
            </FormItem>
            <FormItem label="起止日期 :" label-for="time" prop="deadline" > 
                 <DatePicker type="date" split-panels placeholder="结束日期" size="default"  v-model="formValidate.deadline" ></DatePicker>  
            </FormItem>
            <FormItem label="目标描述 :" label-for="description" prop="description">
                <Input  type="textarea"  placeholder="请输入你的阶段性工作目标"   element-id="description" v-model="formValidate.description"></Input>
           </FormItem>
            <FormItem label="衡量标准 :" label-for="standard" prop="standard">
                <Input  type="textarea"  placeholder="请输入衡量标准"  element-id="standard" v-model="formValidate.standard"></Input>
           </FormItem>
           <FormItem label="客户(选填) :" label-for="user">
                <Input  type="text"  placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" element-id="user"></Input>
           </FormItem>
            <FormItem label="邀请人(选填) :" label-for="Invitation">
               <Input  type="text"  placeholder="请直接 @姓名／工号，最多可邀请 5 人" element-id="Invitation"></Input>
           </FormItem>
            <FormItem label="权重(选中) :" label-for="user">
               <InputNumber   placeholder="请输入"></InputNumber><span style="margin-left:5px;font-size:14px">%</span>
           </FormItem>
            <FormItem label="目标公开 :" >
               <RadioGroup >
                  <Radio label="公开" >
                      <span @click="tugm">公开</span>
                  </Radio>
                  <Radio label="部分公开"  >
                      <span  @click="tugm2">部分公开</span>
                  </Radio>
                  <Radio label="不公开">
                      <span  @click="tugm3">不公开</span>
                  </Radio>
              </RadioGroup>
           
              <div v-show="item1">
                 <span >客户、邀评人默认被分享</span>
              </div>  
               <div v-show="item2">
                   <Select v-model="model16" multiple :max-tag-count="2" placeholder="公开始">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                 <span>客户、邀评人默认被分享</span>
              </div>
               <div v-show="item3">
                 <span>客户、邀评人默认被分享</span>
              </div>      
            </FormItem>   
           
                <div style="padding-left:100px">
                 <Button type="primary" style="margin-right:20px"  @click="handleSubmit('formValidate')"  >提交</Button>
                 <Button >保存</Button>
                  </div>
      
       
      </Form>
            </div>
              </Col>
          </Row> 
           </div>
     </Col>
   </Row>
</div>
</template>

<script>
export default {
data () {
    return {
     
         formValidate: {
                    title: '',
                    time:'',
                    deadline:'',
                    description:'',
                    standard:''
                },
         ruleValidate: {
                    title: [
                        { required: true, message: '请输入标题', trigger: 'blur' }
                    ],
                     time: [
                        { required: true, type: 'date', message: '请选择开始日期', trigger: 'change' }
                    ],
                    deadline: [
                        { required: true, type: 'date', message: '请选择结束日期', trigger: 'change' }
                    ],

                    description: [
                        { required: true, message: '请输入目标描述', trigger: 'blur' }
                    ],
                     standard: [
                        { required: true, message: '请输入衡量标准', trigger: 'blur' }
                    ],
                },        
            item1:false,
            item2:false,
            item3:false,
              cityList: [
                    {
                        value: '同事甲',
                        label: '同事甲'
                    },
                    {
                        value: '同事乙',
                        label: '同事乙'
                    },
                    {
                        value: '同事丙',
                        label: '同事丙'
                    },
                   
                ],
                model16: []
        }
            },
    methods:{
         handleSubmit (name) {
                 
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功');
                        
                    } else {
                        this.$Message.error();
                    }
                })
                
            
            },
             handleReset (name) {
                this.$refs[name].resetFields();
            },
      tugm(){
               this.item1=true
               this.item2=false
               this.item3=false     
      },
      tugm2(){
               this.item2=true
               this.item1=false
               this.item3=false     
       },
       tugm3(){
               this.item3=true
               this.item2=false
               this.item1=false     
       }
}
        
}
</script>

<style>
.mainfrom{
   
    padding:40px;
    margin:43px 2px;
    background: white 
}


</style>
