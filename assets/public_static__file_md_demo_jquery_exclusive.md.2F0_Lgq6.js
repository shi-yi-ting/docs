import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/jquery/exclusive.md","filePath":"public/static/_file/md/demo/jquery/exclusive.md"}'),t={name:"public/static/_file/md/demo/jquery/exclusive.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;jq-exclusive&quot;&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button&gt;快速&lt;/Button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const jqueryMounted = () =&gt; {</span></span>
<span class="line"><span>            // 1. 隐式迭代 给所有的按钮都绑定了点击事件</span></span>
<span class="line"><span>            $(&#39;.jq-exclusive button&#39;).click(function() {</span></span>
<span class="line"><span>                // // 2. 当前的元素变化背景颜色</span></span>
<span class="line"><span>                // $(this).css(&#39;background&#39;, &#39;pink&#39;)</span></span>
<span class="line"><span>                // // 3. 其余的兄弟去掉背景颜色 隐式迭代</span></span>
<span class="line"><span>                // $(this).siblings(&#39;.jq-exclusive button&#39;).css(&#39;background&#39;, &#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                $(this).css(&#39;color&#39;, &#39;red&#39;).siblings().css(&#39;color&#39;, &#39;&#39;)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            jqueryMounted()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,1),e=[l];function i(c,o,u,d,r,g){return a(),n("div",null,e)}const v=s(t,[["render",i]]);export{m as __pageData,v as default};
