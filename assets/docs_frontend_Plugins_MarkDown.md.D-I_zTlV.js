import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"vue3中 MarkDown 的使用","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Plugins/MarkDown.md","filePath":"docs/frontend/Plugins/MarkDown.md"}'),e={name:"docs/frontend/Plugins/MarkDown.md"},l=p(`<h1 id="vue3中-markdown-的使用" tabindex="-1">vue3中 MarkDown 的使用 <a class="header-anchor" href="#vue3中-markdown-的使用" aria-label="Permalink to &quot;vue3中 MarkDown 的使用&quot;">​</a></h1><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> md-editor-v3</span></span></code></pre></div><h2 id="简单封装" tabindex="-1">简单封装 <a class="header-anchor" href="#简单封装" aria-label="Permalink to &quot;简单封装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;MdPreview :editorId=&quot;id&quot; :modelValue=&quot;content&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { MdPreview } from &#39;md-editor-v3&#39;</span></span>
<span class="line"><span>import &#39;md-editor-v3/lib/preview.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        MdPreview,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        content: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        id: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            dafault: &#39;preview-only&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;markDown&quot;&gt;</span></span>
<span class="line"><span>        &lt;Common :title=&quot;common.title&quot;&gt;</span></span>
<span class="line"><span>            &lt;MarkDown :content=&quot;markDown.content&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/Common&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import Common from &#39;../vue/common.vue&#39;</span></span>
<span class="line"><span>// import markDowns from &#39;./docs/markDown.md&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Common,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const common = reactive({</span></span>
<span class="line"><span>            title: {</span></span>
<span class="line"><span>                mainTitle: &#39;编程技术&#39;,</span></span>
<span class="line"><span>                subTitle: &#39;vue3中 MarkDown 的使用&#39;,</span></span>
<span class="line"><span>                readTime: &#39;阅读约3分钟&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const markDown = reactive({</span></span>
<span class="line"><span>            content: &#39;### Hello Editor&#39;,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            // 获取markDown文件的字符串</span></span>
<span class="line"><span>            axios(&#39;static/file/md/markDown.md&#39;).then((resp) =&gt; {</span></span>
<span class="line"><span>                markDown.content = resp.data</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            common,</span></span>
<span class="line"><span>            markDown,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="参考了解" tabindex="-1">参考了解 <a class="header-anchor" href="#参考了解" aria-label="Permalink to &quot;参考了解&quot;">​</a></h2><p><a href="https://github.com/imzbf/md-editor-v3" target="_blank" rel="noreferrer">参考连接</a></p>`,9),t=[l];function i(c,o,r,d,m,h){return a(),s("div",null,t)}const k=n(e,[["render",i]]);export{g as __pageData,k as default};
