import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/css/状态提示.md","filePath":"public/static/_file/md/demo/css/状态提示.md"}'),l={name:"public/static/_file/md/demo/css/状态提示.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;clearfix ptb30&quot;&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;&quot;&gt;状态提示：&lt;/label&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;operate_info&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-for=&quot;(item,index) in stateList&quot; :key=&quot;index&quot; class=&quot;stateItem&quot;&gt;</span></span>
<span class="line"><span>                &lt;span :style=&quot;&#39;background:&#39; + item.label&quot; :data=&quot;item.label&quot; /&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{{ item.value }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            stateList: [</span></span>
<span class="line"><span>                // { label: &#39;#e9e9e9&#39;, value: &#39;未执行&#39; },</span></span>
<span class="line"><span>                { label: &#39;pink&#39;, value: &#39;未执行&#39; },</span></span>
<span class="line"><span>                { label: &#39;#ffaa33&#39;, value: &#39;执行中&#39; },</span></span>
<span class="line"><span>                { label: &#39;#3ecca6&#39;, value: &#39;成功&#39; },</span></span>
<span class="line"><span>                { label: &#39;#fd5b59&#39;, value: &#39;失败&#39; },</span></span>
<span class="line"><span>                { label: &#39;#70b2fe&#39;, value: &#39;选中&#39; },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.operate_info {</span></span>
<span class="line"><span>    /* float: right; */</span></span>
<span class="line"><span>    width: calc(100% - 200px);</span></span>
<span class="line"><span>    line-height: 40px;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.operate_info .stateItem {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    min-width: 80px;</span></span>
<span class="line"><span>    line-height: 40px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.operate_info .stateItem span {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.operate_info .stateItem span:first-child {</span></span>
<span class="line"><span>    width: 10px;</span></span>
<span class="line"><span>    height: 10px;</span></span>
<span class="line"><span>    margin-right: 5px;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,d,r,u,_){return a(),n("div",null,t)}const m=s(l,[["render",i]]);export{f as __pageData,m as default};
