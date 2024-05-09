import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const b=JSON.parse('{"title":"directive 指令","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/基础/directives.md","filePath":"docs/frontend/Vue/基础/directives.md"}'),e={name:"docs/frontend/Vue/基础/directives.md"},l=p(`<h1 id="directive-指令" tabindex="-1">directive 指令 <a class="header-anchor" href="#directive-指令" aria-label="Permalink to &quot;directive 指令&quot;">​</a></h1><p>注意：vue2和vue3在自定义指令时使用的周期函数有所不同</p><h2 id="vue2" tabindex="-1">Vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;Vue2&quot;">​</a></h2><p>在 Vue 2，自定义指令是通过使用下面列出的钩子来创建的，这些钩子都是可选的</p><ul><li>bind - 指令绑定到元素后发生。只发生一次。</li><li>inserted - 元素插入父 DOM 后发生。</li><li>update - 当元素更新，但子元素尚未更新时，将调用此钩子。</li><li>componentUpdated - 一旦组件和子级被更新，就会调用这个钩子。</li><li>unbind - 一旦指令被移除，就会调用这个钩子。也只调用一次。</li></ul><p><strong>vue2中自定义clickOutside（点击元素外部触发）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 适用于vue2,它的周期函数是bind，unbind</span></span>
<span class="line"><span>// 在components文件夹中新建directives文件夹，新建clickOutside.js内容如下：</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    bind(el, binding) {</span></span>
<span class="line"><span>        el.__clickOutSide__ = (e) =&gt; {</span></span>
<span class="line"><span>            if (!el.contains(e.target) &amp;&amp; el !== e.target) {</span></span>
<span class="line"><span>                binding.value(e)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        window.addEventListener(&#39;click&#39;, el.__clickOutSide__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    unbind(el) {</span></span>
<span class="line"><span>        window.removeEventListener(&#39;click&#39;, el.__clickOutSide__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// plugins文件加中新建base.js导入之定义指令并进行全局注册</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import clickOutside from &#39;@/components/directives/clickOutside.js&#39;</span></span>
<span class="line"><span>Vue.directive(&#39;clickOutside&#39;, clickOutside)</span></span>
<span class="line"><span>import fixed from &#39;@/components/directives/fixed.js&#39;</span></span>
<span class="line"><span>Vue.directive(&#39;fixed&#39;, fixed)</span></span></code></pre></div><h3 id="main-js中导入base-js" tabindex="-1">main.js中导入base.js <a class="header-anchor" href="#main-js中导入base-js" aria-label="Permalink to &quot;main.js中导入base.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import App from &#39;@/App.vue&#39;</span></span>
<span class="line"><span>import i18n from &#39;@/i18n/index.js&#39;</span></span>
<span class="line"><span>import store from &#39;@/store/index.js&#39;</span></span>
<span class="line"><span>import router from &#39;@/router/index.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/plugins/base.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.config.performance = (process.env.NODE_ENV === &#39;development&#39;)</span></span>
<span class="line"><span>Vue.config.productionTip = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const $app = new Vue({</span></span>
<span class="line"><span>    i18n,</span></span>
<span class="line"><span>    store,</span></span>
<span class="line"><span>    router,</span></span>
<span class="line"><span>    render: (h) =&gt; h(App),</span></span>
<span class="line"><span>}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.$this = $app</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div v-clickOutside=&quot;clickOutside&quot;&gt;</span></span>
<span class="line"><span>        directives</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const clickOutside = () =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;clickOutside&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            clickOutside,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3&quot;">​</a></h2><p>然而，在 Vue 3 中，我们为自定义指令创建了一个更具凝聚力的 API。正如你所看到的，它们与我们的组件生命周期方法有很大的不同，即使我们正与类似的事件钩子，我们现在把它们统一起来了：</p><ul><li>bind → beforeMount</li><li>inserted → mounted</li><li>beforeUpdate：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。</li><li>update → 移除！有太多的相似之处要更新，所以这是多余的，请改用 updated。</li><li>componentUpdated → updated</li><li>beforeUnmount：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。</li><li>unbind -&gt; unmounted</li></ul><p><strong>vue3中自定义clickOutside（点击元素外部触发）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 适用于vue3,周期函数是beforeMount，unmounted</span></span>
<span class="line"><span>// 在components文件夹中新建directives文件夹，新建clickOutside.js内容如下：</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    beforeMount(el, binding) {</span></span>
<span class="line"><span>        el.clickOutsideEvent = function (event) {</span></span>
<span class="line"><span>            if (!(el === event.target || el.contains(event.target))) {</span></span>
<span class="line"><span>                binding.value()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        document.body.addEventListener(&#39;click&#39;, el.clickOutsideEvent)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    unmounted(el) {</span></span>
<span class="line"><span>        document.body.removeEventListener(&#39;click&#39;, el.clickOutsideEvent)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="注册-1" tabindex="-1">注册 <a class="header-anchor" href="#注册-1" aria-label="Permalink to &quot;注册&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// plugins文件加中新建base.js导入之定义指令并进行全局注册</span></span>
<span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义指令</span></span>
<span class="line"><span>import clickOutside from &#39;@/components/directives/clickOutside.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function setupBaseComponents(app: App&lt;Element&gt;) {</span></span>
<span class="line"><span>    app.directive(&#39;clickOutside&#39;, clickOutside)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="main-js中导入base-js-1" tabindex="-1">main.js中导入base.js <a class="header-anchor" href="#main-js中导入base-js-1" aria-label="Permalink to &quot;main.js中导入base.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { setupRouter } from &#39;@/router/index.js&#39;</span></span>
<span class="line"><span>import { setupBaseComponents } from &#39;@/plugins/base.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/globals/globals.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setupRouter(app) // 挂载 路由 --- 原来：app.use(router)</span></span>
<span class="line"><span>setupBaseComponents(app)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div v-clickOutside=&quot;clickOutside&quot;&gt;</span></span>
<span class="line"><span>        directives</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>const clickOutside = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;clickOutside&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="自定义指令-适合于vue2" tabindex="-1">自定义指令(适合于vue2) <a class="header-anchor" href="#自定义指令-适合于vue2" aria-label="Permalink to &quot;自定义指令(适合于vue2)&quot;">​</a></h2><h3 id="clickoutside" tabindex="-1">clickOutside <a class="header-anchor" href="#clickoutside" aria-label="Permalink to &quot;clickOutside&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>    bind(el, binding) {</span></span>
<span class="line"><span>        el.__clickOutSide__ = (e) =&gt; {</span></span>
<span class="line"><span>            if (!el.contains(e.target) &amp;&amp; el !== e.target) {</span></span>
<span class="line"><span>                binding.value(e)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        window.addEventListener(&#39;click&#39;, el.__clickOutSide__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    unbind(el) {</span></span>
<span class="line"><span>        window.removeEventListener(&#39;click&#39;, el.__clickOutSide__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="fixed" tabindex="-1">fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;fixed&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    bind(el, binding) {</span></span>
<span class="line"><span>        el.__fixed__ = async () =&gt; {</span></span>
<span class="line"><span>            await $this.$nextTick()</span></span>
<span class="line"><span>            if (jQuery(el).css(&#39;position&#39;) !== &#39;relative&#39;) {</span></span>
<span class="line"><span>                jQuery(el).css({</span></span>
<span class="line"><span>                    position: &#39;relative&#39;,</span></span>
<span class="line"><span>                    width: &#39;&#39;,</span></span>
<span class="line"><span>                    top: &#39;&#39;,</span></span>
<span class="line"><span>                    bottom: &#39;&#39;,</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                await $this.$nextTick()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const { top: sTop, bottom: sBottom } = binding.value || { top: 0 }</span></span>
<span class="line"><span>            const { top: eTop, bottom: eBottomTop, width: eWidth } = el.getBoundingClientRect()</span></span>
<span class="line"><span>            const eBottom = jQuery(window).height() - eBottomTop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (sTop !== undefined) {</span></span>
<span class="line"><span>                if (eTop &lt;= sTop) {</span></span>
<span class="line"><span>                    jQuery(el).css({</span></span>
<span class="line"><span>                        position: &#39;fixed&#39;,</span></span>
<span class="line"><span>                        width: \`\${eWidth}px\`,</span></span>
<span class="line"><span>                        top: \`\${sTop}px\`,</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (sBottom !== undefined) {</span></span>
<span class="line"><span>                if (eBottom &lt;= sBottom) {</span></span>
<span class="line"><span>                    jQuery(el).css({</span></span>
<span class="line"><span>                        position: &#39;fixed&#39;,</span></span>
<span class="line"><span>                        width: \`\${eWidth}px\`,</span></span>
<span class="line"><span>                        bottom: \`\${sBottom}px\`,</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        el.__fixed__()</span></span>
<span class="line"><span>        window.addEventListener(&#39;scroll&#39;, el.__fixed__, true)</span></span>
<span class="line"><span>        window.addEventListener(&#39;resize&#39;, el.__fixed__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    unbind(el) {</span></span>
<span class="line"><span>        window.removeEventListener(&#39;scroll&#39;, el.__fixed__, true)</span></span>
<span class="line"><span>        window.removeEventListener(&#39;resize&#39;, el.__fixed__, true)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="v-copy" tabindex="-1">v-copy <a class="header-anchor" href="#v-copy" aria-label="Permalink to &quot;v-copy&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { Message } from &#39;view-design&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const vCopy = { //</span></span>
<span class="line"><span>    bind(el, { value }) {</span></span>
<span class="line"><span>        el.$value = value // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到</span></span>
<span class="line"><span>        el.handler = () =&gt; {</span></span>
<span class="line"><span>            console.log(111)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (!el.$value) { // 值为空的时候，给出提示</span></span>
<span class="line"><span>                Message.warning(&#39;无复制内容&#39;)</span></span>
<span class="line"><span>                console.log(&#39;无复制内容&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                return // 结束函数</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const textarea = document.createElement(&#39;textarea&#39;) // 创建一个文本域标签</span></span>
<span class="line"><span>            textarea.readOnly = &#39;readonly&#39;</span></span>
<span class="line"><span>            textarea.style.position = &#39;absolute&#39;</span></span>
<span class="line"><span>            textarea.style.left = &#39;-9999px&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            textarea.value = el.$value</span></span>
<span class="line"><span>            document.body.appendChild(textarea)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            textarea.select() // 选中值并复制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const result = document.execCommand(&#39;Copy&#39;)</span></span>
<span class="line"><span>            if (result) {</span></span>
<span class="line"><span>                console.log(&#39;复制成功&#39;)</span></span>
<span class="line"><span>                Message.success(&#39;复制成功&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            document.body.removeChild(textarea)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        el.addEventListener(&#39;click&#39;, el.handler) // 绑定点击事件，就是所谓的一键 copy 啦</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    componentUpdated(el, { value }) { // 当传进来的值更新的时候触发</span></span>
<span class="line"><span>        console.log(222)</span></span>
<span class="line"><span>        el.$value = value</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    unbind(el) { // 指令与元素解绑的时候，移除事件绑定</span></span>
<span class="line"><span>        console.log(333)</span></span>
<span class="line"><span>        el.removeEventListener(&#39;click&#39;, el.handler)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default vCopy</span></span>
<span class="line"><span>// https://juejin.cn/post/6844903942321602568</span></span>
<span class="line"><span>// 需求：实现一键复制文本内容，用于鼠标右键粘贴。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 动态创建 textarea 标签，并设置 readOnly 属性及移出可视区域</span></span>
<span class="line"><span>// 将要复制的值赋给 textarea 标签的 value 属性，并插入到 body</span></span>
<span class="line"><span>// 选中值 textarea 并复制</span></span>
<span class="line"><span>// 将 body 中插入的 textarea 移除</span></span>
<span class="line"><span>// 在第一次调用时绑定事件，在解绑时移除事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 作者：lzg9527</span></span>
<span class="line"><span>// 链接：https://juejin.cn/post/6906028995133833230</span></span>
<span class="line"><span>// 来源：掘金</span></span>
<span class="line"><span>// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</span></span></code></pre></div><h3 id="v-debounce" tabindex="-1">v-debounce <a class="header-anchor" href="#v-debounce" aria-label="Permalink to &quot;v-debounce&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// eslint-disable-next-line no-shadow</span></span>
<span class="line"><span>const debounce = {</span></span>
<span class="line"><span>    inserted: function (el, binding) {</span></span>
<span class="line"><span>        console.log(&#39;debounce&#39;, binding)</span></span>
<span class="line"><span>        let timer</span></span>
<span class="line"><span>        el.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>            if (timer) {</span></span>
<span class="line"><span>                clearTimeout(timer)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>                binding.value()</span></span>
<span class="line"><span>            }, 1000)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default debounce</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://juejin.cn/post/6906028995133833230#heading-0</span></span>
<span class="line"><span>// 背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。</span></span>
<span class="line"><span>// 需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 思路：</span></span>
<span class="line"><span>// 1. 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。</span></span>
<span class="line"><span>// 2. 将事件绑定在 click 方法上。</span></span></code></pre></div><h3 id="v-emoji" tabindex="-1">v-emoji <a class="header-anchor" href="#v-emoji" aria-label="Permalink to &quot;v-emoji&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// eslint-disable-next-line no-shadow</span></span>
<span class="line"><span>let findEle = (parent, type) =&gt; {</span></span>
<span class="line"><span>    return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const trigger = (el, type) =&gt; {</span></span>
<span class="line"><span>    const e = document.createEvent(&#39;HTMLEvents&#39;) // 创建事件</span></span>
<span class="line"><span>    e.initEvent(type, true, true) // 初始化事件,type为定义的事件名</span></span>
<span class="line"><span>    el.dispatchEvent(e) // 触发事件,e为要触发的事件,el为触发对象,可以是任何元素或其他事件目标</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const emoji = {</span></span>
<span class="line"><span>    bind: function (el, binding, vnode) { // 指令第一次绑定到元素时待用，对元素进行促使话</span></span>
<span class="line"><span>        // 正则规则可根据需求自定义</span></span>
<span class="line"><span>        let regRule = /[^\\u4E00-\\u9FA5|\\d|\\a-zA-Z|\\r\\n\\s,.?!，。？！…—&amp;$=()-+/*{}[\\]]|\\s/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let $inp = findEle(el, &#39;input&#39;) // 找到input元素</span></span>
<span class="line"><span>        el.$inp = $inp // 给el元素对象添加一个$inp属性属性值为input元素</span></span>
<span class="line"><span>        $inp.handle = function () { // 给input元素添加一个handle属性,属性值是一个函数，</span></span>
<span class="line"><span>            let val = $inp.value // 获取输入框的值</span></span>
<span class="line"><span>            $inp.value = val.replace(regRule, &#39;&#39;) // 输入值根据规则进行替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            trigger($inp, &#39;input&#39;) // 给input输入注册一个事件</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $inp.addEventListener(&#39;keyup&#39;, $inp.handle) // 输入框输入完成之后触发handle事件</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    unbind: function (el) { // 只调用一次，指令与元素解绑时调用。</span></span>
<span class="line"><span>        el.$inp.removeEventListener(&#39;keyup&#39;, el.$inp.handle)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default emoji</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createEvent</span></span>
<span class="line"><span>// 第一步：通过addEventListener监听input输入框什么时候输入完成</span></span>
<span class="line"><span>// 第二部：输入完成之后触发handler对输入的值进行处理</span></span>
<span class="line"><span>// 第三步：处理完成之后通过trigger函数主要是函数中的dispatchEvent将处理的值显示出来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 我们常规方法是在每一个表单的 on-change 事件上做处理。</span></span></code></pre></div><h3 id="v-focus" tabindex="-1">v-focus <a class="header-anchor" href="#v-focus" aria-label="Permalink to &quot;v-focus&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>    inserted(el, binding) {</span></span>
<span class="line"><span>        el.focus()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="v-has" tabindex="-1">v-has <a class="header-anchor" href="#v-has" aria-label="Permalink to &quot;v-has&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function bind(el, binding, vnode) {</span></span>
<span class="line"><span>    // 获取页面按钮权限</span></span>
<span class="line"><span>    let btnPermissionsArr = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (binding.value) {</span></span>
<span class="line"><span>        // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。</span></span>
<span class="line"><span>        btnPermissionsArr = Array.of(binding.value) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。</span></span>
<span class="line"><span>        btnPermissionsArr = vnode.context.$route.meta.btnPermissions</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (!Vue.prototype.$_has(btnPermissionsArr)) {</span></span>
<span class="line"><span>        el.parentNode.removeChild(el)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 权限检查方法</span></span>
<span class="line"><span>Vue.prototype.$_has = function (value) {</span></span>
<span class="line"><span>    let isExist = false</span></span>
<span class="line"><span>    // 获取用户按钮权限</span></span>
<span class="line"><span>    let btnPermissionsStr = sessionStorage.getItem(&#39;btnPermissions&#39;)</span></span>
<span class="line"><span>    if (btnPermissionsStr === undefined || btnPermissionsStr === null) {</span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (value.indexOf(btnPermissionsStr) &gt; -1) {</span></span>
<span class="line"><span>        isExist = true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return isExist</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    bind,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://juejin.cn/post/6844903609151258631</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// path: &#39;/permission&#39;,</span></span>
<span class="line"><span>// component: Layout,</span></span>
<span class="line"><span>// name: &#39;权限测试&#39;,</span></span>
<span class="line"><span>// meta: { btnPermissions: [&#39;admin&#39;,&#39;supper&#39;,&#39;normal&#39;] }, //页面需要的权限</span></span>
<span class="line"><span>// children: [</span></span>
<span class="line"><span>//     {</span></span>
<span class="line"><span>//         path: &#39;supper&#39;,</span></span>
<span class="line"><span>//         component: _import(&#39;system/supper&#39;),</span></span>
<span class="line"><span>//         name: &#39;权限测试页&#39;,</span></span>
<span class="line"><span>//         meta: { btnPermissions: [&#39;admin&#39;,&#39;supper&#39;] }  //页面需要的权限</span></span>
<span class="line"><span>//     },</span></span>
<span class="line"><span>//     {</span></span>
<span class="line"><span>//         path: &#39;normal&#39;,</span></span>
<span class="line"><span>//         component: _import(&#39;system/normal&#39;),</span></span>
<span class="line"><span>//         name: &#39;权限测试页&#39;,</span></span>
<span class="line"><span>//         meta: { btnPermissions: [&#39;admin&#39;] }  //页面需要的权限</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// ]</span></span></code></pre></div><h3 id="v-image" tabindex="-1">v-image <a class="header-anchor" href="#v-image" aria-label="Permalink to &quot;v-image&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>    inserted: function (el, binding) {</span></span>
<span class="line"><span>        // 为了真实体现效果，用了延时操作</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            el.setAttribute(&#39;src&#39;, binding.value)</span></span>
<span class="line"><span>        }, Math.random() * 1200)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="v-lazyload" tabindex="-1">v-lazyLoad <a class="header-anchor" href="#v-lazyload" aria-label="Permalink to &quot;v-lazyLoad&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 初始化</span></span>
<span class="line"><span>function init(el, val, def) {</span></span>
<span class="line"><span>    el.setAttribute(&#39;data-src&#39;, val)</span></span>
<span class="line"><span>    el.setAttribute(&#39;src&#39;, def)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 利用IntersectionObserver监听el</span></span>
<span class="line"><span>function observe(el) {</span></span>
<span class="line"><span>    let io = new IntersectionObserver((entries) =&gt; {</span></span>
<span class="line"><span>        const realSrc = el.dataset.src</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (entries[0].isIntersecting) {</span></span>
<span class="line"><span>            if (realSrc) {</span></span>
<span class="line"><span>                el.src = realSrc</span></span>
<span class="line"><span>                el.removeAttribute(&#39;data-src&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    io.observe(el)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="v-resize" tabindex="-1">v-resize <a class="header-anchor" href="#v-resize" aria-label="Permalink to &quot;v-resize&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function inserted(el, binding) {</span></span>
<span class="line"><span>    console.log(&#39;binding&#39;, binding)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const callback = binding.value // 指令的绑定值，是一个function函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // eslint-disable-next-line no-shadow</span></span>
<span class="line"><span>    const debounce = binding.arg || 200 // 延时执行函数的毫秒数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const options = binding.options || { passive: true } // 禁止执行与事件关联的默认动作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let debounceTimeout = null</span></span>
<span class="line"><span>    const onResize = () =&gt; {</span></span>
<span class="line"><span>        clearTimeout(debounceTimeout)</span></span>
<span class="line"><span>        debounceTimeout = setTimeout(callback, debounce, options)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window.addEventListener(&#39;resize&#39;, onResize, options) // 监听窗口缩放</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    el._onResize = { // 存储监听窗口缩放事件的参数，方便在unbind钩子函数中解除事件绑定的时候使用到</span></span>
<span class="line"><span>        callback,</span></span>
<span class="line"><span>        options,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (!binding.modifiers || !binding.modifiers.quiet) {</span></span>
<span class="line"><span>        onResize()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function unbind(el, binding) { // 绑定的DOM元素被移除时触发</span></span>
<span class="line"><span>    const { callback, options } = el._onResize</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window.removeEventListener(&#39;resize&#39;, callback, options)</span></span>
<span class="line"><span>    delete el._onResize</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;resize&#39;, // 指令名称</span></span>
<span class="line"><span>    inserted,</span></span>
<span class="line"><span>    unbind,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://juejin.cn/post/6844903537625808904</span></span></code></pre></div><h3 id="v-tack" tabindex="-1">v-tack <a class="header-anchor" href="#v-tack" aria-label="Permalink to &quot;v-tack&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const tack = {</span></span>
<span class="line"><span>    bind(el, binding, vnode) {</span></span>
<span class="line"><span>        el.style.position = &#39;fixed&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tackTop = {</span></span>
<span class="line"><span>    bind(el, binding, vnode) {</span></span>
<span class="line"><span>        console.log(&#39;binding1&#39;, binding)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        el.style.position = &#39;fixed&#39;</span></span>
<span class="line"><span>        el.style.top = binding.value + &#39;px&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tackLeftOrTop = {</span></span>
<span class="line"><span>    bind(el, binding, vnode) {</span></span>
<span class="line"><span>        console.log(&#39;binding2&#39;, binding)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        el.style.position = &#39;fixed&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const s = (binding.arg === &#39;left&#39; ? &#39;left&#39; : top)</span></span>
<span class="line"><span>        el.style[s] = binding.value + &#39;px&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tackLeftAndTop = {</span></span>
<span class="line"><span>    bind(el, binding, vnode) {</span></span>
<span class="line"><span>        console.log(&#39;binding3&#39;, binding)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        el.style.position = &#39;fixed&#39;</span></span>
<span class="line"><span>        el.style.top = binding.value.top + &#39;px&#39;</span></span>
<span class="line"><span>        el.style.left = binding.value.left + &#39;px&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {</span></span>
<span class="line"><span>    tack,</span></span>
<span class="line"><span>    tackTop,</span></span>
<span class="line"><span>    tackLeftOrTop,</span></span>
<span class="line"><span>    tackLeftAndTop,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="工程化注册" tabindex="-1">工程化注册 <a class="header-anchor" href="#工程化注册" aria-label="Permalink to &quot;工程化注册&quot;">​</a></h2><h3 id="directives-js" tabindex="-1">directives.js <a class="header-anchor" href="#directives-js" aria-label="Permalink to &quot;directives.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 导入指令</span></span>
<span class="line"><span>import copy from &#39;./v-copy.js&#39;</span></span>
<span class="line"><span>import { tack, tackTop, tackLeftOrTop, tackLeftAndTop } from &#39;./v-tack.js&#39;</span></span>
<span class="line"><span>// eslint-disable-next-line no-shadow</span></span>
<span class="line"><span>import focus from &#39;./v-focus.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import image from &#39;./v-image.js&#39;</span></span>
<span class="line"><span>import resize from &#39;./v-resize.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// eslint-disable-next-line no-shadow</span></span>
<span class="line"><span>import debounce from &#39;./v-debounce.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义指令</span></span>
<span class="line"><span>const directives = {</span></span>
<span class="line"><span>    copy,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tack,</span></span>
<span class="line"><span>    tackTop,</span></span>
<span class="line"><span>    tackLeftOrTop,</span></span>
<span class="line"><span>    tackLeftAndTop,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    focus,</span></span>
<span class="line"><span>    image,</span></span>
<span class="line"><span>    resize,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    debounce,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这种写法可以批量注册指令，需要在main中进行导入</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    install(Vue) {</span></span>
<span class="line"><span>        console.log(&#39;install-Vue&#39;, Vue)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object.keys(directives).forEach((key) =&gt; {</span></span>
<span class="line"><span>            Vue.directive(key, directives[key])</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Vue.directive(&#39;tack&#39;,{</span></span>
<span class="line"><span>//     bind(el,binding,vnode){</span></span>
<span class="line"><span>//         el.style.position = &#39;fixed&#39;</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://juejin.cn/post/6906028995133833230#heading-0</span></span></code></pre></div><h3 id="注册-2" tabindex="-1">注册 <a class="header-anchor" href="#注册-2" aria-label="Permalink to &quot;注册&quot;">​</a></h3><p>在src文件夹中新建plugin文件夹，新建base.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Directives from &#39;@/components/directives/directives.js&#39;</span></span>
<span class="line"><span>Vue.use(Directives)</span></span></code></pre></div>`,53),i=[l];function c(t,o,d,r,u,h){return a(),n("div",null,i)}const m=s(e,[["render",c]]);export{b as __pageData,m as default};
