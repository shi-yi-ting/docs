## 使用

```
<template>
    <div>
        <Tag :tagImg="tag.tagImg">
            <span>标题</span>
        </Tag>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

import Tag from './vue/tag.vue'

export default defineComponent({
    components: {
        Tag,
    },

    setup() {
        const tag = reactive({
            // tagImg: require('@/assets/images/help.png'),
            tagImg: new URL('./img/help.png', import.meta.url).href,
        })


        return {
            tag,
        }
    },
})
</script>
```

## tag组件封装代码

```
<template>
    <span class="tag">
        <span :style="contentStyle" class="content">
            <slot />
            <i :style="imgStyle" class="img" />
        </span>
    </span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        fontColor: {
            type: String,
            default: '#666666',
        },
        bgColor: {
            type: String,
            default: undefined,
        },
        borderColor: {
            type: String,
            default: undefined,
        },
        tagImg: {
            type: String,
            default: undefined,
        },
    },
    computed: {
        contentStyle() {
            let style = {}

            style.color = this.fontColor

            if (this.bgColor) {
                style.backgroundColor = this.bgColor
            }

            style.lineHeight = '22px'
            if (this.borderColor) {
                style.border = `1px solid ${this.borderColor}`
                style.borderRight = '0'
                style.lineHeight = '20px'
            }

            return style
        },
        imgStyle() {
            let style = {}

            if (this.tagImg) {
                style.backgroundImage = `url(${this.tagImg})`
            }

            if (this.borderColor) {
                style.top = '-1px'
            }

            return style

        },
    },
}
</script>

<style scoped>
.tag {
    display: inline-block;
    height: 22px;
    line-height: 0;
    vertical-align: middle;
}
.tag .content {
    display: inline-block;
    position: relative;
    height: 22px;
    padding: 0 2px 0 10px;
    margin-right: 20px;
    font-size: 13px;
}
.tag .content .img {
    position: absolute;
    right: -20px;
    width: 20px;
    height: 22px;
    background-repeat: no-repeat;
}
</style>

```
