## 组件

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
import { defineComponent, reactive , onMounted, computed } from 'vue'

import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        // 路由
        const routerObj = reactive({
            router: useRouter(),
            routes: useRoute(),
        })

        // tab 处理
        function handleTabs() {
            const tab = reactive({
                isActive: computed({
                    get() {
                        return routerObj.routes.matched[0].meta.header.active || 'home'
                    },
                    set(newVal) { },
                }),

                list: [
                    {
                        name: '首页',
                        active: 'home',
                        url: '/home'
                    },

                    {
                        name: '导航',
                        active: 'guide',
                        url: '/guide'
                    },

                    {
                        name: '组件',
                        active: 'enclosure',
                        url: '/enclosure'
                    },

                    {
                        name: '案例',
                        active: 'demo',
                        url: '/demo'
                    },

                    {
                        name: 'Blog-v3',
                        active: 'blog-v3',
                        url: 'https://shi_yi_ting.gitee.io/my-blog/#/home'
                    },
                ],
            })

            const tabSwitch = (item) => {
                tab.isActive = item.active
                if (item.active === 'blog-v3') {
                    window.open(item.url, '_blank', console.log(item.url))
                    return false
                }

                routerObj.router.push(item.url)
            }
            return { tab, tabSwitch }
        }

        onMounted(() => {
            console.log('routerObj', routerObj);
        })


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
            vertical-align: top;
            box-sizing: border-box;
            cursor: pointer;
            user-select: none;
            // font-family: "FZLTHJW-GB1-0";
            // font-size: 16px;

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

## 路由

注意meta中的内容

```home
import HomeFrame from '@/views/home/homeFrame.vue'
import Frame from '@/views/frame.vue'

const router = {
    path: '/',
    name: 'home',
    component: Frame,
    redirect: '/home',
    meta: {
        title: 'home',
        header: {
            active: 'home',
        },
    },
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
        },
    ],
}

export default router

```

```guide
import Frame from '@/views/frame.vue'

const router = {
    path: '/guide',
    name: 'guide',
    component: Frame,
    redirect: '/guide',
    meta: {
        title: 'guide',
        header: {
            active: 'guide',
        },
    },
    children: [
        {
            path: '/guide',
            name: 'guide',
            component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/guide.vue'),
        },
    ],
}

export default router

```

## router文件夹中的 index.js

```
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 加载进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import homeRouter from '@/views/home/router.ts'
import guideRouter from '@/views/guide/router.ts'
// import blogDocsRouter from '@/views/blogDocs/router.ts'
// import devDocsRouter from '@/views/devDocs/router.ts'
import enclosureRouter from '@/views/enclosure/router.ts'
// import vueDocsRouter from '@/views/vueDocs/router.ts'
import demoRouter from '@/views/demo/router.ts'
// import testRouter from '@/views/test/router.ts'

const routerSettings = {
    routes: [
        homeRouter,
        guideRouter,
        // blogDocsRouter,
        // devDocsRouter,
        enclosureRouter,
        // vueDocsRouter,
        demoRouter,
        // testRouter,
    ],
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerSettings.routes,
})


// 进度条配置
Nprogress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 速度递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
    Nprogress.start() // 每次切换页面时调用进度条
    next() // 这个一定要加，否则页面不会跳转
})

// 路由后置守卫
router.afterEach(() => {
    Nprogress.done() // 在即将进入新的页面组件前关闭进度条
})


/** 挂载路由实例 */
export function setupRouter(app: App<Element>) {
    app.use(router)
}

// export default router


```
