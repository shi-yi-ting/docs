import{_ as s,c as a,o as n,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Plugins/request/字典表获取.md","filePath":"docs/frontend/Plugins/request/字典表获取.md"}'),e={name:"docs/frontend/Plugins/request/字典表获取.md"},i=p(`<h2 id="获取字典工具函数封装" tabindex="-1">获取字典工具函数封装 <a class="header-anchor" href="#获取字典工具函数封装" aria-label="Permalink to &quot;获取字典工具函数封装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { getDictionaryApi } from &#39;@/api/request.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const getOptions = async (type) =&gt; {</span></span>
<span class="line"><span>    const params = {</span></span>
<span class="line"><span>        keyCode: type,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const resp = await getDictionaryApi(params)</span></span>
<span class="line"><span>    if (resp.success) {</span></span>
<span class="line"><span>        list = resp.data.map((item) =&gt; {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                label: item.dicValue,</span></span>
<span class="line"><span>                value: item.dicCode</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        console.log(&#39;获取下拉框选项失败&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return list</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="获取下拉框选项getdictionary的使用" tabindex="-1">获取下拉框选项getDictionary的使用 <a class="header-anchor" href="#获取下拉框选项getdictionary的使用" aria-label="Permalink to &quot;获取下拉框选项getDictionary的使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, onMounted, type UnwrapRef } from &#39;vue&#39;</span></span>
<span class="line"><span>import { getOptions } from &#39;@/utils/getDictionary.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const options = reactive({</span></span>
<span class="line"><span>    faciliityLineName: [], // 库线名</span></span>
<span class="line"><span>    faciliityType: [], // 设施类型</span></span>
<span class="line"><span>    reactiveailwayBureau: [], // 路局</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(async () =&gt; {</span></span>
<span class="line"><span>    options.faciliityLineName = await getOptions(&#39;FaciliityLineName&#39;) // 检查库线</span></span>
<span class="line"><span>    options.faciliityType = await getOptions(&#39;FaciliityType&#39;) // 检修设施类型</span></span>
<span class="line"><span>    options.reactiveailwayBureau = await getOptions(&#39;RailwayBureau&#39;) // 路局</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,4),t=[i];function l(c,o,r,d,u,g){return n(),a("div",null,t)}const m=s(e,[["render",l]]);export{h as __pageData,m as default};
