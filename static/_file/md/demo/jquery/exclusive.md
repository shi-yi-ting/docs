```
<template>
    <div>
        <div class="jq-exclusive">
            <Button>快速</Button>
            <Button>快速</Button>
            <Button>快速</Button>
            <Button>快速</Button>
            <Button>快速</Button>
            <Button>快速</Button>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
    setup() {
        const jqueryMounted = () => {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $('.jq-exclusive button').click(function() {
                // // 2. 当前的元素变化背景颜色
                // $(this).css('background', 'pink')
                // // 3. 其余的兄弟去掉背景颜色 隐式迭代
                // $(this).siblings('.jq-exclusive button').css('background', '')

                $(this).css('color', 'red').siblings().css('color', '')
            })
        }

        onMounted(() => {
            jqueryMounted()
        })

        return {

        }
    },
})
</script>

```
