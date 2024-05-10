import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/titleBar.md","filePath":"public/static/_file/md/enclosure/titleBar.md"}'),l={name:"public/static/_file/md/enclosure/titleBar.md"},e=p(`<h2 id="使用-路由跳转" tabindex="-1">使用-路由跳转 <a class="header-anchor" href="#使用-路由跳转" aria-label="Permalink to &quot;使用-路由跳转&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;TitleBar :title=&quot;&#39;专题专区&#39;&quot; @onLink=&quot;toRouterPage(&#39;second&#39;)&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import TitleBar from &#39;@/views/enclosure/titleBar/titleBar.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const toRouterPage = (item) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;item&#39;, item)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="使用-分页" tabindex="-1">使用-分页 <a class="header-anchor" href="#使用-分页" aria-label="Permalink to &quot;使用-分页&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;TitleBar :type=&quot;&#39;page&#39;&quot; :title=&quot;&#39;权威评论&#39;&quot; :current=&quot;page.current&quot; :pages=&quot;page.pages&quot; @goPrev=&quot;goPrev&quot; @goNext=&quot;goNext&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import TitleBar from &#39;@/views/enclosure/titleBar/titleBar.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const page = reactive({</span></span>
<span class="line"><span>    current: 1,</span></span>
<span class="line"><span>    pages: 6,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const goPrev = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;上一页&#39;)</span></span>
<span class="line"><span>    if (page.current === 1) {</span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // const resp = await getDataApi({</span></span>
<span class="line"><span>    //     size: 6,</span></span>
<span class="line"><span>    //     current: page.current - 1,</span></span>
<span class="line"><span>    // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 需要后台返回数据的同时支持返回当前页和页数</span></span>
<span class="line"><span>    // page.current = resp.data.current</span></span>
<span class="line"><span>    // page.pages = resp.data.pages</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const goNext = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;下一页&#39;)</span></span>
<span class="line"><span>    if (page.current === page.pages) {</span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // const resp = await getDataApi({</span></span>
<span class="line"><span>    //     size: 6,</span></span>
<span class="line"><span>    //     current: page.current + 1,</span></span>
<span class="line"><span>    // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 需要后台支持返回当前页和页数</span></span>
<span class="line"><span>    // page.current = resp.data.current</span></span>
<span class="line"><span>    // page.pages = resp.data.pages</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const toRouterPage = (item) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;item&#39;, item)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="titlebar组件封装代码" tabindex="-1">titleBar组件封装代码 <a class="header-anchor" href="#titlebar组件封装代码" aria-label="Permalink to &quot;titleBar组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;titlebar-wrap&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;titlebar-name&quot;&gt;{{ title }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div v-if=&quot;type &amp;&amp; type === &#39;page&#39;&quot; class=&quot;titlebar-link&quot;&gt;</span></span>
<span class="line"><span>            &lt;span @click=&quot;goPrev&quot;&gt;&amp;lt;&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;page&quot;&gt;{{ current }}/{{ pages }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;span @click=&quot;goNext&quot;&gt;&amp;gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;slot v-else-if=&quot;type &amp;&amp; type === &#39;slot&#39;&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div v-else-if=&quot;type &amp;&amp; type === &#39;btn&#39;&quot; class=&quot;titlebar-link-btn&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-button type=&quot;info&quot; size=&quot;small&quot; @click=&quot;onLink&quot;&gt;{{ moreTitle }}&lt;/el-button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div v-else-if=&quot;type &amp;&amp; type === &#39;empty&#39;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div v-else class=&quot;titlebar-link&quot; @click=&quot;onLink&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;{{ moreTitle }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;i class=&quot;el-icon-arrow-right&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        title: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;标题&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        type: {</span></span>
<span class="line"><span>            type: String, // page slot btn emty</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        current: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 0,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pages: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 0,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        moreTitle: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;了解更多&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        goPrev() {</span></span>
<span class="line"><span>            this.$emit(&#39;goPrev&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        goNext() {</span></span>
<span class="line"><span>            this.$emit(&#39;goNext&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onLink() {</span></span>
<span class="line"><span>            this.$emit(&#39;onLink&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.titlebar-wrap {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: space-between;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    margin: 24px 0;</span></span>
<span class="line"><span>    height: 24px;</span></span>
<span class="line"><span>    border-left: 4px solid #01bd9f;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.titlebar-name {</span></span>
<span class="line"><span>    padding-left: 8px;</span></span>
<span class="line"><span>    font-size: 20px;</span></span>
<span class="line"><span>    font-weight: 500;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.titlebar-link {</span></span>
<span class="line"><span>    padding-right: 8px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.titlebar-link span {</span></span>
<span class="line"><span>    padding: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.titlebar-link .page {</span></span>
<span class="line"><span>    padding: 0 6px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* .titlebar-link-btn .el-button--info {</span></span>
<span class="line"><span>    color: #333;</span></span>
<span class="line"><span>    border: 1px solid #333;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.titlebar-link-btn .el-button--info:hover {</span></span>
<span class="line"><span>    color: #333;</span></span>
<span class="line"><span>    border: 1px solid #333;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>} */</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,6),t=[e];function i(c,o,r,u,g,d){return a(),n("div",null,t)}const h=s(l,[["render",i]]);export{q as __pageData,h as default};
