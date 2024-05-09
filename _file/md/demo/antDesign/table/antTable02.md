## 表格单元格支持输入，下拉选项

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
            style="width: 100%; background:border-box;"
            :customRow="customRow"
            :pagination="false"
            :scroll="{ y: 500 }"
        >
            <template #bodyCell="{ record, text, column, index }">
                <template v-if="column.dataIndex === 'index'">
                    <a-space>
                        {{ Number(index) + 1 }}
                    </a-space>
                </template>

                <template v-else-if="column.dataIndex === 'opts'">
                    <a-space>
                        <a-button size="small" class="mr5">编辑</a-button>
                        <a-button size="small" @click.stop="updateData">保存</a-button>

                        <a-popconfirm title="确定删除?" okText="删除" @confirm="deleteItem(record.id)">
                            <a-button size="small" danger @click.stop>删除</a-button>
                        </a-popconfirm>
                    </a-space>
                </template>

                <template v-else>
                    <div v-if="edit.activeIndex === index">
                        <!-- 设施名称 -->
                        <template v-if="column.dataIndex === 'faciliityName'">
                            <a-select v-model:value="q.selectValue" class="width_220" @change="handleChange">
                                <a-select-option v-for="(item) of options.list" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
                            </a-select>
                        </template>

                        <!-- 定员类型 -->
                        <template v-if="column.dataIndex === 'quotaTypeName'">
                            <div>{{ record.quotaTypeName }}</div>
                        </template>

                        <!-- 近期数量 -->
                        <template v-if="column.dataIndex === 'recentNumber'">
                            <a-input v-model:value="record.recentNumber" :allowClear="true" />
                        </template>

                        <!-- 远期数量 -->
                        <template v-if="column.dataIndex === 'forwardNumber'">
                            <a-input v-model:value="record.forwardNumber" :allowClear="true" />
                        </template>
                    </div>

                    <div v-else>
                        {{ text || '' }}
                    </div>
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


// TODO
const publicInfo = reactive({
    spinning: false,
})


// 获取下拉框选项
function handleOptions() {
    const options = reactive({
        list: [],
    })

    const q = reactive({
        selectValue: '1',
    })

    const getOptions = async () => {
        try {
            // const params = {
            //     projectId: projectObj?.id,
            // }

            options.list = []

            // const resp = await getFaciLtySelectApi(params)
            // options.list = resp.data.map((item) => {
            //     return {
            //         label: item.value,
            //         value: item.code,
            //     }
            // })


            options.list = [
                {
                    label: '选项01',
                    value: '1',
                },

                {
                    label: '选项02',
                    value: '2',
                },
            ]

            options.list.unshift({
                label: '全部',
                value: 0,
            })
        } catch (err) {
            console.log('err ', err)
        }
    }

    const handleChange = (value) => {
        console.log('value', value)
        getTableList(value) // 调用接口
    }

    onMounted(() => {
        getOptions()
    })

    return { options, q, handleChange }
}
const { options, q, handleChange } = handleOptions()


// 表格处理
function handleTable() {
    const edit = reactive({
        activeIndex: undefined,
        currentRow: null,
    })

    const table = reactive({
        loading: false,
        total: 0,
        list: [],
        selectKeys: [],
        columns: [
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '6%' },
            { title: '设施名称', key: 'faciliityName', dataIndex: 'faciliityName', align: 'center', width: '10%' },
            { title: '定员类型', key: 'quotaTypeName', dataIndex: 'quotaTypeName', align: 'center', width: '10%' },
            { title: '近期数量', key: 'recentNumber', dataIndex: 'recentNumber', align: 'center', width: '10%' },
            { title: '远期数量', key: 'forwardNumber', dataIndex: 'forwardNumber', align: 'center', width: '10%' },
            { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '10%' },
        ],
    })

    const customRow = (record, index) => {
        return {
            onClick: (event) => {
                console.log('record', record)

                edit.currentRow = null
                edit.activeIndex = index

                edit.currentRow = record // 这里不赋值貌似会报错

                edit.currentRow.id = record.id
                edit.currentRow.maxOnDuty = record.maxOnDuty
                edit.currentRow.projectId = record.projectId
                edit.currentRow.dataId = record.dataId
                edit.currentRow.faciliityId = record.faciliityId
                edit.currentRow.faciliityName = record.faciliityName
                edit.currentRow.quotaType = record.quotaType
                edit.currentRow.quotaTypeName = record.quotaTypeName
                edit.currentRow.recentNumber = record.recentNumber
                edit.currentRow.forwardNumber = record.forwardNumber

                event.stopPropagation() // 阻止冒泡
            },
        }
    }

    const getTableList = async () => {
        try {
            // const params = {
            //     projId: projectObj?.id,
            //     faciliityId: selectValue,
            // }

            // 初始化
            table.loading = true
            table.list = []

            // const resp = await getScaleCalculationPerQuotaModelAllApi(params)
            // if (!resp.data.length) {
            //     message.error('未获取当相关内容')
            //     table.loading = false
            //     return false
            // }
            // table.list = resp.data.map((item) => item)

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
            console.log('err ', err)
        }
    }

    const updateData = async () => {
        try {
            // const params = {
            //     id: Number(edit.currentRow.id),
            //     maxOnDuty: Number(edit.currentRow.maxOnDuty),
            //     projectId: Number(edit.currentRow.projectId),
            //     dataId: edit.currentRow.dataId + '',
            //     faciliityId: Number(edit.currentRow.faciliityId),
            //     faciliityName: edit.currentRow.faciliityName + '',
            //     quotaType: Number(edit.currentRow.quotaType),
            //     quotaTypeName: 'string',
            //     recentNumber: Number(edit.currentRow.recentNumber),
            //     forwardNumber: Number(edit.currentRow.forwardNumber),
            // }

            // const resp = await updateScaleCalculationPerQuotaApi(params)

            // if (resp.data) {
            //     message.success('保存成功')
            //     edit.activeIndex = undefined
            // } else {
            //     message.error('保存失败')
            // }

            message.success('保存成功')
            edit.activeIndex = undefined
        } catch (err) {
            console.log('err ', err)
        }
    }

    onMounted(() => {
        getTableList()
    })

    return { edit, table, customRow, getTableList, updateData }
}
const { edit, table, customRow, getTableList, updateData } = handleTable()

const deleteItem = (id) => {
    console.log('id', id)
    message.success('删除成功')
}
</script>
```
