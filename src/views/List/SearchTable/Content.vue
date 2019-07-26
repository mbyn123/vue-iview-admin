<template>
    <div>
        <div class="cxlist">
            <div class="in">
                <div class="xjbut">
                    <Button type="primary" style="margin-right: 10px" @click="handleRender">
                        <Icon type="md-add" size="20" class="ico"/>
                        <span style="font-size: 14px" >新建</span>
                    </Button>
                    <Button style="margin-right: 10px" v-show="state3">批量操作</Button>
                    <Dropdown>
                        <Button v-show="state3">
                            更多操作
                            <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>删除</DropdownItem>
                            <DropdownItem>批量操作</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div class="statistics">
                    <span><Icon type="ios-information-circle" size="16" class="ico"/>已选择<span
                            class="one"> {{num}} </span>项</span>
                    <span>服务调用次数总计<span class="two"> {{nums}} 万 </span></span><span class="three" @click="handleSelectAll(false)">清空</span>
                </div>

                <div class="cxtables">
                    <Row>
                        <Col span="24">
                            <Table :columns="historyColumns" :data="historyData" @on-select="fun"
                                   @on-select-cancel="fun2" @on-select-all="all" @on-select-all-cancel="can"
                                   ref="selection">
                                <template slot-scope="{ row }" slot="name">
                                    <span>{{row.name}}</span>
                                </template>

                                <template slot-scope="{ row }" slot="describe">
                                    <span>{{row.describe}}</span>
                                </template>

                                <template slot-scope="{ row }" slot="numbers">
                                    <span>{{row.numbers}} 万</span>
                                </template>

                                <template slot-scope="{ row }" slot="state">
                                    <span><Icon type="ios-radio-button-on" :style="{'color':color(row)}"/></span>{{row.state}}</span>
                                </template>
                                <template slot-scope="{ row }" slot="time">
                                    <span>{{row.time}}</span>
                                </template>

                                <template slot-scope="{ row}" slot="operation">
                                    <div class="cz">
                                        <span class="pz">配置</span><span>订阅警报</span>
                                    </div>
                                </template>
                            </Table>

                        </Col>
                        <Col span="24">
                            <div style="text-align: right;padding-top: 20px;">
                                <Page :total="dataCount" :page-size="pageSize" show-elevator show-sizer
                                      @on-change="changepage" @on-page-size-change="pagesize"></Page>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let testData={
        "histories": [
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },{
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },{
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },
            {
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },{
                name: 'TradeCode 0',
                describe: '这是一段描述',
                numbers: 247,
                state: '运行中',
                time: '2017-07-01 08:00:00',
                operation: '',

            },
            {
                name: 'TradeCode 1',
                describe: '这是一段描述',
                numbers: 438,
                state: '异常',
                time: '2017-07-02 01:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 2',
                describe: '这是一段描述',
                numbers: 827,
                state: '已上线',
                time: '2017-07-04 07:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 3',
                describe: '这是一段描述',
                numbers: 322,
                state: '关闭',
                time: '2017-07-14 04:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 4',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 5',
                describe: '这是一段描述',
                numbers: 312,
                state: '关闭',
                time: '2017-07-14 10:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 6',
                describe: '这是一段描述',
                numbers: 542,
                state: '异常',
                time: '2017-07-06 16:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 7',
                describe: '这是一段描述',
                numbers: 372,
                state: '已上线',
                time: '2017-07-12 04:00:00',
                operation: '',
                _disabled: true
            },
            {
                name: 'TradeCode 8',
                describe: '这是一段描述',
                numbers: 542,
                state: '运行中',
                time: '2017-07-06 11:00:00',
                operation: ''
            },
            {
                name: 'TradeCode 9',
                describe: '这是一段描述',
                numbers: 548,
                state: '运行中',
                time: '2017-07-09 11:11:00',
                operation: ''
            },
            {
                name: 'TradeCode 10',
                describe: '这是一段描述',
                numbers: 942,
                state: '异常',
                time: '2017-07-10 14:26:00',
                operation: ''
            },




        ]
    }

    export default {
        data(){
            return{
                value: '',
                state3: false,
                num: 0,
                nums: 0,
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
                page:1,
                historyColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '规则名称',
                        slot: 'name',
                    },
                    {
                        title: '描述',
                        slot: 'describe',
                        width: 230,
                    },
                    {
                        title: '服务调用次数',
                        slot: 'numbers',
                        key: 'numbers',
                        sortable: true,
                        align: 'right'
                    },
                    {
                        title: '状态',
                        slot: 'state',
                        filters: [
                            {
                                label: '关闭',
                                value: 1,
                            },
                            {
                                label: '运行中',
                                value: 2
                            },
                            {
                                label: '已上线',
                                value: 3
                            },
                            {
                                label: '异常',
                                value: 4
                            }
                        ],
                        filterMultiple: true,
                        filterMethod(value, row) {
                            if (value === 1) {
                                return row.state === "关闭";
                            } else if (value === 2) {
                                return row.state === "运行中";
                            } else if (value === 3) {
                                return row.state === "已上线";
                            } else if (value === 4) {
                                return row.state === "异常";
                            }
                        }

                    },
                    {
                        title: '上次调度时间',
                        slot: 'time',
                        key: 'time',
                        sortable: true
                    },
                    {
                        title: '操作',
                        slot: 'operation'
                    },
                ],
                historyData:[]
            }
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: '请输入',
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })

                    }
                })
            },

            color(col){
                if(col.state==="运行中"){
                    return "#2db7f5"
                }else if(col.state==="异常"){
                    return "red"
                }else if(col.state==="已上线"){
                    return "#19be6b"
                }else if(col.state==="关闭"){
                    return "#c5c8ce"
                }
            },
            fun(selection, row) {
                this.state3 = true
                this.num = selection.length
                this.nums += row.numbers
                if (this.num !== 0) {
                    this.state3 = true
                } else {
                    this.state3 = false
                }

            },
            fun2(selection, row) {
                this.num = selection.length
                this.nums -= row.numbers
                if (this.num !== 0) {
                    this.state3 = true
                } else {
                    this.state3 = false
                }
            },
            all(selection) {
                this.num = selection.length
                if (this.num !== 0) {
                    this.state3 = true
                } else {
                    this.state3 = false
                }
                for (var i in selection) {
                    this.nums += selection[i].numbers
                }

            },
            can(selection) {
                this.num = selection.length
                this.nums = 0
                if (this.num !== 0) {
                    this.state3 = true
                } else {
                    this.state3 = false
                }
            },
            handleSelectAll(status) {
                this.$refs.selection.selectAll(status);
                this.num = 0
            },


            handleListApproveHistory(){
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
            },
            changepage(index){
                this.page = index;
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            },
            pagesize(index){
                let _start = ( this.page - 1 ) * index;
                let _end = this.page * index;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
                this.pageSize = index;
            },

        },
        created(){
            this.handleListApproveHistory();
        }

    }
