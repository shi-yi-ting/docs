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
