import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/process/process.md","filePath":"public/_file/md/enclosure/process/process.md"}'),e={name:"public/_file/md/enclosure/process/process.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;line-content&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;line-progress&quot; :style=&quot;{width:num+&#39;%&#39;}&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>    num: {</span></span>
<span class="line"><span>        type: [String, Number],</span></span>
<span class="line"><span>        value: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.line-content {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 24px;</span></span>
<span class="line"><span>    border-radius: 4px;</span></span>
<span class="line"><span>    background: #2e527b;</span></span>
<span class="line"><span>    .line-progress {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        top: 0;</span></span>
<span class="line"><span>        bottom: 0;</span></span>
<span class="line"><span>        left: 0;</span></span>
<span class="line"><span>        border-radius: 4px;</span></span>
<span class="line"><span>        background-image: repeating-linear-gradient(</span></span>
<span class="line"><span>            120deg,</span></span>
<span class="line"><span>            #1a87d2 0%,</span></span>
<span class="line"><span>            #1a87d2 1%,</span></span>
<span class="line"><span>            #2f91d4 1%,</span></span>
<span class="line"><span>            #2f91d4 2%</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        background-position: -2% 0;</span></span>
<span class="line"><span>        background-size: 400%;</span></span>
<span class="line"><span>        animation: slider 12s linear infinite;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @keyframes slider {</span></span>
<span class="line"><span>        100% {</span></span>
<span class="line"><span>            background-position: -100% 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[l];function t(c,o,r,d,u,g){return a(),n("div",null,i)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};
