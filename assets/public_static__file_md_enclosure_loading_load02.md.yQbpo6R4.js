import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/loading/load02.md","filePath":"public/static/_file/md/enclosure/loading/load02.md"}'),l={name:"public/static/_file/md/enclosure/loading/load02.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;load-container&quot;&gt;</span></span>
<span class="line"><span>      &lt;svg id=&quot;load&quot; x=&quot;0px&quot; y=&quot;0px&quot; viewBox=&quot;0 0 150 150&quot;&gt;</span></span>
<span class="line"><span>          &lt;circle id=&quot;loading-inner&quot; cx=&quot;75&quot; cy=&quot;75&quot; r=&quot;60&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/svg&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &quot;load2&quot;,</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.load-container {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>  height: 150px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#load {</span></span>
<span class="line"><span>  width: 75px;</span></span>
<span class="line"><span>  animation: loading 3s linear infinite;</span></span>
<span class="line"><span>  #loading-inner {</span></span>
<span class="line"><span>    stroke: {</span></span>
<span class="line"><span>      dashoffset: 0;</span></span>
<span class="line"><span>      dasharray: 300;</span></span>
<span class="line"><span>      width: 10;</span></span>
<span class="line"><span>      miterlimit: 10;</span></span>
<span class="line"><span>      linecap: round;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    animation: loading-circle 2s linear infinite;</span></span>
<span class="line"><span>    stroke: #00adb5;</span></span>
<span class="line"><span>    fill: transparent;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes loading {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    transform: rotate(0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    transform: rotate(360deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@keyframes loading-circle {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    stroke-dashoffset: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    stroke-dashoffset: -600;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,r,d,u,g){return a(),n("div",null,i)}const m=s(l,[["render",t]]);export{f as __pageData,m as default};
