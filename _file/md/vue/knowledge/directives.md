## 自定义指令
注意：vue2和vue3在自定义指令时使用的周期函数有不同

### vue2中自定义clickOutside（点击元素外部触发）

```
// 适用于vue2,它的周期函数是bind，unbind
// 在components文件夹中新建directives文件夹，新建clickOutside.js内容如下：
export default {
    bind(el, binding) {
        el.__clickOutSide__ = (e) => {
            if (!el.contains(e.target) && el !== e.target) {
                binding.value(e)
            }
        }

        window.addEventListener('click', el.__clickOutSide__, true)
    },
    unbind(el) {
        window.removeEventListener('click', el.__clickOutSide__, true)
    },
}

```

#### 注册

```
// plugins文件加中新建base.js导入之定义指令并进行全局注册
import Vue from 'vue'

import clickOutside from '@/components/directives/clickOutside.js'
Vue.directive('clickOutside', clickOutside)
import fixed from '@/components/directives/fixed.js'
Vue.directive('fixed', fixed)
```
### main.js中导入base.js

```
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import App from '@/App.vue'
import i18n from '@/i18n/index.js'
import store from '@/store/index.js'
import router from '@/router/index.js'

import '@/plugins/base.js'

Vue.config.performance = (process.env.NODE_ENV === 'development')
Vue.config.productionTip = false

const $app = new Vue({
    i18n,
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')

window.$this = $app

```
#### 使用

```
<template>
    <div v-clickOutside="clickOutside">
        directives
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const clickOutside = () => {
            console.log('clickOutside')
        }

        return {
            clickOutside,
        }
    },
})
</script>


```
### vue3中自定义clickOutside（点击元素外部触发）

```
// 适用于vue3,周期函数是beforeMount，unmounted
// 在components文件夹中新建directives文件夹，新建clickOutside.js内容如下：
export default {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value()
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
}

```
#### 注册

```
// plugins文件加中新建base.js导入之定义指令并进行全局注册
import type { App } from 'vue'

import snippet from '@/components/base/snippet/snippet.vue'
import bubbles from '@/components/base/bubbles/bubbles.vue' // 背景气泡
import markDown from '@/components/base/markDown/markDown.vue' // 背景气泡

// 自定义指令
import clickOutside from '@/components/directives/clickOutside.js'

export function setupBaseComponents(app: App<Element>) {
    app.component('Snippet', snippet)
    app.component('Bubbles', bubbles)
    app.component('MarkDown', markDown)

    app.directive('clickOutside', clickOutside)
}

```
### main.js中导入base.js

```

import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from '@/router/index.js'
import { setupIcons } from '@/plugins/antIcons.js'
import { setupBaseComponents } from '@/plugins/base.ts'
import preview from 'vue3-image-preview'


import '@/assets/css/common.css'
import 'ant-design-vue/dist/antd.css' // 这里不导入的话在js中使用的ant组件样式将出不来

import '@/globals/globals.js'


// 页面适配
// import 'amfe-flexible' // 适用与H5，貌似不适用pc端
// import 'lib-flexible/flexible' // 适用与H5，貌似不适用pc端
// import '@/utils/rem.js'

const app = createApp(App)

setupRouter(app) // 挂载 路由 --- 原来：app.use(router)
// setupElement(app) // ui库注册
setupIcons(app)
setupBaseComponents(app)
app.use(preview)

app.mount('#app')

```
#### 使用

```
<template>
    <div v-clickOutside="clickOutside">
        directives
    </div>
</template>

<script lang="ts" setup>
const clickOutside = () => {
    console.log('clickOutside')
}
</script>

```
