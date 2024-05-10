import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/tabs/tabs03.md","filePath":"public/static/_file/md/demo/tabs/tabs03.md"}'),e={name:"public/static/_file/md/demo/tabs/tabs03.md"},l=p(`<h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;tabList&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li v-for=&quot;(item, index) of tab.list&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>                &lt;div :class=&quot;{ &#39;active&#39;: tab.isActive === item.active }&quot; @click=&quot;tabSwitch(item)&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span&gt;{{ item.name }}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive , onMounted, computed } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { useRoute, useRouter } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        // 路由</span></span>
<span class="line"><span>        const routerObj = reactive({</span></span>
<span class="line"><span>            router: useRouter(),</span></span>
<span class="line"><span>            routes: useRoute(),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // tab 处理</span></span>
<span class="line"><span>        function handleTabs() {</span></span>
<span class="line"><span>            const tab = reactive({</span></span>
<span class="line"><span>                isActive: computed({</span></span>
<span class="line"><span>                    get() {</span></span>
<span class="line"><span>                        return routerObj.routes.matched[0].meta.header.active || &#39;home&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    set(newVal) { },</span></span>
<span class="line"><span>                }),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                list: [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;首页&#39;,</span></span>
<span class="line"><span>                        active: &#39;home&#39;,</span></span>
<span class="line"><span>                        url: &#39;/home&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;导航&#39;,</span></span>
<span class="line"><span>                        active: &#39;guide&#39;,</span></span>
<span class="line"><span>                        url: &#39;/guide&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;组件&#39;,</span></span>
<span class="line"><span>                        active: &#39;enclosure&#39;,</span></span>
<span class="line"><span>                        url: &#39;/enclosure&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;案例&#39;,</span></span>
<span class="line"><span>                        active: &#39;demo&#39;,</span></span>
<span class="line"><span>                        url: &#39;/demo&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;Blog-v3&#39;,</span></span>
<span class="line"><span>                        active: &#39;blog-v3&#39;,</span></span>
<span class="line"><span>                        url: &#39;https://shi_yi_ting.gitee.io/my-blog/#/home&#39;</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const tabSwitch = (item) =&gt; {</span></span>
<span class="line"><span>                tab.isActive = item.active</span></span>
<span class="line"><span>                if (item.active === &#39;blog-v3&#39;) {</span></span>
<span class="line"><span>                    window.open(item.url, &#39;_blank&#39;, console.log(item.url))</span></span>
<span class="line"><span>                    return false</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                routerObj.router.push(item.url)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return { tab, tabSwitch }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;routerObj&#39;, routerObj);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...handleTabs()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>/* tab切换栏 */</span></span>
<span class="line"><span>.tabList {</span></span>
<span class="line"><span>    ul {</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        li {</span></span>
<span class="line"><span>            display: inline-block;</span></span>
<span class="line"><span>            color: #b8bec0;</span></span>
<span class="line"><span>            vertical-align: top;</span></span>
<span class="line"><span>            box-sizing: border-box;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            user-select: none;</span></span>
<span class="line"><span>            // font-family: &quot;FZLTHJW-GB1-0&quot;;</span></span>
<span class="line"><span>            // font-size: 16px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            div {</span></span>
<span class="line"><span>                width: 100%;</span></span>
<span class="line"><span>                color: #fff;</span></span>
<span class="line"><span>                text-align: center;</span></span>
<span class="line"><span>                box-sizing: border-box;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            span {</span></span>
<span class="line"><span>                display: inline-block;</span></span>
<span class="line"><span>                color: #666666;</span></span>
<span class="line"><span>                padding: 0 10px;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            .active {</span></span>
<span class="line"><span>                color: #3a84ef;</span></span>
<span class="line"><span>                span {</span></span>
<span class="line"><span>                    color: #3a84ef;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><p>注意meta中的内容</p><div class="language-home vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">home</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import HomeFrame from &#39;@/views/home/homeFrame.vue&#39;</span></span>
<span class="line"><span>import Frame from &#39;@/views/frame.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    name: &#39;home&#39;,</span></span>
<span class="line"><span>    component: Frame,</span></span>
<span class="line"><span>    redirect: &#39;/home&#39;,</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>        title: &#39;home&#39;,</span></span>
<span class="line"><span>        header: {</span></span>
<span class="line"><span>            active: &#39;home&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path: &#39;/home&#39;,</span></span>
<span class="line"><span>            name: &#39;home&#39;,</span></span>
<span class="line"><span>            component: () =&gt; import(/* webpackChunkName: &quot;home&quot; */ &#39;@/views/home/home.vue&#39;),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default router</span></span></code></pre></div><div class="language-guide vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">guide</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Frame from &#39;@/views/frame.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = {</span></span>
<span class="line"><span>    path: &#39;/guide&#39;,</span></span>
<span class="line"><span>    name: &#39;guide&#39;,</span></span>
<span class="line"><span>    component: Frame,</span></span>
<span class="line"><span>    redirect: &#39;/guide&#39;,</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>        title: &#39;guide&#39;,</span></span>
<span class="line"><span>        header: {</span></span>
<span class="line"><span>            active: &#39;guide&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path: &#39;/guide&#39;,</span></span>
<span class="line"><span>            name: &#39;guide&#39;,</span></span>
<span class="line"><span>            component: () =&gt; import(/* webpackChunkName: &quot;guide&quot; */ &#39;@/views/guide/guide.vue&#39;),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default router</span></span></code></pre></div><h2 id="router文件夹中的-index-js" tabindex="-1">router文件夹中的 index.js <a class="header-anchor" href="#router文件夹中的-index-js" aria-label="Permalink to &quot;router文件夹中的 index.js&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span>import { createRouter, createWebHashHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加载进度条</span></span>
<span class="line"><span>import Nprogress from &#39;nprogress&#39;</span></span>
<span class="line"><span>import &#39;nprogress/nprogress.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import homeRouter from &#39;@/views/home/router.ts&#39;</span></span>
<span class="line"><span>import guideRouter from &#39;@/views/guide/router.ts&#39;</span></span>
<span class="line"><span>// import blogDocsRouter from &#39;@/views/blogDocs/router.ts&#39;</span></span>
<span class="line"><span>// import devDocsRouter from &#39;@/views/devDocs/router.ts&#39;</span></span>
<span class="line"><span>import enclosureRouter from &#39;@/views/enclosure/router.ts&#39;</span></span>
<span class="line"><span>// import vueDocsRouter from &#39;@/views/vueDocs/router.ts&#39;</span></span>
<span class="line"><span>import demoRouter from &#39;@/views/demo/router.ts&#39;</span></span>
<span class="line"><span>// import testRouter from &#39;@/views/test/router.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routerSettings = {</span></span>
<span class="line"><span>    routes: [</span></span>
<span class="line"><span>        homeRouter,</span></span>
<span class="line"><span>        guideRouter,</span></span>
<span class="line"><span>        // blogDocsRouter,</span></span>
<span class="line"><span>        // devDocsRouter,</span></span>
<span class="line"><span>        enclosureRouter,</span></span>
<span class="line"><span>        // vueDocsRouter,</span></span>
<span class="line"><span>        demoRouter,</span></span>
<span class="line"><span>        // testRouter,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>    history: createWebHashHistory(),</span></span>
<span class="line"><span>    routes: routerSettings.routes,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 进度条配置</span></span>
<span class="line"><span>Nprogress.configure({</span></span>
<span class="line"><span>    easing: &#39;ease&#39;, // 动画方式</span></span>
<span class="line"><span>    speed: 500, // 速度递增进度条的速度</span></span>
<span class="line"><span>    showSpinner: false, // 是否显示加载ico</span></span>
<span class="line"><span>    trickleSpeed: 200, // 自动递增间隔</span></span>
<span class="line"><span>    minimum: 0.3, // 初始化时的最小百分比</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由前置守卫</span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>    Nprogress.start() // 每次切换页面时调用进度条</span></span>
<span class="line"><span>    next() // 这个一定要加，否则页面不会跳转</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由后置守卫</span></span>
<span class="line"><span>router.afterEach(() =&gt; {</span></span>
<span class="line"><span>    Nprogress.done() // 在即将进入新的页面组件前关闭进度条</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** 挂载路由实例 */</span></span>
<span class="line"><span>export function setupRouter(app: App&lt;Element&gt;) {</span></span>
<span class="line"><span>    app.use(router)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// export default router</span></span></code></pre></div>`,8),i=[l];function t(c,o,r,u,m,d){return a(),n("div",null,i)}const v=s(e,[["render",t]]);export{h as __pageData,v as default};
