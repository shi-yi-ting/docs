```
<template>
    <div class="mt15">
        <div class="select-wrap">
            <div class="mr15">
                <span class="mr15">设施名称:</span>
                <Input v-model:value="inputData.maintenanceFacilityName" :allowClear="true" class="width_160" />
            </div>

            <div class="mr15">
                <span class="mr15">所属地区:</span>
                <Input v-model:value="inputData.area" :allowClear="true" class="width_160" />
            </div>

            <Button type="primary" style="width: 90px" @click="search">搜索</Button>
        </div>

        <Spin :spinning="publicInfo.spinning" tip="Loading...">
            <Table :loading="table.loading" :data-source="table.list" :columns="table.columns" :bordered="true" size="small" rowKey="id" style="width: 100%; background: border-box;" :rowSelection="{ onChange: onSelectChange }" :pagination="{
                    current: page.pageIndex,
                    pageSize: page.pageSize,
                    total: table.total,
                }" @change="pageChange">
                <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
                    <div style="padding: 8px">
                        <Input ref="searchInput" :placeholder="`搜索 ${column.title}`" :value="selectedKeys[0]" style="width: 188px; margin-bottom: 8px; display: block" @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])" @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
                        <Button type="primary" size="small" style="width: 90px; margin-right: 8px" @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
                            <template #icon>
                                <SearchOutlined />
                            </template>搜索
                        </Button>
                        <Button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                            重置
                        </Button>
                    </div>
                </template>

                <template #customFilterIcon="{ filtered }">
                    <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
                </template>


                <template #bodyCell="{ record, text, column, index }">
                    <template v-if="column.dataIndex === 'opts'">
                        <Space>
                            <Popconfirm title="确定删除?" okText="删除" @confirm="deleteItem(record.id)">
                                <Button size="small" danger @click.stop>删除</Button>
                            </Popconfirm>
                        </Space>
                    </template>

                    <template v-if="column.dataIndex === 'index'">
                        <Space>
                            {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}
                        </Space>
                    </template>

                    <template v-else-if="column.key === 'updatedAt'">
                        {{ dayjs(text).format("YY/MM/DD HH:mm:ss") }}
                    </template>
                </template>
            </Table>
        </Spin>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, message } from 'ant-design-vue'
import { SearchOutlined } from '@ant-design/icons-vue';
import dayjs, { Dayjs } from 'dayjs'

// import { getTableListApi, deleteItemApi } from '@/api/request.ts'
import { maintenanceFacilitiesDataList } from './_js/data.js'


// TODO
const publicInfo = reactive({
    spinning: false,
})

// 输入框
const inputData = reactive({
    maintenanceFacilityName: '',
    area: '',
})


// 表格
const totalList = ref([])
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
            {
                title: '设施名称',
                key: 'maintenanceFacilityName',
                dataIndex: 'maintenanceFacilityName',
                width: 120,
                customFilterDropdown: true,
                onFilter: (value, record) => record.maintenanceFacilityName.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownOpenChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },

            {
                title: '所属路局',
                key: 'roadBureau',
                dataIndex: 'roadBureau',
                width: 120,
                filterSearch: true,
                filters: [],
                sorter: { compare: (a, b) => a.roadBureau?.localeCompare(b.roadBureau), multiple: 1 },
                onFilter: (v, record) => record.roadBureau === v,
            },

            {
                title: '所属地区',
                key: 'area',
                dataIndex: 'area',
                width: 120,
                filterSearch: true,
                filters: [],
                sorter: { compare: (a, b) => a.area.localeCompare(b.area), multiple: 2 },
                onFilter: (v, record) => record.area === v,
            },

            {
                title: '检修设施类型',
                key: 'maintenanceFacilityType',
                dataIndex: 'maintenanceFacilityType',
                width: 140,
                filterSearch: true,
                filters: [],
                onFilter: (v, record) => record.maintenanceFacilityType === v
            },

            { title: '上次更新时间', key: 'updatedAt', dataIndex: 'updatedAt', width: 140, },
            { title: '操作', key: 'opts', dataIndex: 'opts', width: 60, },
        ],
    })


    // 获取表格数据
    const getTableList = () => {
        const needFilterFields = [
            'roadBureau',
            'area',
            'maintenanceFacilityName',
            'maintenanceFacilityType',
            'junctionStation',
            'status',
            'property',
        ]


        try {
            // const params = {
            //     searchName: '',
            // }

            table.loading = true
            table.total = 0
            table.list = []

            //  const resp = await maintenanceFacilitiesApi(params)
            //  if (resp.success) {
            //     table.list = resp.data.map(item => item)

            //     resp.data?.forEach(item => {
            //         needFilterFields.forEach(key => {
            //             const k = item
            //             const v = item[k]?.toString()
            //             table.columns.filter(c => c.key === k).forEach(c => {
            //                 if(c.filters?.every(kv => kv.text !== v)) {
            //                     c.filters.push({ text: v, value: v })
            //                 }
            //             })
            //         })
            //     })
            // }

            totalList.value = maintenanceFacilitiesDataList

            table.list = totalList.value

            // ts
            maintenanceFacilitiesDataList?.forEach((item) => {
                needFilterFields.forEach((key) => {
                    const k = key as keyof typeof item
                    const v = item[k]?.toString()
                    table.columns.filter((c) => c.key === k).forEach((c) => {
                        if (c.filters?.every((kv) => kv.text !== v)) {
                            c.filters.push({ text: v!, value: v! })
                        }
                    })
                })
            })


            // js
            // maintenanceFacilitiesDataList?.forEach((item) => {
            //     needFilterFields.forEach((key) => {
            //         const k = key
            //         const v = item[k]?.toString()
            //         table.columns.filter((c) => c.key === k).forEach((c) => {
            //             if (c.filters?.every((kv) => kv.text !== v)) {
            //                 c.filters.push({ text: v, value: v })
            //             }
            //         })
            //     })
            // })

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


// 与模糊搜索
const search = () => {
    type ItemData = {
        maintenanceFacilityName: string | null, // 设施名称
        roadBureau: string | null, // 所属路局
        area: string | null, // 所属地区
        maintenanceFacilityType: string | null, // 检修设施类型
        updatedAt: number | string | null, // 上次更新时间
    }

    // 检查三个关键字是否有值
    const hasMaintenanceFacilityName = inputData.maintenanceFacilityName
    const hasArea = inputData.area

    // 如果三个关键字都没有值，则直接返回所有数据
    if (!hasMaintenanceFacilityName && !hasArea) {
        table.list = totalList.value;
        return
    }

    // 如果三个关键字中有一个有值，则根据有值的项进行过滤
    const filteredData = totalList.value.filter((item: ItemData) => {
        console.log('item', item)
        if (hasMaintenanceFacilityName) {
            if (!item.maintenanceFacilityName) { return false }
            const keywordRegex = new RegExp(inputData.maintenanceFacilityName.replace(/\s+/g, '\\s*'), 'i')
            if (!keywordRegex.test(item.maintenanceFacilityName)) { return false }
        }

        if (hasArea) {
            if (!item.area) {return false;}
            // 使用正则表达式进行灵活匹配，忽略关键字顺序
            const keywordRegex = new RegExp(inputData.area.replace(/\s+/g, '\\s*'), 'i')
            if (!keywordRegex.test(item.area)) { return false }
        }

        return true
    })

    table.list = filteredData
}


// 表格过滤筛选
const state = reactive({
    searchText: '',
    searchedColumn: '',
});

const searchInput = ref();

const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    state.searchText = selectedKeys[0];
    state.searchedColumn = dataIndex;
};

const handleReset = clearFilters => {
    clearFilters({ confirm: true });
    state.searchText = '';
};
</script>

<style scoped>
.select-wrap {
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
}

.width_160 {
    width: 100px;
}
.mr15 {
    margin-right: 15px;
}
</style>

```
