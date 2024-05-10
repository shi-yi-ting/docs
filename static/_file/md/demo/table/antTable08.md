```
<template>
    <div>
        <div>
            <Spin :spinning="publicInfo.spinning" tip="Loading...">
                <Table
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
                            <Space>
                                <Popconfirm @confirm="deleteItem(record.id)" title="确定删除?" okText="删除">
                                    <Button size="small" danger @click.stop>删除</Button>
                                </Popconfirm>
                            </Space>
                        </template>

                        <template v-if="column.dataIndex === 'index'">
                            <Space>
                                {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}
                            </Space>
                        </template>
                    </template>
                </Table>
            </Spin>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { Spin, Space, Table, Popconfirm, Button, message } from 'ant-design-vue'
import type { ColumnType } from 'ant-design-vue/lib/table';

// import { getTableListApi, deleteItemApi } from '@/api/request.ts'


// TS
type PageChangeData = {
    current: number;
    pageSize: number;
}

type OptionItem = {
    label: string,
    value: number,
    data?: any,
}

type Table = {
    loading: boolean;
    total: number;
    list: any[]; // 这里可以替换为具体的类型
    selectKeys: any[]; // 这里可以替换为具体的类型
    columns: any;
}

// interface TableColumn {
//     title: string;
//     key: string;
//     dataIndex: string;
//     align: string;
//     width: string;
//     customFilterDropdown?: boolean;
// }

type TableItem = {
    id: number | string | null,
    equipmentName: string | null, // 设备名称
    equipmentModel: string | null, // 设备型号
    equipmentNum: number | null, // 设备数量
    equipmentSpecification: string | null, // 设备规格
    // equipmentUnitPrice: number | null, // 单价
}


// TODO
const publicInfo = reactive({
    spinning: false,
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
        selectKeys: [] as (number | string)[],
        columns: [
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '10%' },
            { title: '设施名称', key: 'equipmentName', dataIndex: 'equipmentName', align: 'center', width: '25%' },
            { title: '设备型号', key: 'equipmentModel', dataIndex: 'equipmentModel', align: 'center', width: '25%' },
            { title: '设备数量', key: 'equipmentNum', dataIndex: 'equipmentNum', align: 'center', width: '25%' },
            { title: '设备规格', key: 'equipmentSpecification', dataIndex: 'equipmentSpecification', align: 'center', width: '25%' },
            { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '12%' },

        ] as ColumnType[],
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
            // table.list = resp.data.map((item: TableItem) => {
            //     return {
            //         id: item.id,
            //         stationName: item.stationName,
            //     }
            // })

            table.list = [
                {
                    id: '1',
                    equipmentName: '设备名称',
                    equipmentModel: '设备型号',
                    equipmentNum: 24,
                    equipmentSpecification: '设备规格',
                } as TableItem,

                {
                    id: '2',
                    equipmentName: '设备名称',
                    equipmentModel: '设备型号',
                    equipmentNum: 24,
                    equipmentSpecification: '设备规格',
                } as TableItem,
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

<style scoped>
/* @import "/src/assets/css/common.css"; */

</style>

```