</script>

<style scoped>
    .cxlist {
        padding: 0 5px;
    }

    .cxlist .in {
        background: #fff;
        padding: 0 25px;
    }

    .cxlist .in .xjbut .ico {
        display: inline-block;
        vertical-align: top;
        margin-right: 5px;
        size: 16px
    }

    .cxlist .in .statistics {
        background-color: #e6f7ff;
        border: 1px solid #91d5ff;
        padding: 10px;
        margin: 20px 0;
        border-radius: 5px;
        font-size: 14px;
    }

    .cxlist .in .statistics .one {
        color: #2d8cf0
    }

    .cxlist .in .statistics .two {
        color: rgba(0, 0, 0, .85)
    }

    .cxlist .in .statistics .three {
        color: #2d8cf0;
        margin-left: 20px;
        cursor: pointer;
    }

    .cxlist .in .statistics .ico {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        color: #2b85e4
    }


    .cxlist .cxtables{
        padding-bottom:20px;
    }

    .cxlist .cxtables .cz {
        color: #2d8cf0;
        cursor: pointer;
        display: inline-block;
    }

    .cxlist .cxtables .cz .pz {
        border-right: 1px solid #ccc;
        margin-right: 10px;
        padding-right: 10px;
    }

    .cxlist .cxtables .ico {
        display: inline-block;
        vertical-align: text-top;
        margin-right: 5px;
    }
</style>