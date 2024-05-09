import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/snippet.md","filePath":"public/_file/md/enclosure/snippet.md"}'),e={name:"public/_file/md/enclosure/snippet.md"},t=p(`<h3 id="组件介绍" tabindex="-1">组件介绍 <a class="header-anchor" href="#组件介绍" aria-label="Permalink to &quot;组件介绍&quot;">​</a></h3><p>主要用于代码片段的展示用；组件封装用到<code>pre</code>标签，<code>jq</code>，以及<code>syntaxy.light.min.css</code>样式</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>使用前对Snippet组件进行了全局注册</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;snippet&quot;&gt;</span></span>
<span class="line"><span>        &lt;Snippet :list=&quot;snippet.list&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const snippet = reactive({</span></span>
<span class="line"><span>            list: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    title: &#39;HTML123&#39;,</span></span>
<span class="line"><span>                    code: \`</span></span>
<span class="line"><span>                        &lt;div&gt;</span></span>
<span class="line"><span>                            &lt;DatePicker v-model=&quot;time.timeRange&quot; range valueType=&quot;format&quot; format=&quot;YYYY-MM-DD&quot; class=&quot;search_control&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                    \`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    title: &#39;JS&#39;,</span></span>
<span class="line"><span>                    code: \`</span></span>
<span class="line"><span>                        const time = reactive({</span></span>
<span class="line"><span>                            timeRange: [dayjs().subtract(6, &#39;month&#39;).format(&#39;YYYY-MM-DD&#39;), dayjs().format(&#39;YYYY-MM-DD&#39;)],</span></span>
<span class="line"><span>                            timeDimension: &#39;day&#39;,</span></span>
<span class="line"><span>                            statisticType: &#39;number&#39;,</span></span>
<span class="line"><span>                            statisticDimension: &#39;device_name&#39;,</span></span>
<span class="line"><span>                            statisticItem: [],</span></span>
<span class="line"><span>                        })</span></span>
<span class="line"><span>                    \`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            snippet,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h3>`,6),l=[t];function i(c,o,r,d,u,m){return a(),n("div",null,l)}const g=s(e,[["render",i]]);export{h as __pageData,g as default};
