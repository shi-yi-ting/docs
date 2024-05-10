import{_ as s,c as a,o as n,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/路由切换标题.md","filePath":"docs/article/路由切换标题.md"}'),e={name:"docs/article/路由切换标题.md"},l=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding-bottom: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;&quot;&gt;根据路由参数切换标题: &lt;/label&gt;</span></span>
<span class="line"><span>        &lt;span&gt;{{ pageTitle }}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            pageType: this.$route.params.type,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        pageTitle() {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                add: &#39;新建任务&#39;,</span></span>
<span class="line"><span>                edit: &#39;编辑任务&#39;,</span></span>
<span class="line"><span>            }[this.pageType]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        $route: {</span></span>
<span class="line"><span>            immediate: true,</span></span>
<span class="line"><span>            handler($route) {</span></span>
<span class="line"><span>                this.pageType = $route.params.type</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="路由模块" tabindex="-1">路由模块 <a class="header-anchor" href="#路由模块" aria-label="Permalink to &quot;路由模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Frame from &#39;@/views/frame.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let router = {</span></span>
<span class="line"><span>    name: &#39;frame&#39;,</span></span>
<span class="line"><span>    path: &#39;/frame&#39;,</span></span>
<span class="line"><span>    component: Frame,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path: &#39;/frame/frame&#39;,</span></span>
<span class="line"><span>            component: () =&gt; import(/* webpackChunkName: &quot;table&quot; */ &#39;@/views/frame/frame.vue&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            children: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    path: &#39;/frame/frame/router&#39;,</span></span>
<span class="line"><span>                    component: () =&gt; import(/* webpackChunkName: &quot;canvas&quot; */ &#39;@/views/frame/pages/router/router.vue&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    children: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            name: &#39;编辑任务&#39;,</span></span>
<span class="line"><span>                            path: &#39;switchRouter/:type&#39;,</span></span>
<span class="line"><span>                            component: () =&gt; import(/* webpackChunkName: &quot;editTask&quot; */ &#39;@/views/frame/pages/router/switchRouter/switchRouter.vue&#39;),</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                    ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default router</span></span></code></pre></div>`,4),t=[l];function i(c,o,r,d,u,m){return n(),a("div",null,t)}const _=s(e,[["render",i]]);export{g as __pageData,_ as default};
