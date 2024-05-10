## AntDesign中弹框的使用

[antDesign官方文档](https://antdv.com/docs/vue/getting-started-cn)

### 利用ant-design-vue中的Modal写一个showAntConfig公用方法具体如下：

```
import { createVNode } from 'vue'

import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { Modal } from 'ant-design-vue'

export const showAntConfirm = (title = '提示', content = '确认继续?', fun) => {
    Modal.confirm({
        title: title,
        icon: createVNode(ExclamationCircleOutlined), // 图标也可以处理成动态
        content: content,
        onOk() {
            fun()
        },

        onCancel() { },
    })
}



/**
 * 定义一个名为 showAntConfirm 的函数，该函数用于显示一个 Ant Design Vue 的确认对话框。
 * 函数的参数如下：
 * - title：对话框的标题，默认值为 '提示'。
 * - content：对话框的内容，默认值为 '确认继续?'。
 * - fun：一个函数，当点击对话框的确定按钮时，会执行这个函数。这个函数的类型是泛型 T，它可以是任 何接受任意参数并返回任何结果的函数。
 * 函数的返回类型是 void，表示这个函数没有返回值。
 * fun 是一个泛型函数，这个函数可以接受任意数量和类型的参数，并返回任何类型的结果。showAntConfirm 函数的返回类型是 void。
 * **/

// import { createVNode } from 'vue'
// // import type {  VNode } from '@vue/runtime-core'
// import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
// import { Modal } from 'ant-design-vue'

// export const showAntConfirm = <T extends (...args: any[]) => any>(title: string = '提示', content: string = '确认继续?', fun: T): void => {
//     Modal.confirm({
//         title: title,
//         icon: createVNode(ExclamationCircleOutlined), // 图标也可以处理成动态
//         content: content,
//         onOk() {
//             fun()
//         },
//         onCancel() { },
//     })
// }
```

### 使用

```
<template>
    <div class="enclosure_container">
        <div class="pointer" @click="downFile">弹框</div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'

import { showAntConfirm } from './_js/showAntConfig.js' // 导入封装弹框的方法

export default {
    setup() {
        const downFile = () => {
            showAntConfirm('提示', '确认继续?', () => {
                console.log('下载文件')
            })
        }

        return {
            downFile,
        }
    },
}
</script>
```
