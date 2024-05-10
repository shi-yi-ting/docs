## 接口请求

### 组件

```
<template>
    <div>
        <Button type="primary" style="margin-right: 15px; margin-top: 15px;" @click="getTableList">获取数据</Button>
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
import { ref, reactive, watch, onMounted } from 'vue'
import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from 'ant-design-vue'
import type { ColumnType } from 'ant-design-vue/lib/table';

import { getNewsApi } from '@/api/mockRequest.js'

// TS
type PageChangeData = {
    current: number;
    pageSize: number;
}

type Table = {
    loading: boolean;
    total: number;
    list: any[]; // 这里可以替换为具体的类型
    selectKeys: any[]; // 这里可以替换为具体的类型
    columns: any;
}

type TableItem = {
    title: number | string | null,
    createdTime: string | null,
    content: string | null,
}


// TODO
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
            { title: '标题', key: 'title', dataIndex: 'title', align: 'center', width: '25%' },
            { title: '创建时间', key: 'createdTime', dataIndex: 'createdTime', align: 'center', width: '25%' },
            { title: '内容', key: 'content', dataIndex: 'content', align: 'center', width: '25%' },
            { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '12%' },

        ] as ColumnType[],
    })


    // 获取表格数据
    const getTableList = async () => {
        try {
            table.loading = true
            table.total = 0
            table.list = []

            const resp = await getNewsApi()
            console.log('getProjectsApi', resp)

            if (resp.status === 200 && resp.data && resp.data.length) {
                table.list = resp.data.map((item: TableItem) => item)
                table.total = resp.data?.length
            }

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
        message.success('调用删除接口')
    }

    onMounted(() => {
        // getTableList()
    })

    return { page, table, onSelectChange, pageChange, deleteItem, getTableList }
}
const { page, table, onSelectChange, pageChange, deleteItem, getTableList } = handleTable()

</script>

<style scoped>
</style>


```


### mockRequest.js

```
import http from '@/api/mockAxios.js'
export const getNewsApi = () => http.get('/mock/news')

```

### mockAxios.js

```
import axios from 'axios'

const instance = axios.create({
    // baseURL: "https://api.example.com", // 根据你的需求设置基础URL
    baseURL: '', // mock的时候这里只能是空，不然会有问题
    timeout: 5000, // 请求超时时间，根据需要设置
})

// 在请求发送之前，可以添加一些全局的请求拦截器
instance.interceptors.request.use(
    (config) => {
    // 在请求发送之前可以做一些处理，如添加请求头等
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

// 在响应收到之后，可以添加一些全局的响应拦截器
instance.interceptors.response.use(
    (response) => {
    // 在响应收到之后可以做一些处理，如解析数据等
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default instance

```


## mock拦截处理

### mock.js

```
// 拦截该url，获取（查询），新增，删除数据
// const Mock = require('mockjs') // 导入mockjs
import Mock from 'mockjs';

// 获取数据
import { get } from './get.js'
Mock.mock('/mock/news', get.newList)

```

### get.js

```
console.log('模拟获取数据')
// const Mock = require('mockjs')
import Mock from 'mockjs';


// 获取 mock.Random 对象
const Random = Mock.Random

// mock获取数据
export const get = {
    newList: () => {
        // mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
        let newsList = []
        for (let i = 0; i < 12; i++) {
            let newNewsObject = {
                //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间
                title: Random.ctitle(),

                // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
                content: Random.cparagraph(1, 2),

                // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
                createdTime: Random.date(),
            }
            newsList.push(newNewsObject)
        }
        return newsList
    },

    projectList: () => {
        let projectList = []
    }
}

```
