import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/jquery/highlight.md","filePath":"public/static/_file/md/demo/jquery/highlight.md"}'),l={name:"public/static/_file/md/demo/jquery/highlight.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/01.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/02.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/03.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/04.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/05.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;./img/06.jpg&quot; alt=&quot;&quot;&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import $ from &#39;jquery&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { defineComponent, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const jqEntry = () =&gt; {</span></span>
<span class="line"><span>            $(&#39;.wrap&#39;).find(&#39;li&#39;).mouseenter(function () {</span></span>
<span class="line"><span>                $(this).css(&#39;opacity&#39;, 1)</span></span>
<span class="line"><span>                $(this).siblings(&#39;li&#39;).css(&#39;opacity&#39;, 0.4)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            $(&#39;.wrap&#39;).mouseleave(function () {</span></span>
<span class="line"><span>                $(this).children().children(&#39;li&#39;).css(&#39;opacity&#39;, 1)</span></span>
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
<span class="line"><span>.wrap {</span></span>
<span class="line"><span>    width: 666px;</span></span>
<span class="line"><span>    height: 420px;</span></span>
<span class="line"><span>    padding: 10px 0 0 10px;</span></span>
<span class="line"><span>    /*注意这里*/</span></span>
<span class="line"><span>    margin: 30px auto;</span></span>
<span class="line"><span>    background: #000;</span></span>
<span class="line"><span>    border: 1px solid #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.wrap ul {</span></span>
<span class="line"><span>    list-style: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.wrap li {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    margin: 0 10px 10px 0;</span></span>
<span class="line"><span>    /*注意这里*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[t];function e(c,o,g,u,r,d){return a(),n("div",null,i)}const h=s(l,[["render",e]]);export{m as __pageData,h as default};
