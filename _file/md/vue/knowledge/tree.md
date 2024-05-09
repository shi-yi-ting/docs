## 树组件的使用

### 安装依赖

```
npm install --save @riophae/vue-treeselect
```

### 使用

```
// html
<template>
    <div>
        <treeselect v-model="config.departmentId" :options="treeData.data" :normalizer="normalizer" />
    </div>
</template>
// js
<script>
import { defineComponent } from '@vue/composition-api'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default defineComponent({
    components: {
        Treeselect,
    },
    setup() {
    },
})
<script>
```
