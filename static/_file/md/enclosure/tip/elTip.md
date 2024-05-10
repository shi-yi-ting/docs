## 使用

```
<template>
    <div style="padding: 40px;">
        <div>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button>element中的提示组件: el-tooltip</el-button>
            </el-tooltip>
        </div>

        <div style="margin-top: 10px;">
            <TooltipOver :content="'没超过规定宽度时不展示tip'" :refName="refName" className="valid_tooltip_width500" :popperClass="'tippy_width500'" isInline />
        </div>

        <div style="margin-top: 10px;">
            <TooltipOver :content="'基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)'" :refName="refName" className="valid_tooltip_width500" :popperClass="'tippy_width500'" isInline />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElButton, ElTooltip } from 'element-plus'
import TooltipOver from './vue/toolTipOver.vue'

export default defineComponent({
    components: {
        ElButton,
        ElTooltip,
        TooltipOver,
    },

    setup() {
        const refName = ref('toolTip')

        return {
            refName,
        }
    },
})
</script>


<style>
/* 提示框 */
.valid_tooltip_width500 {
    max-width: 500px;
}

.tippy_width500 {
    max-width: 500px;
}
</style>

```

## 基于el-tooltip封装的组件TooltipOver

```
<template>
    <span v-if="isInline" id="tooltip_over">
        <el-tooltip class="item" :effect="effect" :disabled="isShowTooltip" :content="content" placement="top" :popperClass="popperClass">
            <span class="text_overflow full_height" :class="className" :style="{ width: `${width}px`, display: 'inline-block' }" @click="tooltipClick" @mouseover="onMouseOver(refName)">
                <span :ref="refName" class="text_overflow">{{ content || '' }}</span>
            </span>
        </el-tooltip>
    </span>

    <div v-else id="tooltip_over">
        <el-tooltip class="item" :content="content" :effect="effect" :disabled="isShowTooltip" :popperClass="popperClass" placement="top">
            <p class="text_overflow full_height" :class="className" :style="{ width: `${width}px` }" @click="tooltipClick" @mouseover="onMouseOver(refName)">
                <span :ref="refName" class="text_overflow">{{ content || '' }}</span>
            </p>
        </el-tooltip>
    </div>
</template>

<script>
import { ElTooltip } from 'element-plus'

export default {
    name: 'TooltipOver',
    components: {
        ElTooltip
    },
    props: {
        // 显示的文字内容
        content: {
            type: String,
            default: '',
        },
        // 外层框的样式，在传入的这个类名中设置文字显示的宽度
        className: {
            type: String,
            default: '',
        },
        // 为页面文字标识（如在同一页面中调用多次组件，此参数不可重复）
        refName: {
            type: String,
            default: '',
        },

        isInline: {
            type: Boolean,
            default: false,
        },
        popperClass: { // 设置提示框的宽度
            type: String,
        },
        width: {
            type: Number,
        },
        effect: {
            type: String, // light, dark(默认)
        },
    },
    data() {
        return {
            isShowTooltip: true,
        }
    },
    methods: {
        onMouseOver(str) {
            // 这里不使用offsetWidth，四舍五入后不精确，会有临界值
            let aaa = this.$refs[str].parentNode
            const parentWidth = this.$refs[str].parentNode.getBoundingClientRect().width
            const contentWidth = this.$refs[str].getBoundingClientRect().width
            console.log('parentWidth', parentWidth)
            console.log('contentWidth', contentWidth)
            console.log('aaa', aaa)


            // 判断是否开启tooltip功能
            this.isShowTooltip = contentWidth <= parentWidth
        },
        tooltipClick() {
            this.$emit('tooltipClick')
        },
    },
}
</script>

<style lang="less" scoped>
.text_overflow {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.full_height {
    height: 100%;
}
</style>

```
