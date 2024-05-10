## 接口请求

### 组件

```
<template>
    <div>
         <span style="margin-right: 15px">
            <span>
                <label for="" style="margin-right: 5px;">标题: </label>
                <Input v-model:value="title" type="text" style="margin-top: 15px; width: 100px;" />
            </span>

            <span style="margin-left: 15px;">
                <label for="" style="margin-right: 5px;">内容: </label>
                <Input v-model:value="content" type="text" style="margin-top: 15px; width: 160px;" />
            </span>
        </span>

        <Button type="primary" style="margin-right: 15px;" @click="submit">提交</Button>
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

import { addProjectApi, getProjectsApi } from '@/api/mockRequest.js'

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

            const resp = await getProjectsApi()
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


const title = ref<string>('')
const content = ref<string>('')

const submit = async () => {
    let params = {
        title: title.value,
        content: content.value
    }
    const resp = await addProjectApi(params) // 添加数据的接口,数据为一个对象，有个title属性
    console.log('addProjectApi', resp)

    getTableList()
}

</script>

<style scoped>
</style>

```


### mockRequest.js

```
import http from '@/api/mockAxios.js'
import qs from 'qs'

export const addProjectApi = (params) => http.post('/mock/addProject', params)
// export const addProjectApi = (params) => http.post('/mock/addProject', qs.stringify(params))

export const getProjectsApi = () => http.get('/mock/projects')

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

// 新增数据
import './add.js'

// 删除数据
import './delete.js'

```

### add.js

```
console.log('模拟新增数据')
// const Mock = require('mockjs') // 导入mockjs
import Mock from 'mockjs';
import { get } from './get.js'
const Random = Mock.Random // 获取 mock.Random 对象

function formateTime() {
    const date = new Date()

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
}

let projectList = []

Mock.mock('/mock/addProject', (ops) => { // 拦截ajax请求，调用函数
    console.log('ops', ops)

    // // 方式一（如果请求使用了qs.stringify(params)则需要使用URLSearchParams进行解析）
    // // export const addProjectApi = (params) => http.post('/mock/addProject', qs.stringify(params))

    // // 解析请求体，获取参数 使用 URLSearchParams 解析表单编码的数据
    // const formData = new URLSearchParams(ops.body)

    // // 获取参数
    // const title = formData.get('title')
    // const content = formData.get('content')


    // 方式二
    // export const addProjectApi = (params) => http.post('/mock/addProject', params)
    const params = JSON.parse(ops.body)

    let obj = {
        title: params.title,
        content: params.content,
        createdTime: formateTime(),
    }

    console.log('addobj', obj);

    projectList.push(obj)
    // return projectList
})
Mock.mock('/mock/projects', projectList)

```
