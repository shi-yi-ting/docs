```
<template>
    <div class="tabList">
        <ul>
            <li v-for="(item, index) in tab.list" :key="index">
                <div :class="{ 'active': tab.isActive === item.active }" @click="tabSwitch(item)">
                    <!-- <a :href="item.route">{{ item.name }}</a> -->
                    <span>{{ item.name }}</span>
                </div>

                <dl v-if="item.child && item.child.length > 0">
                    <dt v-for="(val, key) in item.child" :key="key">
                        <!-- <a :href="val.route">{{ val.name }}</a> -->
                        <span>{{ val.name }}</span>
                    </dt>
                </dl>
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
                    child: [
                        {
                            name: 'DataLab查询',
                            icon: '',
                            routeUrl: '',
                        },

                        {
                            name: 'DataLab查询',
                            icon: '',
                            routeUrl: '',
                        },
                    ]
                },
                {
                    name: '操作日志', // 操作日志
                    url: 'remoteDiagnosisDpDfsTv/tv',
                    active: 'operationLog',
                    child: [
                        {
                            name: 'DataLab查询',
                            icon: '',
                            routeUrl: '',
                        },

                        {
                            name: 'DataLab查询',
                            icon: '',
                            routeUrl: '',
                        },

                        {
                            name: 'DataLab查询',
                            icon: '',
                            routeUrl: '',
                        },
                    ]
                },
                {
                    name: '评价信息', // 评价信息
                    url: 'remoteDiagnosisDpDfsTv/tv',
                    active: 'evaluationInfo',
                    child: []
                },
            ],
        })

        const tabSwitch = (item) => {
            tab.isActive = item.active
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
    display: inline-block;
}
.tabList li {
    position: relative;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    font-family: "FZLTHJW-GB1-0";
    font-size: 16px;
    color: #b8bec0;
    background: #273037;
}
.tabList li .active {
    background: #273037;
    border-bottom: 4px solid #3a84ef;
}
.tabList li .active span {
    color: #fff;
}
.tabList li div {
    width: 100%;
    line-height: 56px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 4px solid #36404a;
}
.tabList li div span {
    display: inline-block;
    padding: 0 20px;
    color: #b8bec0;
}
.tabList li div:hover {
    color: #fff;
    background-color: #273037;
}
.tabList li div:hover span {
    color: #fff;
}
.tabList li dl {
    position: absolute;
    display: none;
    min-width: 100%;
    padding: 10px 0;
    background: #303942;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    z-index: 9999;
}
.tabList li dl dt {
    height: 40px;
    line-height: 40px;
    color: #000;
}
.tabList li:hover dl {
    display: block;
}
.tabList li dl dt span {
    display: inline-block;
    width: 100%;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
    text-align: left;
    white-space: nowrap;
}
.tabList li dl dt span:hover {
    color: #418ef7;
}
</style>

```
