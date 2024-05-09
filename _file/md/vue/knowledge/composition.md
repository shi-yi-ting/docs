
## 组合式API

### 安装依赖

`npm install @vue/composition-api`或`yarn add @vue/composition-api`

### 注册

在使用@vue/composition-api前必须通过Vue.use() 进行安装，之后才可使用新的组合式API进行组件开发

```
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
```

### 使用API

当在Vue3.0使用时，只需要简单的将 @vue/composition-api 换成 vue 即可

```
// 导入相关组件
import { defineComponent, ref, reactive, computed, watch, onMounted, onBeforeUnmount } from '@vue/composition-api'
```
## vue3中组件通信
### 父组件向子组件传值

```
<template>
    <!-- 父组件 -->
    <div>
        <Gap :affiltatedhub="searchInput.Affiltatedhub" />
    </div>
</template>

```

```
<template>
    <!-- 子组件 -->
    <div>
        gap
    </div>
</template>

<script setup>

// TODO
const props = defineProps({
    affiltatedhub: {
        type: Array,
        default: () => {
            return []
        }
    }
})
</script>

<style scoped>
</style>


```
### 子组件向父组件传值

```
<template>
    <!-- 子组件 -->
    <div class="tree-wrap">
        <a-tree @select="onSelect">
            <template #title="{ title }">
                <span>{{ title }}</span>
            </template>
        </a-tree>
    </div>
</template>


<script lang="ts" setup>

// TODO
// 选择某个节点
const emits = defineEmits(['handleNodeClick', 'handleSelectedKeys'])
const onSelect = (selectedKeys, currentNode) => {
    emits('handleNodeClick', currentNode.node.dataRef)
    emits('handleSelectedKeys', selectedKeys[0])
}
</script>

```

```
<template>
    <!-- 父组件 -->
    <div class="overviewHome">
        <Tree @handleNodeClick="handleNodeClick" @handleSelectedKeys="handleSelectedKeys" />
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

import Tree from './tree/tree.vue'

// TODO
// 树节点
const selectedKeys = ref('')
const handleSelectedKeys = (data) => {
    selectedKeys.value = data
    console.log("selectedKeys.value ", selectedKeys.value)
}

const handleNodeClick = (data) => {
    console.log('data', data)
}
</script>

```

## vue2中组件通信
### 父组件向子组件传值

```
<template>
    <!-- 父组件 -->
    <div>
        <MarkDown :content="'232323'" :id="'preview-only'" />
    </div>
</template>

```

```
<template>
    <!-- 子组件 -->
    <div>
        <MdPreview :editorId="id" :modelValue="content" />
    </div>
</template>

<script>
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

export default {
    components: {
        MdPreview,
    },

    props: {
        content: {
            type: String,
        },

        id: {
            type: String,
            dafault: 'preview-only',
        },
    },

    setup(props) {
        return {}
    },
}
</script>

```
### 子组件向父组件传值

```
<template>
    <!-- 子组件 -->
    <div>
        <div class="carousel-wrap">
            <el-carousel arrow="always" :autoplay="false">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <div class="carousel">
                        <div v-for="(itemTwo, index) of item.childrenList" :key="index" class="item" @click="switchPage(itemTwo)">{{ itemTwo.name }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            },
        },
    },

    // setup(props, context) {
    setup(props, { emit }) {
        const switchPage = (item) => {
            emit('switchPage', item)
            // context.emit('switchPage', item)
        }

        return {
            switchPage,
        }
    },
})
</script>

```

```
<template>
    <!-- 父组件 -->
    <div>
        <Carousel @switchPage="switchPage" />
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const switchPage = (data) => {
            console.log('data', data)
        }


        return {
            switchPage,
        }
    },
})
</script>
```
