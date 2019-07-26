<template>
    <div>

    </div>
</template>

<script>
    export default {


        data(){
            return{
                cityList4: [
                    {
                        value: '付晓晓',
                        label: '付晓晓'
                    },
                    {
                        value: '周毛毛',
                        label: '周毛毛'
                    },

                ],
                cityList5: [
                    {
                        value: '付晓晓',
                        label: '付晓晓'
                    },
                    {
                        value: '周毛毛',
                        label: '周毛毛'
                    },

                ],
                cityList6: [
                    {
                        value: '公开',
                        label: '公开'
                    },
                    {
                        value: '私密',
                        label: '私密'
                    },

                ],
                formValidate: {
                    t1:'',
                    t2:'',
                    t3:'',
                    t4:'',
                    t5:'',
                    t6:''
                },
                ruleValidate: {
                    t1: [
                        { required: true,message: '请输入仓库名称', trigger: 'change' }
                    ],
                    t2: [
                        { required: true, message: '请输入', trigger: 'blur' },
                       // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    t3: [
                        { required: true, type: 'string', message: '请选择开始日期', trigger: 'change' }
                    ],
                    t4:[
                        { required: true, message: '请选择管理员', trigger: 'change' }
                    ],
                    t5: [
                        { required: true, message: '请选择审批员', trigger: 'change' }
                    ],
                    t6: [
                        { required: true, message: '请选择仓库类型', trigger: 'change' }
                    ],
                },

            }
        },

        methods: {
            handleSubmit(name) {

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功');

                    } else {
                        this.$Message.error();
                    }
                })


            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>