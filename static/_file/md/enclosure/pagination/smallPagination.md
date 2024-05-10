## 使用

```
<template>
    <div>
        <SmallPagination :total="content.total" />
    </div>
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import SmallPagination from '@/views/enclosure/pagination/smallPagination.vue'

// TODO
const content = reactive({
    total: 24,
})
</script>
```

## SmallPagination组件封装代码

```
<template>
    <span>
        <!-- <span v-show="total" class="small-pagination"> -->
        <span class="small-pagination">
            <span :class="{ 'isPrevNoClick': page.isPrevNoClick }" @click="prev">&lt;</span>
            <span class="page">{{ page.current }}/{{ Math.ceil(total / size) }}</span>
            <span :class="{ 'isNextNoClick': page.isNextNoClick }" @click="next">&gt;</span>
        </span>
    </span>
</template>

<script>
import { defineComponent, reactive, watch } from 'vue'

export default defineComponent({
    prosp: {
        size: {
            type: Number,
            default: 1,
        },

        total: {
            type: Number,
            default: 6,
        },
    },

    setup(props, { emit }) {
        const page = reactive({
            current: 1,
            isPrevNoClick: false,
            isNextNoClick: false,
        })

        const prev = () => {
            page.isNextNoClick = false

            if (page.current <= 2) {
                page.isPrevNoClick = true
                page.isNextNoClick = false

                page.current = 1
            } else {
                page.current--
            }
        }

        const next = () => {
            page.isPrevNoClick = false

            if (page.current >= Math.ceil(props.total / props.size) - 1) {
                page.isPrevNoClick = false
                page.isNextNoClick = true

                page.current = Math.ceil(props.total / props.size)
            } else {
                page.current++
            }
        }

        watch(() => page.current, () => {
            emit('currentPageChange', page.current)
        })

        return {
            page,

            prev,
            next,
        }
    },
})
</script>

<style scoped>

</style>

```
