<template>
    <div>
        <Row>
            <Col span="24">
                <div >
                <div class="depot">
                    <div class="in">
                        <div class="manage">
                            <span>任务管理</span>
                        </div>
                    </div>
                </div>
                <div style="padding:23px;background: white;"  >
                    <Table :columns="columns" :data="data">
                        <template slot-scope="{ row, index }" slot="name">
                            <Input type="text" v-model="editName" v-if="editIndex === index" placeholder="成员姓名"/>
                            <span v-else>{{ row.name }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="age">
                            <Input type="text" v-model="editAge" v-if="editIndex === index" placeholder="工号"/>
                            <span v-else>{{ row.age }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="address">
                            <Input type="text" v-model="editAddress" v-if="editIndex === index" placeholder="所属部门"/>
                            <span v-else>{{ row.address }}</span>
                        </template>
                        <template slot-scope="{ row, index }" slot="action">
                            <div v-if="editIndex === index">
                                <a href="javascript:;" @click="handleSave(index)">保存</a>
                                <a href="javascript:;" @click="editIndex = -1" style="margin-left:5px">取消</a>
                            </div>
                            <div v-else>
                                <a href="javascript:;" @click="handleEdit(row, index)">编辑</a>

                                <a href="javascript:;"  style="margin-left:5px" @click="ok(index)">删除</a>

                            </div>
                        </template>
                    </Table>
                    <Row>
                    <Col span="24">
                        <div style="margin-top:20px">
                            <Button type="primary" ghost long @click="additem()" >
                                <Icon type="ios-add" size="20" style="margin-top: -3px" />
                                添加
                            </Button>
                        </div>
                    </Col>
                    </Row>
                </div>
                </div>
            </Col>
        </Row>
    </div>
</template>;

<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '成员姓名',
                        slot: 'name'
                    },
                    {
                        title: '工号',
                        slot: 'age'
                    },

                    {
                        title: '所属部门',
                        slot: 'address'
                    },
                    {
                        title: '操作',
                        slot: 'action'
                    },

                ],
                data: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },

                ],
                editIndex: -1,  // 当前聚焦的输入框的行数
                editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
                editAge: '',  // 第二列输入框
                editAddress: '',  // 第三列输入框

            }
        },
        methods: {
            handleEdit (row, index) {
                this.editName = row.name;
                this.editAge = row.age;
                this.editAddress = row.address;
                this.editIndex = index;

            },
            handleSave (index) {
                this.data[index].name = this.editName;
                this.data[index].age = this.editAge;
                this.data[index].address = this.editAddress;
                this.editIndex = -1;

            },
            ok (index) {
                this.data.splice(index,1)
            },



            cancel () {
                this.editIndex = -1
            },

            additem(){
                this.data.push({})

            }
        }
    }
</script>

<style scoped>

</style>