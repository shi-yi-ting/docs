```vue
<template>
    <div>
        <Tooltip placement="topLeft" color="#fff">
            <div ref="container" class="container">
                <div class="text-container">
                    {{ truncatedText }}
                </div>
            </div>

            <template #title>
                <div class="text-container" style="color: #545454">
                    {{ originalText }}
                </div>
            </template>
        </Tooltip>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Tooltip } from 'ant-design-vue'

// TODO
const container = ref(null) // 创建一个ref来引用DOM元素
const originalText = ref('超出高度度省略号展示超出高度度省略号展示超出高度度省略号展示超出高度度省略号展示超出高度度123') // 原文本
const truncatedText = ref('') // 要展示的文本
const number = ref(38) // 文本将要截取的长度（根据设置的高度手动调节到合适长度）

// 在组件挂载后获取DOM元素的宽度和高度
onMounted(async () => {
    truncatedText.value = originalText.value
    await nextTick(); // 等待DOM渲染完成（注意它的位置必须在truncatedText.value = originalText.value之后）

    const element = container.value
    if (element) {
        const containerHeight = element.clientHeight; // 盒子高度

        const textContainer = element.querySelector('.text-container') // 文本高度
        const textHeight = textContainer.clientHeight;

        if (textHeight > containerHeight) {
            const original = originalText.value
            const text = original.trim() // 去掉空格
            const remainingText = text.slice(0, number.value) // 获取文本除去最后三个字符的部分
            truncatedText.value = remainingText + '...' // 添加省略号
        } else {
            truncatedText.value = originalText.value // 文本未超出高度, 不做处理(这一句可以删除)
        }
    }
})

</script>

<style lang="less" scoped>
.container {
    width: 200px;
    max-height: 80px; // 这个高度是需要设置的
    padding: 5px;
    border: 1px solid #bfbfbf;
}
</style>

```
