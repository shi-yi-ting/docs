import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/pagination/smallPagination.md","filePath":"public/static/_file/md/enclosure/pagination/smallPagination.md"}'),l={name:"public/static/_file/md/enclosure/pagination/smallPagination.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;SmallPagination :total=&quot;content.total&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import SmallPagination from &#39;@/views/enclosure/pagination/smallPagination.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const content = reactive({</span></span>
<span class="line"><span>    total: 24,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="smallpagination组件封装代码" tabindex="-1">SmallPagination组件封装代码 <a class="header-anchor" href="#smallpagination组件封装代码" aria-label="Permalink to &quot;SmallPagination组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;span v-show=&quot;total&quot; class=&quot;small-pagination&quot;&gt; --&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;small-pagination&quot;&gt;</span></span>
<span class="line"><span>            &lt;span :class=&quot;{ &#39;isPrevNoClick&#39;: page.isPrevNoClick }&quot; @click=&quot;prev&quot;&gt;&amp;lt;&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;page&quot;&gt;{{ page.current }}/{{ Math.ceil(total / size) }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;span :class=&quot;{ &#39;isNextNoClick&#39;: page.isNextNoClick }&quot; @click=&quot;next&quot;&gt;&amp;gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, watch } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    prosp: {</span></span>
<span class="line"><span>        size: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 1,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        total: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 6,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup(props, { emit }) {</span></span>
<span class="line"><span>        const page = reactive({</span></span>
<span class="line"><span>            current: 1,</span></span>
<span class="line"><span>            isPrevNoClick: false,</span></span>
<span class="line"><span>            isNextNoClick: false,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const prev = () =&gt; {</span></span>
<span class="line"><span>            page.isNextNoClick = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (page.current &lt;= 2) {</span></span>
<span class="line"><span>                page.isPrevNoClick = true</span></span>
<span class="line"><span>                page.isNextNoClick = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                page.current = 1</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                page.current--</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const next = () =&gt; {</span></span>
<span class="line"><span>            page.isPrevNoClick = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (page.current &gt;= Math.ceil(props.total / props.size) - 1) {</span></span>
<span class="line"><span>                page.isPrevNoClick = false</span></span>
<span class="line"><span>                page.isNextNoClick = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                page.current = Math.ceil(props.total / props.size)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                page.current++</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        watch(() =&gt; page.current, () =&gt; {</span></span>
<span class="line"><span>            emit(&#39;currentPageChange&#39;, page.current)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            page,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            prev,</span></span>
<span class="line"><span>            next,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),t=[e];function i(c,o,r,g,u,m){return a(),n("div",null,t)}const v=s(l,[["render",i]]);export{h as __pageData,v as default};
