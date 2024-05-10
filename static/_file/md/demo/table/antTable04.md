## 表格展示树结构数据

[antDesign官方文档](https://antdv.com/docs/vue/getting-started-cn)

### HTML

注意：`:rowKey="record => record.id"`，不然可能会出现想展开一个节点，但是所有节点都展开的现象
合计行这里借用的是第二个表格的表格头，记得设置`:scroll="{ y: 0 }"`

```
<div>
    <a-spin :spinning="publicInfo.spinning" tip="Loading...">
        <a-table
            :loading="table.loading"
            :data-source="table.list"
            :columns="table.columns"
            :bordered="true"
            size="small"
           :rowKey="record => record.id"
            style="width: 100%; background: border-box;"
            :scroll="{ y: 500 }"
            :pagination="false"
        >
            <template #bodyCell="{ record, column, index }">
                <template v-if="column.dataIndex === 'index' && record.direction === null">
                    <a-space>
                        {{ record.rowindex }}
                    </a-space>
                </template>

                <template v-if="column.dataIndex === 'startingPoint' && record.direction !== null">
                    <span></span>
                </template>
            </template>
        </a-table>

        <!-- 合计行 -->
        <a-table
            :columns="table.columnsTwo"
            :bordered="true"
            size="small"
            rowKey="id"
            style="width: 100%;background:border-box;"
            :scroll="{ y: 0 }"
            :pagination="false"
        >
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
    // 合计
    const tablefoot = reactive({
        totalTitle: undefined,
        startingPoint: undefined,
        direction: undefined,
        originationRecent: undefined,
        originationForward: undefined,
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
            { title: '站别', key: 'startingPoint', dataIndex: 'startingPoint', align: 'center', width: '25%' },
            { title: '方向', key: 'direction', dataIndex: 'direction', align: 'center', width: '25%' },
            { title: '始发对数近期', key: 'originationRecent', dataIndex: 'originationRecent', align: 'center', width: '25%' },
            { title: '始发对数远期', key: 'originationForward', dataIndex: 'originationForward', align: 'center', width: '25%' },
            // { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '12%' },
        ],

        columnsTwo: [
            { title: () => tablefoot.totalTitle, key: 'index', dataIndex: 'index', align: 'center', width: '6%' },
            { title: () => tablefoot.startingPoint, key: 'startingPoint', dataIndex: 'startingPoint', align: 'center', width: '25%' },
            { title: () => tablefoot.direction, key: 'direction', dataIndex: 'direction', align: 'center', width: '25%' },
            { title: () => tablefoot.originationRecent, key: 'originationRecent', dataIndex: 'originationRecent', align: 'center', width: '25%' },
            { title: () => tablefoot.originationForward, key: 'originationForward', dataIndex: 'originationForward', align: 'center', width: '25%' },
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

            const testData = {
                data: [
                    {
                        id: 480731308601428,
                        rowindex: 1,
                        startingPoint: '南昌西',
                        end: null,
                        path: null,
                        jdId: null,
                        originationRecent: 113,
                        originationForward: 122,
                        takeonRecent: 0,
                        takeonForward: 0,
                        numerallocatedvehiclesRecent: 0,
                        numerallocatedvehiclesForward: 0,
                        checkThelibrarylineRecent: null,
                        checkThelibrarylineForward: null,
                        storagetrackRecent: null,
                        storagetrackForward: null,
                        projectId: null,
                        bxorSn: null,
                        initialLogarithm: 0,
                        direction: null,
                        affiliatedHub: '南昌枢纽',
                        children: [
                            {
                                startingPoint: '南昌西',
                                end: null,
                                path: null,
                                jdId: null,
                                originationRecent: 10,
                                originationForward: 13,
                                takeonRecent: 0,
                                takeonForward: 0,
                                numerallocatedvehiclesRecent: 0,
                                numerallocatedvehiclesForward: 0,
                                checkThelibrarylineRecent: 0,
                                checkThelibrarylineForward: 0,
                                storagetrackRecent: 0,
                                storagetrackForward: 0,
                                projectId: 1,
                                bxorSn: '2',
                                initialLogarithm: null,
                                direction: '发抚州方向',
                                affiliatedHub: '南昌枢纽',
                                createDate: '2023-11-09T11:09:43',
                                modifyDate: '2023-11-09T11:09:43',
                                isDelete: false,
                                rowVersion: null,
                                id: 480600806047825,
                            },
                            {
                                startingPoint: '南昌西',
                                end: null,
                                path: null,
                                jdId: null,
                                originationRecent: 7,
                                originationForward: 7,
                                takeonRecent: 0,
                                takeonForward: 0,
                                numerallocatedvehiclesRecent: 0,
                                numerallocatedvehiclesForward: 0,
                                checkThelibrarylineRecent: 0,
                                checkThelibrarylineForward: 0,
                                storagetrackRecent: 0,
                                storagetrackForward: 0,
                                projectId: 1,
                                bxorSn: '2',
                                initialLogarithm: null,
                                direction: '发景德镇方向',
                                affiliatedHub: '南昌枢纽',
                                createDate: '2023-11-09T11:09:43',
                                modifyDate: '2023-11-09T11:09:43',
                                isDelete: false,
                                rowVersion: null,
                                id: 480600806047826,
                            },
                        ],
                    },

                    {
                        id: 480731308601429,
                        rowindex: 2,
                        startingPoint: '南昌东',
                        end: null,
                        path: null,
                        jdId: null,
                        originationRecent: 102,
                        originationForward: 136,
                        takeonRecent: 0,
                        takeonForward: 0,
                        numerallocatedvehiclesRecent: 0,
                        numerallocatedvehiclesForward: 0,
                        checkThelibrarylineRecent: null,
                        checkThelibrarylineForward: null,
                        storagetrackRecent: null,
                        storagetrackForward: null,
                        projectId: null,
                        bxorSn: null,
                        initialLogarithm: 0,
                        direction: null,
                        affiliatedHub: '南昌枢纽',
                        children: [
                            {
                                startingPoint: '南昌东',
                                end: null,
                                path: null,
                                jdId: null,
                                originationRecent: 3,
                                originationForward: 5,
                                takeonRecent: 0,
                                takeonForward: 0,
                                numerallocatedvehiclesRecent: 0,
                                numerallocatedvehiclesForward: 0,
                                checkThelibrarylineRecent: 0,
                                checkThelibrarylineForward: 0,
                                storagetrackRecent: 0,
                                storagetrackForward: 0,
                                projectId: 1,
                                bxorSn: '2',
                                initialLogarithm: null,
                                direction: '发长沙方向',
                                affiliatedHub: '南昌枢纽',
                                createDate: '2023-11-09T11:09:43',
                                modifyDate: '2023-11-09T11:09:43',
                                isDelete: false,
                                rowVersion: null,
                                id: 480600806047815,
                            },
                            {
                                startingPoint: '南昌东',
                                end: null,
                                path: null,
                                jdId: null,
                                originationRecent: 5,
                                originationForward: 8,
                                takeonRecent: 0,
                                takeonForward: 0,
                                numerallocatedvehiclesRecent: 0,
                                numerallocatedvehiclesForward: 0,
                                checkThelibrarylineRecent: 0,
                                checkThelibrarylineForward: 0,
                                storagetrackRecent: 0,
                                storagetrackForward: 0,
                                projectId: 1,
                                bxorSn: '2',
                                initialLogarithm: null,
                                direction: '发鹰潭方向',
                                affiliatedHub: '南昌枢纽',
                                createDate: '2023-11-09T11:09:43',
                                modifyDate: '2023-11-09T11:09:43',
                                isDelete: false,
                                rowVersion: null,
                                id: 480600806047814,
                            },
                        ],
                    },
                ],

                totalObject: {
                    totalTitle: '合计',
                    startingPoint: '',
                    direction: '',
                    originationRecent: '2324',
                    originationForward: '3434',
                },
            }

            table.list = testData.data

            // 合计
            tablefoot.totalTitle = testData.totalObject.totalTitle
            tablefoot.startingPoint = testData.totalObject.startingPoint
            tablefoot.direction = testData.totalObject.direction
            tablefoot.originationRecent = testData.totalObject.originationRecent
            tablefoot.originationForward = testData.totalObject.originationForward

            table.loading = false
        } catch (err) {
            console.error(err)
        }
    }


    onMounted(() => {
        getTableList()
    })

    return { table }
}
const { table } = handleTable()

</script>
```
