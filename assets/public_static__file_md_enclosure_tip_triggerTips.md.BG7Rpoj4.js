import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/tip/triggerTips.md","filePath":"public/static/_file/md/enclosure/tip/triggerTips.md"}'),t={name:"public/static/_file/md/enclosure/tip/triggerTips.md"},l=p(`<h3 id="triggertips使用" tabindex="-1">triggerTips使用 <a class="header-anchor" href="#triggertips使用" aria-label="Permalink to &quot;triggerTips使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用前需导入组件</span></span>
<span class="line"><span>&lt;TriggerTips content=&quot;测试内容&quot;&gt;</span></span>
<span class="line"><span>    &lt;el-button&gt;鼠标放上来试试&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;/TriggerTips&gt;</span></span></code></pre></div><h3 id="triggertips组件代码" tabindex="-1">triggerTips组件代码 <a class="header-anchor" href="#triggertips组件代码" aria-label="Permalink to &quot;triggerTips组件代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;trigger-tips&quot;&gt;</span></span>
<span class="line"><span>      &lt;slot /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;div class=&quot;trigger-tips-content&quot;&gt;</span></span>
<span class="line"><span>          &lt;div&gt;</span></span>
<span class="line"><span>              &lt;div class=&quot;trigger-tips-content-warpper&quot;&gt;</span></span>
<span class="line"><span>                  &lt;slot name=&quot;content&quot;&gt;</span></span>
<span class="line"><span>                      {{ content }}</span></span>
<span class="line"><span>                  &lt;/slot&gt;</span></span>
<span class="line"><span>              &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>    content: {</span></span>
<span class="line"><span>        type: String,</span></span>
<span class="line"><span>        default: &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.trigger-tips {</span></span>
<span class="line"><span>  --default-padding: 10px;</span></span>
<span class="line"><span>  --default-border-radius: 5px;</span></span>
<span class="line"><span>  --default-color: #ffffff;</span></span>
<span class="line"><span>  --default-font-size: 14px;</span></span>
<span class="line"><span>  --default-bg-color: rgb(0 0 0 / 65%);</span></span>
<span class="line"><span>  --default-max-width: 250px;</span></span>
<span class="line"><span>  --default-margin-top: 10px;</span></span>
<span class="line"><span>  --default-transition-time: 0.3s;</span></span>
<span class="line"><span>  &amp;:hover .trigger-tips-content {</span></span>
<span class="line"><span>    grid-template-rows: 1fr;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .trigger-tips-content {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    margin-top: var(--default-margin-top);</span></span>
<span class="line"><span>    max-width: var(--default-max-width);</span></span>
<span class="line"><span>    font-size: var(--default-font-size);</span></span>
<span class="line"><span>    border-radius: var(--default-border-radius);</span></span>
<span class="line"><span>    color: var(--default-color);</span></span>
<span class="line"><span>    background-color: var(--default-bg-color);</span></span>
<span class="line"><span>    transition: var(--default-transition-time);</span></span>
<span class="line"><span>    grid-template-rows: 0fr;</span></span>
<span class="line"><span>    z-index: 999999;</span></span>
<span class="line"><span>    &amp; &gt; * {</span></span>
<span class="line"><span>      padding: 0 var(--default-padding);</span></span>
<span class="line"><span>      min-height: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .trigger-tips-content-warpper {</span></span>
<span class="line"><span>      padding: var(--default-padding);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),e=[l];function i(c,r,o,g,d,u){return a(),n("div",null,e)}const m=s(t,[["render",i]]);export{h as __pageData,m as default};
