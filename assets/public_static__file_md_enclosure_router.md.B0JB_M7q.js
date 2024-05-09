import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/router.md","filePath":"public/static/_file/md/enclosure/router.md"}'),e={name:"public/static/_file/md/enclosure/router.md"},l=p(`<h2 id="路由导航守卫" tabindex="-1">路由导航守卫 <a class="header-anchor" href="#路由导航守卫" aria-label="Permalink to &quot;路由导航守卫&quot;">​</a></h2><h3 id="全局路由导航守卫的使用" tabindex="-1">全局路由导航守卫的使用 <a class="header-anchor" href="#全局路由导航守卫的使用" aria-label="Permalink to &quot;全局路由导航守卫的使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueRouter from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import $store from &#39;@/store/index.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import homeRouter from &#39;@/views/home/router.js&#39;</span></span>
<span class="line"><span>import vueRouter from &#39;@/views/vue/router.js&#39;</span></span>
<span class="line"><span>import devdocsRouter from &#39;@/views/devdocs/router.js&#39;</span></span>
<span class="line"><span>import websiteRouter from &#39;@/views/website/router.js&#39;</span></span>
<span class="line"><span>import componentRouter from &#39;@/views/component/router.js&#39;</span></span>
<span class="line"><span>import demoRouter from &#39;@/views/demo/router.js&#39;</span></span>
<span class="line"><span>import interviewRouter from &#39;@/views/interview/router.js&#39;</span></span>
<span class="line"><span>import mongodbRouter from &#39;@/views/mongodb/router.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(VueRouter)</span></span>
<span class="line"><span>let routerSettings = {</span></span>
<span class="line"><span>    routes: [</span></span>
<span class="line"><span>        homeRouter,</span></span>
<span class="line"><span>        vueRouter,</span></span>
<span class="line"><span>        devdocsRouter,</span></span>
<span class="line"><span>        websiteRouter,</span></span>
<span class="line"><span>        componentRouter,</span></span>
<span class="line"><span>        demoRouter,</span></span>
<span class="line"><span>        interviewRouter,</span></span>
<span class="line"><span>        mongodbRouter,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path: &#39;/login&#39;,</span></span>
<span class="line"><span>            name: &#39;login&#39;,</span></span>
<span class="line"><span>            meta: { title: &#39;login&#39; },</span></span>
<span class="line"><span>            component: () =&gt; import(/* webpackChunkName: &quot;home&quot; */ &#39;@/components/common/login/login.vue&#39;),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = new VueRouter(routerSettings)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.onReady(() =&gt; { // 把一个回调排队，在路由完成初始导航时调用。（刷新页面的时候才执行???）</span></span>
<span class="line"><span>    console.log(&#39;进入router.onReady了(刷新页面的时候执行???)&#39;)</span></span>
<span class="line"><span>    $store.commit(&#39;$setState&#39;, { key: &#39;showAppLoading&#39;, value: false }) // 关闭loading加载组件</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由导航守卫，路由跳转之前执行</span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;进入router.beforeEach了&#39;, routerSettings.routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 进入模块前执行 enter</span></span>
<span class="line"><span>    if (to.matched.length &gt; 0) {</span></span>
<span class="line"><span>        console.log(&#39;to&#39;, to)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let toModuleName = to.matched[0].name</span></span>
<span class="line"><span>        $store.commit(&#39;$setState&#39;, { key: &#39;moduleNow&#39;, value: toModuleName })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        console.log(&#39;toModuleName&#39;, toModuleName)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由导航守卫，在跳转之后执行</span></span>
<span class="line"><span>// eslint-disable-next-line consistent-return</span></span>
<span class="line"><span>router.afterEach((to /* , from*/) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;进入router.afterEach了&#39;)</span></span>
<span class="line"><span>    if (to.matched.length === 0) {</span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取 path meta</span></span>
<span class="line"><span>    let meta = $store.getters.getPathMeta(to)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 进入页面后配置 topHeader激活菜单项</span></span>
<span class="line"><span>    let headerActive = (meta.header || {}).active || undefined</span></span>
<span class="line"><span>    if ($store.state.header.active !== headerActive) {</span></span>
<span class="line"><span>        $store.commit(&#39;$setState&#39;, {</span></span>
<span class="line"><span>            key: &#39;header.active&#39;,</span></span>
<span class="line"><span>            value: headerActive,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 进入页面后配置 menusHide</span></span>
<span class="line"><span>    // let menusHide = meta.menusHide || false</span></span>
<span class="line"><span>    // if ($store.state.menusHide !== menusHide) {</span></span>
<span class="line"><span>    //     $store.commit(&#39;$setState&#39;, {</span></span>
<span class="line"><span>    //         key: &#39;menusHide&#39;,</span></span>
<span class="line"><span>    //         value: menusHide,</span></span>
<span class="line"><span>    //     })</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 进入页面后配置 breadCrumb.hidletbread CrumbLeftPad</span></span>
<span class="line"><span>    // let breadCrumbLeftPad = (meta.breadCrumb || {}).leftPad || false</span></span>
<span class="line"><span>    // if ($store.state.breadCrumb.leftPad !== breadCrumbLeftPad) {</span></span>
<span class="line"><span>    //     $store.commit(&#39;$setState&#39;, {</span></span>
<span class="line"><span>    //         key: &#39;breadCrumb.leftPad&#39;,</span></span>
<span class="line"><span>    //         value: breadCrumbLeftPad,</span></span>
<span class="line"><span>    //     })</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 进入页面后配置 breadCrumb.hide(决定是否展示面包屑)</span></span>
<span class="line"><span>    let breadCrumbHide = (meta.breadcrumb || {}).hide || false</span></span>
<span class="line"><span>    if ($store.state.breadCrumb.hide !== breadCrumbHide) {</span></span>
<span class="line"><span>        $store.commit(&#39;$setState&#39;, {</span></span>
<span class="line"><span>            key: &#39;breadCrumb.hide&#39;,</span></span>
<span class="line"><span>            value: breadCrumbHide,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 显示 breadCrumb时,获取 breadCrumb.list</span></span>
<span class="line"><span>    if ($store.state.breadCrumb.hide) {</span></span>
<span class="line"><span>        let breadCrumblist</span></span>
<span class="line"><span>        if ((meta.breadCrumb || {}).list !== undefined) {</span></span>
<span class="line"><span>            // 获取自定义 breadCrumb.list</span></span>
<span class="line"><span>            breadCrumblist = meta.breadCrumb.list</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 未配置 breadCrumb.list时,依据path自动获取</span></span>
<span class="line"><span>            breadCrumblist = $store.getters.getPathBreadCrumb(to)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $store.commit(&#39;$setState&#39;, {</span></span>
<span class="line"><span>            key: &#39;breadCrumb.list&#39;,</span></span>
<span class="line"><span>            value: breadCrumblist,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default router</span></span></code></pre></div><h3 id="组件导航守卫" tabindex="-1">组件导航守卫 <a class="header-anchor" href="#组件导航守卫" aria-label="Permalink to &quot;组件导航守卫&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>        label: &#39;舆情分析&#39;,</span></span>
<span class="line"><span>        img: &#39;audio-opinion&#39;,</span></span>
<span class="line"><span>        child: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                label: &#39;预警看板&#39;,</span></span>
<span class="line"><span>                href: &#39;earlyWarn/board&#39;,</span></span>
<span class="line"><span>                component: () =&gt; import(/* webpackChunkName: &quot;audio-earlyWarn&quot; */ &#39;./page/earlyWarn/board/board.vue&#39;),</span></span>
<span class="line"><span>                beforeEnter: async(to, from, next) =&gt; {</span></span>
<span class="line"><span>                    await getPositionTree()</span></span>
<span class="line"><span>                    next()</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                label: &#39;用户源声&#39;,</span></span>
<span class="line"><span>                href: &#39;earlyWarn/sourceVoice&#39;,</span></span>
<span class="line"><span>                component: () =&gt; import(/* webpackChunkName: &quot;audio-earlyWarn&quot; */ &#39;./page/earlyWarn/sourceVoice/sourceVoice.vue&#39;),</span></span>
<span class="line"><span>                beforeEnter: async(to, from, next) =&gt; {</span></span>
<span class="line"><span>                    await getPositionTree()</span></span>
<span class="line"><span>                    next()</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    },</span></span></code></pre></div>`,5),t=[l];function i(r,o,c,u,m,d){return a(),n("div",null,t)}const f=s(e,[["render",i]]);export{h as __pageData,f as default};
