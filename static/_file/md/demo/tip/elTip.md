```
<template>
    <div>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
        >
            <el-button>top-start</el-button>
        </el-tooltip>

        <!-- 悬浮信息写在标签中 -->
        <el-tooltip placement="top">
            <label style="margin: 0 10px 40px;">
                悬浮提示: 悬浮信息写在标签中
            </label>

            <template #content>
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
            </template>
        </el-tooltip>

        <!-- 动态展示鼠标悬浮内容 -->
        <el-tooltip :content="{
            0: '定时任务中止',
            1: `下次执行时间: ${taskItem.nextfiretime}`,
            2: '定时任务编辑中',
            3: '定时任务审核中',
            undefined: '创建定时任务',
            '': '创建定时任务',
            null: '创建定时任务',
        }[taskItem.schedule_status]">
            <img src="./img/airplane_blue.png" alt="">
        </el-tooltip>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { ElButton, ElTooltip } from 'element-plus'

export default defineComponent({
    components: {
        ElButton,
        ElTooltip,
    },

    setup() {
        const taskItem = reactive({
            nextfiretime: 123,
            schedule_status: 1,
        })

        return {
            taskItem
        }
    },
})
</script>


```
