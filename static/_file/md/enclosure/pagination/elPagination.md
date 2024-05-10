## 使用

```
<template>
    <div>
        <Pagination :total="content.total" :page="page.current" :limit="page.size" @pagination="pagination" />
    </div>
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import Pagination from '@/views/enclosure/pagination/pagination.vue'

// TODO
const content = reactive({
    total: 24,
    list: [],
})

const page = reactive({
    current: 1,
    size: 10,
})

const pagination = (params) => {
    console.log('params', params)
    // page.current = params.page
    // page.size = params.limit
    // getListData() // 调用接口
}

</script>
```

## Pagination组件封装代码

```
<template>
    <div class="pagination">
        <div class="pagination-container" :class="{ 'hidden': hidden }">
            <el-pagination :background="background" :currentPage.sync="currentPage" :pageSize.sync="pageSize" :layout="layout" :pageSizes="pageSizes" :total="total" v-bind="$attrs" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
    </div>
</template>

<script>
import { ElPagination } from 'element-plus'
// import { scrollTo } from '@/utils/scrollTo.js'

export default {
    components: {
        ElPagination
    },
    props: {
        pageCounter: {
            type: Number,
        },

        total: {
            require: true,
            type: Number,
        },

        page: {
            type: Number,
            default: 1,
        },

        limit: {
            type: Number,
            default: 20,
        },

        pageSizes: {
            type: Array,
            default: () => {
                return [10, 20, 30, 50]
            },
        },

        layout: {
            type: String,
            default: 'prev, pager, next, sizes, jumper',
        },

        background: {
            type: Boolean,
            default: true,
        },

        autoScroll: {
            type: Boolean,
            default: true,
        },

        hidden: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        currentPage: {
            get() {
                return this.page
            },

            set(val) {
                this.page = val
                this.$emit('update:page', val)
            },
        },

        pageSize: {
            get() {
                return this.limit
            },

            set(val) {
                this.limit = val
                this.$emit('update:limit', val)
            },
        },
    },

    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.$emit('pagination', { page: this.currentPage, limit: val })

            // if (this.autoScroll) {
            //     scrollTo(0, 800)
            // }
        },

        handleCurrentChange(val) {
            this.currentPage = val
            this.$emit('pagination', { page: val, limit: this.pageSize })

            // if (this.autoScroll) {
            //     scrollTo(0, 800)
            // }
        },
    },
}
</script>

<style scoped>
.pagination-container {
    margin: 0;
    text-align: right;
}
.pagination-container .hidden {
    display: none;
}
</style>

```
