```
<template>
    <div class="tabList">
        <ul>
            <li v-for="(item, index) of tab.list" :key="index">
                <div :class="{ 'active': tab.isActive === item.active }" @click="tabSwitch(item)">
                    <span>{{ item.name }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        // tab 处理
        function handleTabs() {
            const tab = reactive({
            isActive: 'result',

            list: [
                {
                    name: '检测结果', // 检测结果
                    url: '',
                    active: 'result',
                },
                {
                    name: '操作日志', // 操作日志
                    url: 'remoteDiagnosisDpDfsTv/tv',
                    active: 'operationLog',
                },
                {
                    name: '评价信息', // 评价信息
                    url: 'remoteDiagnosisDpDfsTv/tv',
                    active: 'evaluationInfo',
                },
            ],
        })

        const tabSwitch = (data) => {
            tab.isActive = data.active
        }
            return { tab, tabSwitch }
        }

        return {
            ...handleTabs()
        }
    }
})
</script>

<style lang="less" scoped>
/* tab切换栏 */
.tabList {
    ul {
        padding: 0;
        margin: 0;

        li {
            display: inline-block;
            color: #b8bec0;
            box-sizing: border-box;
            cursor: pointer;
            user-select: none;

            div {
                width: 100%;
                color: #fff;
                text-align: center;
                box-sizing: border-box;
            }

            span {
                display: inline-block;
                color: #666666;
                padding: 0 10px;
            }

            .active {
                color: #3a84ef;
                span {
                    color: #3a84ef;
                }
            }
        }
    }
}
</style>


```
