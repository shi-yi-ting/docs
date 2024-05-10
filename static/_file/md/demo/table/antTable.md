## 基础使用，带复选框，带分页，带操作列

[antDesign官方文档](https://antdv.com/docs/vue/getting-started-cn)

### HTML

```
<div>
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
```

### JS

```
<script setup>
import { reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'
// import { getTableListApi, deleteItemApi } from '@/api/request.ts'

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
        selectKeys: [],
        columns: [
            // { key: 'index', dataIndex: 'index', title: '序号', align: 'center', width: '5%' , customRender: (column) => {return (column.index + 1);},},
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '6%' },
            { title: '设施名称', key: 'faciliityName', dataIndex: 'faciliityName', align: 'center', width: '25%' },
            { title: '定员类型', key: 'quotaTypeName', dataIndex: 'quotaTypeName', align: 'center', width: '25%' },
            { title: '近期数量', key: 'recentNumber', dataIndex: 'recentNumber', align: 'center', width: '25%' },
            { title: '远期数量', key: 'forwardNumber', dataIndex: 'forwardNumber', align: 'center', width: '25%' },
            { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '12%' },
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
                    faciliityName: 'faciliityName',
                    quotaType: 'quotaType',
                    quotaTypeName: 'quotaTypeName',
                    recentNumber: 'recentNumber',
                    forwardNumber: 'forwardNumber',
                },

                {
                    id: '2',
                    maxOnDuty: 'maxOnDuty02',
                    projectId: 'projectId02',
                    dataId: '123, 345',
                    faciliityId: 'faciliityId',
                    faciliityName: 'faciliityName',
                    quotaType: 'quotaType',
                    quotaTypeName: 'quotaTypeName',
                    recentNumber: 'recentNumber',
                    forwardNumber: 'forwardNumber',
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
```
