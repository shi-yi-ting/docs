## 安装

```
npm install --save vue-tippy
```

## 注册(版本："vue-tippy": "4.7.2",)
在plugins文件加中新建 base.js 对该组件进配置导入
在 main.js 入口文件中导入这个 base.js 文件

## vue2 base.js配置如下(版本："vue-tippy": "4.7.2",)

```
import Vue from 'vue'

import VueTippy, { TippyComponent } from 'vue-tippy'
import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/google.css'
import 'tippy.js/themes/translucent.css'
Vue.use(VueTippy, {
    arrow: true, // 是否有箭头
    maxWidth: 500, // 悬浮框最大宽度
    boundary: 'viewport',
    onShow: (options) => {
        return !!options.props.content
    },
})
// Vue.use(VueTippy)

Vue.component('tippy', TippyComponent)
```

## 配置（版本："vue-tippy": "^6.4.1",）
主题配置待研究

```
import type { App } from 'vue'

// vue-tippy插件
import VueTippy from 'vue-tippy';

export function setupBaseComponents(app: App<Element>) {
    app.use(VueTippy);
}

```

## tippy的使用

```
<template>
    <div style="padding-bottom: 40px;">
        <div v-tippy content="I'm a Tippy tooltip!">
            tippy 悬浮提示: 悬浮信息写在标签内部;
        </div>


        <!-- placement 指定悬浮信息的位置， theme指定背景主题颜色 -->
        <tippy placement="right" theme="light" style="display: inline-block; margin-top: 5px;">
            <!-- #trigger 指定唯一性，不然可能会出现不可预期的错位 -->
            <template #trigger>
                <label style="margin: 0 10px 40px;">
                    <!-- <img src="@/assets/images/help.png"> -->
                    tippy 悬浮提示: 悬浮信息写在标签中
                </label>
            </template>
            <div style="text-align: left; padding: 10px;">
                <span>数据说明：</span>
                <ul>
                    <li>1、FDR(true positive rate ,TPR) 表示有多少比例的故障盘被成功地提前预测到。描述的是故障预测的覆盖率</li>
                    <li>2、FAR(false positive rate, FPR)计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例</li>
                    <li>3、AUC（Area Under Curve)为ROC曲线与x轴部分的积分值，通常这个值大于0.5小于1</li>
                    <li>4、FNR（false negative rate）表示实际的故障盘没有被预测到，漏报率</li>
                    <li>5、F值：Fβ Score是 precision 和 FDR的调和平均值，接近两者中的最小值，可以通过F值来评测模型性能</li>
                    <li>6、ACC(Accuracy)表示正常盘和故障盘分别被正确预测的概率，描述的是预测的准确率</li>
                    <li>7、precision 表示有多少比例的故障告警得到了应验（被告警的盘发生了故障），描述的是故障预测的精确率</li>
                    <li>8、FAR(false positive rate, FPR)，计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例</li>
                    <li>9、FAR(false positive rate, FPR)，计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例</li>
                </ul>
            </div>
        </tippy>
    </div>
</template>


使用可参考网址：https://madewith.cn/14

1. 首先执行 npm install --save vue-tippy 安装插件
2. 在plugins文件加中新建 base.js 对该组件进配置导入
3. 在 main.js 入口文件中导入这个 base.js 文件
4. 配置如下

import Vue from 'vue'

import VueTippy, { TippyComponent } from 'vue-tippy'
import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/google.css'
import 'tippy.js/themes/translucent.css'
Vue.use(VueTippy, {
    arrow: true, // 是否有箭头
    maxWidth: 500, // 悬浮框最大宽度
    boundary: 'viewport',
    onShow: (options) => {
        return !!options.props.content
    },
})
// Vue.use(VueTippy)

Vue.component('tippy', TippyComponent)

```

## v-tippy

```
<template>
    <div style="padding: 40px;">
        <label for="">动态展示鼠标悬浮内容</label>
        <div>
            <img v-tippy="{ placement: 'top', content: {
                0: '定时任务中止',
                1: `下次执行时间：<br>${taskItem.nextfiretime}`,
                2: '定时任务编辑中',
                3: '定时任务审核中',
                undefined: '创建定时任务',
                '': '创建定时任务',
                null: '创建定时任务',
            }[taskItem.schedule_status] }" src="./img/airplane_blue.png"
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskItem: {
                nextfiretime: 123,
                schedule_status: 1,
            },
        }
    },
}
</script>

```
