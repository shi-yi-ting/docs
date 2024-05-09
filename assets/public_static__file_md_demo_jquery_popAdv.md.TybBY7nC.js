import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/jquery/popAdv.md","filePath":"public/static/_file/md/demo/jquery/popAdv.md"}'),l={name:"public/static/_file/md/demo/jquery/popAdv.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;ani&quot;&gt;我是内容&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;ad&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import $ from &#39;jquery&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { defineComponent, onMounted } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const jqEntry = () =&gt; {</span></span>
<span class="line"><span>            $(&#39;.ad&#39;).slideDown(1000).slideUp(1000).fadeIn(1000).children(&#39;span&#39;).click(function() {</span></span>
<span class="line"><span>                $(this).parent().fadeOut(1000)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            jqEntry()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.ad{</span></span>
<span class="line"><span>    width: 230px;</span></span>
<span class="line"><span>    height: 120px;</span></span>
<span class="line"><span>    background-image: url(./img/ad.jpg);</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    right: 10px;</span></span>
<span class="line"><span>    bottom: 40px;</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>    z-index: 100;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.ad span{</span></span>
<span class="line"><span>    width: 40px;</span></span>
<span class="line"><span>    height: 18px;</span></span>
<span class="line"><span>    background-image: url(./img/h.jpg);</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    right: 0;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,d,r,g,u){return a(),n("div",null,i)}const h=s(l,[["render",t]]);export{_ as __pageData,h as default};
