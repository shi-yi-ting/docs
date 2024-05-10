```
<template>
    <div>
        <div class="baseInfo">
            <div v-if="showTop" class="top">
                <slot />
            </div>

            <div v-if="isTable" class="table">
                <a-spin :spinning="publicInfo.spinning" tip="Loading...">
                    <a-table
                        :loading="table.loading"
                        :data-source="table.list"
                        :columns="table.columns"
                        :bordered="true"
                        size="small"
                        rowKey="id"
                        style="width: 100%; background: border-box;"
                        :rowSelection="{ onChange: onSelectChange }"
                        :pagination="{
                            current: page.pageIndex,
                            pageSize: page.pageSize,
                            total: table.total,
                        }"
                        @change="pageChange"
                    >
                        <template #bodyCell="{ record, column, index }">
                            <template v-if="column.dataIndex === 'opts'">
                                <a-space>
                                    <a-popconfirm title="确定删除?" okText="删除" @confirm="deleteItem(record.id)">
                                        <a-button size="small" danger @click.stop>删除</a-button>
                                    </a-popconfirm>
                                </a-space>
                            </template>

                            <template v-if="column.dataIndex === 'index'">
                                <a-space>
                                    {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}
                                </a-space>
                            </template>
                        </template>
                    </a-table>
                </a-spin>
            </div>


            <div v-else class="content-wrap">
                <div v-for="(item, index) of content.list" :key="index" class="content" :style="{ width: `calc(100% / ${columnCount})` }">
                    <label for="" class="title">{{ item.title }}</label>
                    <div class="text">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

import { message } from 'ant-design-vue'

// TODO
const props = defineProps({
    showTop: {
        type: Boolean,
        default: false,
    },

    isTable: {
        type: Boolean,
        default: false,
    },

    columnCount: {
        type: Number,
        default: 3,
    },
})

// 变量
const publicInfo = reactive({
    spinning: false,
})

const content = reactive({
    list: [
        {
            title: '主库轴线尺寸',
            text: '468x(33+17.5)',
        },

        {
            title: '-',
            text: '-',
        },

        {
            title: '边跨轴线尺寸',
            text: 'nginx/1.10.2',
        },

        {
            title: '二层轴线尺寸',
            text: '468x9',
        },

        {
            title: '库线规模（线）',
            text: '6',
        },

        {
            title: '列位数',
            text: '1线2列位',
        },

        {
            title: '作业面标高',
            text: '',
        },

        {
            title: '平台标高',
            text: '',
        },

        {
            title: '三成标高',
            text: '',
        },
    ],
})

function handleTable() {
    // 分页
    const page = reactive({
        pageIndex: 1,
        pageSize: 10,
    })

    // 表格
    const table = reactive({
        loading: false,
        total: 0,
        list: [],
        selectKeys: [],
        columns: [
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '6%' },
            { title: '电算代号', key: 'faciliityName', dataIndex: 'faciliityName', align: 'center', width: '10%' },
            { title: '设备名称', key: 'quotaTypeName', dataIndex: 'quotaTypeName', align: 'center', width: '10%' },
            { title: '设备型号', key: 'recentNumber', dataIndex: 'recentNumber', align: 'center', width: '10%' },
            { title: '设备规格', key: 'forwardNumber', dataIndex: 'forwardNumber', align: 'center', width: '10%' },

            { title: '单位', key: 'forwardNumber01', dataIndex: 'forwardNumber01', align: 'center', width: '10%' },
            { title: '单位功率', key: 'forwardNumber02', dataIndex: 'forwardNumber02', align: 'center', width: '10%' },
            { title: '综合取定价（不含税）', key: 'forwardNumber03', dataIndex: 'forwardNumber03', align: 'center', width: '10%' },
            { title: '适用库房', key: 'forwardNumber04', dataIndex: 'forwardNumber04', align: 'center', width: '10%' },
            { title: '设备图片', key: 'forwardNumber05', dataIndex: 'forwardNumber05', align: 'center', width: '10%' },
            // { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '12%' },
        ],
    })


    // 获取表格数据
    const getTableList = () => {
        try {
            // const params = {
            //     PageIndex: page.pageIndex,
            //     PageSize: page.pageSize,
            //     // xxx
            // }

            table.loading = true
            table.total = 0
            table.list = []

            // const resp = await getTableListApi(params)
            // console.log(resp.data)
            // table.total = resp.data?.total
            // table.list = resp.data.map((item) => {
            //     return {
            //         id: item.id,
            //         stationName: item.stationName,
            //     }
            // })

            table.list = [
                {
                    id: '1',
                    maxOnDuty: 'maxOnDuty',
                    projectId: 'projectId',
                    dataId: '123, 345',
                    faciliityId: 'faciliityId',
                    faciliityName: '304135002',
                    quotaType: '固定轨道桥',
                    quotaTypeName: '固定轨道桥',
                    recentNumber: '常规',
                    forwardNumber: '含踏步、护手等',
                    forwardNumber01: '延米',
                    forwardNumber02: '',
                    forwardNumber03: '3395',
                    forwardNumber04: '检查库',
                    forwardNumber05: 'jpg/png',
                },

                {
                    id: '2',
                    maxOnDuty: 'maxOnDuty',
                    projectId: 'projectId',
                    dataId: '123, 345',
                    faciliityId: 'faciliityId',
                    faciliityName: '304135003',
                    quotaType: '单侧双层作业平台',
                    quotaTypeName: '固定轨道桥',
                    recentNumber: '常规',
                    forwardNumber: '含防护网、翻版、控制机构等',
                    forwardNumber01: '延米',
                    forwardNumber02: '',
                    forwardNumber03: '6111',
                    forwardNumber04: '检查库',
                    forwardNumber05: 'jpg/png',
                },
            ]

            table.loading = false
        } catch (err) {
            console.error(err)
        }
    }

    const onSelectChange = (selectKeys) => {
        table.selectKeys = selectKeys
    }

    const pageChange = (data) => {
        page.pageIndex = data.current
        page.pageSize = data.pageSize
        getTableList()
    }

    const deleteItem = (id) => {
        console.log('id ', id)
        message.success('删除成功')

        // try {
        //     const resp = await deleteItemApi(id)
        //     if (resp.success) {
        //         message.success('删除成功')
        //         getTableList() // 重新请求数据 (分页与检索条件不变)
        //     } else {
        //         message.error(resp.msg)
        //     }
        // } catch (err) {
        //     console.log(err)
        // }
    }

    onMounted(() => {
        getTableList()
    })

    return { page, table, onSelectChange, pageChange, deleteItem }
}
const { page, table, onSelectChange, pageChange, deleteItem } = handleTable()

</script>

<style lang="less" scoped>
.baseInfo {
    background-color: #fff;
    border: 1px solid #c1c3c7;

    .top {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background-color: #f0f2f5;
        border-bottom: 1px solid #c1c3c7;
    }

    .table {
        width: 100%;
        padding: 30px;
    }

    .content-wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;

        .content {
            display: flex;
            margin-top: -1px;

            .title {
                flex: 2;
                display: flex;
                align-items: center;
                height: 40px;
                padding-left: 20px;
                margin-left: -1px;

                color: #000;
                background-color: #f0f2f5;
                border: 1px solid #c1c3c7;
            }
            .text {
                flex: 3;
                height: 40px;
                margin-left: -1px;
                padding: 0 20px;
                line-height: 40px;
                color: #000;
                background-color: #fff;
                border: 1px solid #c1c3c7;
            }
        }
    }
}
</style>

```
