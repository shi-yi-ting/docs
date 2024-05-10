## 使用-路由跳转

```
<template>
    <TitleBar :title="'专题专区'" @onLink="toRouterPage('second')" />
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

import TitleBar from '@/views/enclosure/titleBar/titleBar.vue'

// TODO
const toRouterPage = (item) => {
    console.log('item', item)
}

</script>
```

## 使用-分页

```
<template>
    <TitleBar :type="'page'" :title="'权威评论'" :current="page.current" :pages="page.pages" @goPrev="goPrev" @goNext="goNext" />
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

import TitleBar from '@/views/enclosure/titleBar/titleBar.vue'

// TODO
const page = reactive({
    current: 1,
    pages: 6,
})

const goPrev = () => {
    console.log('上一页')
    if (page.current === 1) {
        return false
    }

    // const resp = await getDataApi({
    //     size: 6,
    //     current: page.current - 1,
    // })

    // // 需要后台返回数据的同时支持返回当前页和页数
    // page.current = resp.data.current
    // page.pages = resp.data.pages
}

const goNext = () => {
    console.log('下一页')
    if (page.current === page.pages) {
        return false
    }

    // const resp = await getDataApi({
    //     size: 6,
    //     current: page.current + 1,
    // })

    // // 需要后台支持返回当前页和页数
    // page.current = resp.data.current
    // page.pages = resp.data.pages
}

const toRouterPage = (item) => {
    console.log('item', item)
}

</script>
```


## titleBar组件封装代码

```
<template>
    <div class="titlebar-wrap">
        <div class="titlebar-name">{{ title }}</div>
        <div v-if="type && type === 'page'" class="titlebar-link">
            <span @click="goPrev">&lt;</span>
            <span class="page">{{ current }}/{{ pages }}</span>
            <span @click="goNext">&gt;</span>
        </div>

        <slot v-else-if="type && type === 'slot'" />

        <div v-else-if="type && type === 'btn'" class="titlebar-link-btn">
            <el-button type="info" size="small" @click="onLink">{{ moreTitle }}</el-button>
        </div>

        <div v-else-if="type && type === 'empty'"></div>

        <div v-else class="titlebar-link" @click="onLink">
            <span>{{ moreTitle }}</span>
            <i class="el-icon-arrow-right" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '标题',
        },

        type: {
            type: String, // page slot btn emty
            default: '',
        },

        current: {
            type: Number,
            default: 0,
        },

        pages: {
            type: Number,
            default: 0,
        },

        moreTitle: {
            type: String,
            default: '了解更多',
        },
    },

    methods: {
        goPrev() {
            this.$emit('goPrev')
        },

        goNext() {
            this.$emit('goNext')
        },

        onLink() {
            this.$emit('onLink')
        },
    },
}
</script>

<style scoped>
.titlebar-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 24px 0;
    height: 24px;
    border-left: 4px solid #01bd9f;
}
.titlebar-name {
    padding-left: 8px;
    font-size: 20px;
    font-weight: 500;
}
.titlebar-link {
    padding-right: 8px;
    font-size: 14px;
    cursor: pointer;
}
.titlebar-link span {
    padding: 10px;
}
.titlebar-link .page {
    padding: 0 6px;
}
/* .titlebar-link-btn .el-button--info {
    color: #333;
    border: 1px solid #333;
    background: #fff;
}
.titlebar-link-btn .el-button--info:hover {
    color: #333;
    border: 1px solid #333;
    background: #fff;
} */
</style>

```
