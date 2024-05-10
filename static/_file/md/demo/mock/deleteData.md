## 接口请求

### 组件

```
<template>
    <div id="app">
        <ul>
            <li v-for="item in content.list" :key="item.id">
                <span>{{ item.content }}</span>

                 <Popconfirm title="确定删除?" okText="删除" cancelText="取消" @confirm="deleteItem(item)">
                    <span style="color: red; cursor: pointer;">删除</span>
                </Popconfirm>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios' // 直接使用axios请求
import { ref, reactive, watch, onMounted } from 'vue'
import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from 'ant-design-vue'
import type { ColumnType } from 'ant-design-vue/lib/table';

// TODO
const content = reactive({
    list: []
})

const setNews = () => {
    axios.get("/list").then((res) => {
        content.list = res.data.data;
    })
}
onMounted(() => {
    setNews()
})

const deleteItem = (item) => {
    let id = item.id;

    axios.post("/list", {
        params: {
            id //属性简写
        },
    }).then((res) => {
        content.list = res.data.data;
        message.success('删除成功!')
    })
    .catch((error) => {
        console.log(error);
    });
}

</script>

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

### delete.js

```
console.log('模拟删除数据')

// const Mock = require('mockjs') // 导入mockjs
import Mock from 'mockjs';
const Random = Mock.Random // 获取 mock.Random 对象

let arr = []
for (let i = 0; i < 20; i++) {
    let newArticleObject = {
        name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        content: Random.csentence(5, 30), // Random.csentence( min, max )
        id: i,
    }
    arr.push(newArticleObject)
}

function list(options) {
    let rtype = options.type.toLowerCase() // 获取请求类型
    switch (rtype) {
        case 'get':
            break
        case 'post':
            // eslint-disable-next-line no-case-declarations, radix
            let id = parseInt(JSON.parse(options.body).params.id) // 获取删除的id
            arr = arr.filter((val) => {
                return val.id !== id // 把这个id对应的对象从数组里删除
            })
            break
        default:
            break
    }
    return {
        data: arr,
    } // 返回这个数组,也就是返回处理后的假数据
}
Mock.mock('/list', /get|post/i, list) // get用于请求数据，post用于删除数据

```
