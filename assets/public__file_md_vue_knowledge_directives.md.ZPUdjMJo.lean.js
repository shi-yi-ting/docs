import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/knowledge/directives.md","filePath":"public/_file/md/vue/knowledge/directives.md"}'),e={name:"public/_file/md/vue/knowledge/directives.md"},i=p(`<h2 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h2><p>注意：vue2和vue3在自定义指令时使用的周期函数有不同</p><h3 id="vue2中自定义clickoutside-点击元素外部触发" tabindex="-1">vue2中自定义clickOutside（点击元素外部触发） <a class="header-anchor" href="#vue2中自定义clickoutside-点击元素外部触发" aria-label="Permalink to &quot;vue2中自定义clickOutside（点击元素外部触发）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 适用于vue2,它的周期函数是bind，unbind</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// plugins文件加中新建base.js导入之定义指令并进行全局注册</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import clickOutside from &#39;@/components/directives/clickOutside.js&#39;</span></span>
<span class="line"><span>Vue.directive(&#39;clickOutside&#39;, clickOutside)</span></span>
<span class="line"><span>import fixed from &#39;@/components/directives/fixed.js&#39;</span></span>
<span class="line"><span>Vue.directive(&#39;fixed&#39;, fixed)</span></span></code></pre></div><h3 id="main-js中导入base-js" tabindex="-1">main.js中导入base.js <a class="header-anchor" href="#main-js中导入base-js" aria-label="Permalink to &quot;main.js中导入base.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueCompositionApi from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span>Vue.use(VueCompositionApi)</span></span>
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
<span class="line"><span>window.$this = $app</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
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
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="vue3中自定义clickoutside-点击元素外部触发" tabindex="-1">vue3中自定义clickOutside（点击元素外部触发） <a class="header-anchor" href="#vue3中自定义clickoutside-点击元素外部触发" aria-label="Permalink to &quot;vue3中自定义clickOutside（点击元素外部触发）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 适用于vue3,周期函数是beforeMount，unmounted</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="注册-1" tabindex="-1">注册 <a class="header-anchor" href="#注册-1" aria-label="Permalink to &quot;注册&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// plugins文件加中新建base.js导入之定义指令并进行全局注册</span></span>
<span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import snippet from &#39;@/components/base/snippet/snippet.vue&#39;</span></span>
<span class="line"><span>import bubbles from &#39;@/components/base/bubbles/bubbles.vue&#39; // 背景气泡</span></span>
<span class="line"><span>import markDown from &#39;@/components/base/markDown/markDown.vue&#39; // 背景气泡</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义指令</span></span>
<span class="line"><span>import clickOutside from &#39;@/components/directives/clickOutside.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function setupBaseComponents(app: App&lt;Element&gt;) {</span></span>
<span class="line"><span>    app.component(&#39;Snippet&#39;, snippet)</span></span>
<span class="line"><span>    app.component(&#39;Bubbles&#39;, bubbles)</span></span>
<span class="line"><span>    app.component(&#39;MarkDown&#39;, markDown)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    app.directive(&#39;clickOutside&#39;, clickOutside)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="main-js中导入base-js-1" tabindex="-1">main.js中导入base.js <a class="header-anchor" href="#main-js中导入base-js-1" aria-label="Permalink to &quot;main.js中导入base.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { setupRouter } from &#39;@/router/index.js&#39;</span></span>
<span class="line"><span>import { setupIcons } from &#39;@/plugins/antIcons.js&#39;</span></span>
<span class="line"><span>import { setupBaseComponents } from &#39;@/plugins/base.ts&#39;</span></span>
<span class="line"><span>import preview from &#39;vue3-image-preview&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/assets/css/common.css&#39;</span></span>
<span class="line"><span>import &#39;ant-design-vue/dist/antd.css&#39; // 这里不导入的话在js中使用的ant组件样式将出不来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/globals/globals.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 页面适配</span></span>
<span class="line"><span>// import &#39;amfe-flexible&#39; // 适用与H5，貌似不适用pc端</span></span>
<span class="line"><span>// import &#39;lib-flexible/flexible&#39; // 适用与H5，貌似不适用pc端</span></span>
<span class="line"><span>// import &#39;@/utils/rem.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setupRouter(app) // 挂载 路由 --- 原来：app.use(router)</span></span>
<span class="line"><span>// setupElement(app) // ui库注册</span></span>
<span class="line"><span>setupIcons(app)</span></span>
<span class="line"><span>setupBaseComponents(app)</span></span>
<span class="line"><span>app.use(preview)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><h4 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div v-clickOutside=&quot;clickOutside&quot;&gt;</span></span>
<span class="line"><span>        directives</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>const clickOutside = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;clickOutside&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,18),l=[i];function t(c,o,r,d,u,m){return a(),n("div",null,l)}const b=s(e,[["render",t]]);export{v as __pageData,b as default};
