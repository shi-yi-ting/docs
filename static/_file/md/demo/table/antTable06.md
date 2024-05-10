```
<template>
    <div>
        <Table
            :loading="table.loading"
            :data-source="table.list"
            :columns="table.columns"
            :bordered="true"
            size="small"
            rowKey="id"
            style="width: 100%; background: border-box;"
            :pagination="false"
            :scroll="{ y: 500 }"
            @change="pageChange"
        >
            <template #bodyCell="{ record, text, column, index }">
                <template v-if="column.dataIndex === 'index'">
                    <Space>
                        {{ Number(index) + 1 }}
                    </Space>
                </template>

                <template v-if="column.dataIndex === 'faciliityName'">
                    <span v-if="record.rowspan !== undefined" :rowspan="record.rowspan">{{ text }}</span>
                    <span v-else>{{ text }}</span>
                </template>
                <template v-else>
                    {{ text }}
                </template>
            </template>
        </Table>
    </div>
</template>


<script lang="ts" setup>
import {
    Layout,
    LayoutSider,
    LayoutHeader,
    LayoutContent,
    Modal,
    Button,
    Spin,
    Space,
    Popconfirm,
    Table,
    Input,
    message,
    Select,
    SelectOption
} from 'ant-design-vue'
import { ref, reactive, onMounted } from 'vue'
import type { ColumnType } from 'ant-design-vue/lib/table';


// TS
interface PageChangeData {
    current: number;
    pageSize: number;
}

type TableItem = {
    "id": string | null,
    "faciliityName": string | null, // 图纸类型
    "quotaTypeName": string | null, // 会签内容
    "recentNumber": string | null, // 默认值
    "forwardNumber": string | null, // 会签意见
    "forwardNumber02": string | null, // 是否通过
}


// TODO
// 表格
function handleTable() {
    // 分页
    const page = reactive({
        pageIndex: 1,
        pageSize: 10,
    })

    // 合并逻辑
    const mergeCell = (record, rowIndex, column) => {
        if (record) {
            let firstindex = table.list.findIndex((nd) => {
                return nd[column.key] === record[column.key]
            })
            if (rowIndex === firstindex) {
                let rowspanLength = table.list.filter((nd) => {
                    return nd[column.key] === record[column.key]
                }).length
                return { rowSpan: rowspanLength };
            } else {
                    return { colSpan: 0 };
            }
        }
    }

    // 表格
    const table = reactive({
        loading: false,
        total: 0,
        list: [] as TableItem[],
        selectKeys: [] as (number | string)[],
        columns: [
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '6%' },
            { title: '图纸类型', key: 'faciliityName', dataIndex: 'faciliityName', align: 'center', width: '10%', customCell: mergeCell },
            { title: '会签内容', key: 'quotaTypeName', dataIndex: 'quotaTypeName', align: 'center', width: '15%' },
            { title: '默认值', key: 'recentNumber', dataIndex: 'recentNumber', align: 'center', width: '10%' },
            { title: '会签意见', key: 'forwardNumber', dataIndex: 'forwardNumber', align: 'center', width: '15%' },
            { title: '是否通过', key: 'forwardNumber02', dataIndex: 'forwardNumber02', align: 'center', width: '15%' },
        ] as ColumnType[],
    })

    // 获取表格数据
    const getTableList = async () => {
        try {
            // const params = {
            //     simpleId: props.simpleId
            // }

            table.loading = true
            table.total = 0
            let list = [
                {
                    id: '1',
                    faciliityName: '站台层平面图',
                    quotaTypeName: '站台边缘至轨道中心线距离',
                    recentNumber: '1600',
                    forwardNumber: '',
                    forwardNumber02: '是',
                },

                {
                    id: '3',
                    faciliityName: '站台层平面图',
                    quotaTypeName: '有效站台外站台边缘距线路中心线距离',
                    recentNumber: '1750',
                    forwardNumber: '',
                    forwardNumber02: '',
                },

                {
                    id: '3',
                    faciliityName: '站台层平面图',
                    quotaTypeName: '有效站台外站台边缘距线路中心线距离',
                    recentNumber: '1750',
                    forwardNumber: '',
                    forwardNumber02: '',
                },

                {
                    id: '2',
                    faciliityName: '站台层平面图111',
                    quotaTypeName: '站台对侧构筑物至轨道中心线距离',
                    recentNumber: '2250',
                    forwardNumber: '',
                    forwardNumber02: '',
                },

                {
                    id: '4',
                    faciliityName: '站台层平面图222',
                    quotaTypeName: '有效站台外站台边缘距线路中心线距离',
                    recentNumber: '1750',
                    forwardNumber: '',
                    forwardNumber02: '',
                },

                 {
                    id: '1',
                    faciliityName: '站台层平面图222',
                    quotaTypeName: '站台边缘至轨道中心线距离',
                    recentNumber: '1600',
                    forwardNumber: '',
                    forwardNumber02: '是',
                },
            ]

            table.list = list.sort((a: any, b: any) => {
                if (a.faciliityName !== b.faciliityName) {
                    // return a.faciliityName - b.faciliityName
                    return a.faciliityName.localeCompare(b.faciliityName);
                }
            })

            // const resp = await getGenerlddeawSimpleProgrammeDeviceApi(params)

            // table.total = resp.data?.total
            // table.list = resp.data.map((item: TableItem) => item)
            table.loading = false
        } catch (err) {
            console.error(err)
        }
    }

    const pageChange = (data: PageChangeData) => {
        page.pageIndex = data.current
        page.pageSize = data.pageSize
        getTableList()
    }

    onMounted(() => {
        getTableList()
    })

    return { table, pageChange, getTableList }
}
const { table, pageChange, getTableList } = handleTable()
</script>

<style lang="scss" scoped>

</style>

```
